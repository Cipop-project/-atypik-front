<template>
  <div class="b-calendar">
    <v-layout>
      <v-flex md4>
        <div class="b-calendar__information">
          <div class="today d-flex justify-content-center align-items-center">
            <div class="weekDay">
              {{ selectedWeekDay | capitalize }}
            </div>
            <div class="day">
              {{ selectedDayAndMonth.day }}
            </div>
            <div class="month">
              {{ selectedDayAndMonth.month | capitalize }}
            </div>
          </div>
        </div>
      </v-flex>
      <v-layout
        md8
        pl-2>
        <div class="b-calendar__calendar">
          <div class="b-calendar__header">
            <v-layout>
              <v-flex
                class="year text-right"
                justify-end>
                <span>{{ year }}</span>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex class="text-xs-center">
                <v-btn
                  id="subtractMonthBtn"
                  icon
                  @click="subtractMonth">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <b-tooltip target="subtractMonthBtn">
                  {{ previousMonthAsString | capitalize }}
                </b-tooltip>
              </v-flex>
              <v-flex class="text-xs-center">
                <span class="month">{{ month }}</span>
              </v-flex>
              <v-flex class="text-xs-center">
                <v-btn
                  id="addMonthBtn"
                  icon
                  @click="addMonth">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                <b-tooltip target="addMonthBtn">
                  {{ nextMonthAsString | capitalize }}
                </b-tooltip>
              </v-flex>
            </v-layout>
          </div>
          <div class="b-calendar__weekdays">
            <div
              v-for="(day, index) in days"
              :key="index"
              class="weekday">
              <strong>{{ day }}</strong>
            </div>
          </div>
          <div class="b-calendar__dates">
            <v-loading :is-loading="loadingCalendar"/>
            <div
              v-for="date in dateList"
              :class="{
                'reserved': date.reserved,
                'shared': date.shared,
                'blank': date.blank,
                'no-border-right': date.key % 7 === 0,
              }"
              :key="date.key"
              :data-date="date.date"
              class="date text-right"
              @click="setSelectedDate(date.moment)">
              <span class="day">{{ date.dayNumber }}</span>
              <span class="weekday">{{ date.weekDay }}</span>
              <div
                v-show="date.additional"
                class="additional">
                <span
                  v-show="date.additional.year"
                  class="year">{{ date.additional.year }}</span>
                <span
                  v-show="date.additional.month"
                  class="month">{{ date.additional.month }}</span>
              </div>
            </div>
          </div>
        </div>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import Resource from '../resources'
import moment from 'moment'

export default {
  name: 'ReservationCalendar',
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data: function () {
    return {
      user: this.$store.state.user,
      today: moment(),
      dateContext: moment(),
      selectedDate: moment(),
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      loadingCalendar: false,
      productId: ''
    }
  },
  computed: {
    year: function () {
      return this.dateContext.format('Y')
    },
    month: function () {
      return this.dateContext.format('MMMM')
    },
    daysInMonth: function () {
      return this.dateContext.daysInMonth()
    },
    currentDate: function () {
      return this.dateContext.get('date')
    },
    firstDayOfMonth: function () {
      let firstDay = moment(this.dateContext).subtract(this.currentDate, 'days')
      return firstDay.weekday()
    },
    previousMonth: function () {
      return moment(this.dateContext).subtract(1, 'month')
    },
    previousMonthAsString: function () {
      return this.previousMonth.format('MMMM')
    },
    nextMonth: function () {
      return moment(this.dateContext).add(1, 'month')
    },
    nextMonthAsString: function () {
      return this.nextMonth.format('MMMM')
    },
    daysInPreviousMonth: function () {
      return this.previousMonth.daysInMonth()
    },
    daysFromPreviousMonth: function () {
      let daysList = []
      let count = this.daysInPreviousMonth - this.firstDayOfMonth
      while (count < this.daysInPreviousMonth) {
        count++
        daysList[count] = count
      }

      return daysList.filter(function () {
        return true
      })
    },
    dateList: function () {
      let $this = this

      let dateList = []

      let previousMonth = this.previousMonth
      let nextMonth = this.nextMonth

      // dates for display
      let formattedCurrentMonth = this.dateContext.format('MM')
      let formattedCurrentYear = this.year
      let formattedPreviousMonth = previousMonth.format('MM')
      let formattedPreviousYear = previousMonth.format('Y')
      let formattedNextMonth = nextMonth.format('MM')
      let formattedNextYear = nextMonth.format('Y')

      // counters
      let countDayInCurrentMonth = 0
      let countDayInPreviousMonth = 0

      // filling in dates from the previous month
      this.daysFromPreviousMonth.forEach(function (dayFromPreviousMonth) {
        countDayInCurrentMonth++
        countDayInPreviousMonth++

        let formattedDay = $this.formattingDay(dayFromPreviousMonth)
        let previousMonth =
          $this.daysFromPreviousMonth.length ===
          countDayInPreviousMonth
            ? $this.previousMonthAsString
            : false
        let previousYear =
          formattedCurrentYear !== formattedPreviousYear &&
          $this.daysFromPreviousMonth.length ===
          countDayInPreviousMonth
            ? formattedPreviousYear
            : false
        let additional = {
          month: previousMonth,
          year: previousYear
        }

        if (!previousMonth && !previousYear) {
          additional = false
        }

        dateList[countDayInCurrentMonth] = {
          key: countDayInCurrentMonth,
          dayNumber: formattedDay,
          date:
            formattedDay +
            '.' +
            formattedPreviousMonth +
            '.' +
            formattedPreviousYear,
          blank: true,
          reserved: false,
          additional: additional,
          weekDay: false,
          moment: moment(
            formattedPreviousYear +
            formattedPreviousMonth +
            formattedDay
          )
        }
      })

      // filling in dates from the current month
      while (countDayInCurrentMonth < this.firstDayOfMonth + this.daysInMonth) {
        countDayInCurrentMonth++

        let day = countDayInCurrentMonth - countDayInPreviousMonth
        let weekDay = this.getWeekDay(countDayInCurrentMonth)
        let formattedDay = this.formattingDay(day)

        dateList[countDayInCurrentMonth] = {
          key: countDayInCurrentMonth,
          dayNumber: formattedDay,
          date:
            formattedDay +
            '.' +
            formattedCurrentMonth +
            '.' +
            formattedCurrentYear,
          blank: false,
          reserved: false,
          shared: false,
          additional: true,
          weekDay: weekDay,
          moment: moment(
            formattedCurrentYear +
            formattedCurrentMonth +
            formattedDay
          )
        }
      }

      let daysInNextMonth = 7 - (countDayInCurrentMonth % 7)
      let countDayInCurrentMonthSaved = countDayInCurrentMonth
      let day = 0

      // filling in dates from the next month
      if (daysInNextMonth < 7) {
        while (
          countDayInCurrentMonth <
          countDayInCurrentMonthSaved + daysInNextMonth
        ) {
          countDayInCurrentMonth++
          day++

          let formattedDay = this.formattingDay(day)
          let nextMonth = day === 1 ? this.nextMonthAsString : false
          let nextYear =
            formattedCurrentYear !== formattedNextYear && day === 1
              ? formattedNextYear
              : false
          let additional = {
            month: nextMonth,
            year: nextYear
          }

          if (!nextMonth && !nextYear) {
            additional = false
          }

          dateList[countDayInCurrentMonth] = {
            key: countDayInCurrentMonth,
            dayNumber: formattedDay,
            date:
              formattedDay +
              '.' +
              formattedNextMonth +
              '.' +
              formattedNextYear,
            blank: true,
            reserved: false,
            additional: additional,
            weekDay: false,
            moment: moment(
              formattedNextYear +
              formattedNextMonth +
              formattedDay
            )
          }
        }
      }

      return dateList.filter(function () {
        return true
      })
    },
    initialDate: function () {
      return this.formattingDay(this.today.get('date'))
    },
    initialMonth: function () {
      return this.today.format('MMMM')
    },
    initialYear: function () {
      return this.today.format('Y')
    },
    todayInCurrentMonthAndYear: function () {
      return (
        this.month === this.initialMonth &&
        this.year === this.initialYear
      )
    },
    selectedDayAndMonth: function () {
      let dayAndMonth = this.selectedDate.format('D MMMM')
      dayAndMonth = dayAndMonth.split(' ')
      dayAndMonth = {
        day: dayAndMonth[0],
        month: dayAndMonth[1]
      }

      return dayAndMonth
    },
    selectedWeekDay: function () {
      return this.selectedDate.format('dddd')
    },
    todayIsEqualSelectDate: function () {
      return (
        this.selectedDate.format('YYYYMMDD') ===
        this.today.format('YYYYMMDD')
      )
    }
  },
  mounted () {
    this.getReservedDates()
  },
  methods: {
    addMonth: function () {
      this.dateContext = this.nextMonth
      this.getReservedDates()
    },
    subtractMonth: function () {
      this.dateContext = this.previousMonth
      this.getReservedDates()
    },
    setSelectedDate: function (moment) {
      this.selectedDate = moment
    },
    goToday: function () {
      this.selectedDate = this.today
      this.dateContext = this.today
    },
    formattingDay (day) {
      return ('0' + day).slice(-2)
    },
    getWeekDay (day) {
      let index = day
      if (index > 7) {
        index %= 7
      }
      index = index === 0 ? 6 : index - 1
      return this.days[index]
    },
    async getReservedDates () {
      this.loadingCalendar = true
      const data = await Resource.getReservationDatesByMonth(this.productId, this.dateContext.format('MM'))
      console.log(data)
      if (data.status === 0) {
        await data.data.forEach(this.organizeDates)
        this.loadingCalendar = false
      }
    },
    async organizeDates (data) {
      let monthStart = data.start.substring(5, 7)
      let monthEnd = data.end.substring(5, 7)
      let start = data.start.substring(8, 10)
      let end = data.end.substring(8, 10)
      console.log(monthStart)
      console.log(monthEnd)
      console.log(this.dateContext.format('MM'))

      if (monthStart === this.dateContext.format('MM') && monthEnd === this.dateContext.format('MM')) {
        console.log('within month')
        for (let i = parseInt(start); i <= parseInt(end); i++) {
          let k = this.getKeyByValue(this.dateList, i + '')
          if (this.dateList[k].reserved) {
            this.dateList[k].shared = true
          } else {
            this.dateList[k].reserved = true
          }
        }
      }
    },
    getKeyByValue (object, value) {
      return Object.keys(object).find(key => object[key].dayNumber === value)
    }
  }
}
</script>

<style scoped>
  body {
    font-weight: 300;
    font-size: 1.125em;
    line-height: 1.3;
  }
  .cursor {
    cursor: pointer;
  }
  .b-calendar {
    display: flex;
    align-items: center;
    margin: 2.5em 0;
  }
  .b-calendar__information {
    background-color: rgba(0, 123, 255, 0.2);
    border-radius: 1.2rem 0 0 1.2rem;
    height: 100%;
  }
  .b-calendar__information .today {
    flex-direction: column;
    padding-top: 3em;
  }
  .b-calendar__information .today .weekDay {
    font-size: 1.2em;
    font-weight: 100;
    padding-bottom: 0.5em;
  }
  .b-calendar__information .today .day {
    font-size: 5.5em;
    font-weight: 600;
    line-height: 1;
  }
  .b-calendar__information .today .month {
    font-size: 2em;
    font-weight: 200;
    line-height: 1;
  }
  .b-calendar__calendar {
     min-height: 40rem;
   }
  .b-calendar__header {
    margin-bottom: 2rem;
  }
  .b-calendar__header .month {
    font-size: 1.25em;
    font-weight: 200;
    text-transform: capitalize;
  }
  .b-calendar__header .year {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .b-calendar__header .arrow {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
  }
  /*.b-calendar__header .arrow:hover {*/
     /*cursor: pointer;*/
   /*}*/
  .b-calendar__weekdays {
    display: flex;
    margin-bottom: 1.25rem;
  }
  .b-calendar__weekdays .weekday {
    width: calc(100% / 7);
    padding: 0.25rem 0.5rem;
  }
  .b-calendar__dates {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .b-calendar__dates:after {
     content: "";
     position: absolute;
     bottom: 0;
     background-color: #fff;
     height: 1px;
     width: 100%;
     z-index: 1;
   }
  .b-calendar__dates .date {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    font-weight: 200;
    min-height: 4.5rem;
    padding: 0.25rem 0.5rem;
    position: relative;
    width: calc(100% / 7);
  }
  .b-calendar__dates .date.blank {
     background-color: rgba(0, 0, 0, 0.02);
     color: rgba(0, 0, 0, 0.2);
   }
  .b-calendar__dates .date.no-border-right {
     border-right: none;
   }
  .b-calendar__dates .date.reserved {
     background-color: rgba(0, 123, 255, 0.2);
   }
  .b-calendar__dates .date.shared {
    background-color: rgba(0, 123, 255, 0.4);
  }
  .b-calendar__dates .weekday {
    display: none;
  }
  .b-calendar__dates .additional {
    font-size: 0.75em;
    position: absolute;
    bottom: 0.25rem;
    left: 0.5rem;
  }
  .b-calendar__dates .additional .year {
    padding-right: 0.25rem;
    font-size: 0.75em;
  }

  @media (max-width: 768px) {
    .b-calendar__information {
      min-height: auto;
      padding-top: 2rem;
      padding-bottom: 2rem;
      border-radius: 2.5rem 2.5rem 0 0;
    }
    .today {
      padding-top: 0;
    }
  }

  @media (max-width: 480px) {
    .b-calendar__weekdays {
     display: none;
   }
    .date {
      width: 100%;
      text-align: left !important;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      display: flex;
    }
    .date.blank {
      display: none;
    }

    .weekday {
      display: block;
      margin-left: 0.25rem;
    }
  }
</style>
