<template>
  <div>
    <v-homepage-header/>
    <v-img
      alt="logement inedit sur la cote d'un lac"
      src="/static/img/home.jpg"
      max-height="800"
      gradient="to top, rgba(100,115,201,.0), rgba(0,0,0,.4)">
      <v-layout
        justify-center
        align-center
        fill-height>
        <v-basic-search/>
      </v-layout>
    </v-img>
    <v-container
      fluid
      mt-5>
      <v-layout
        fill-height
        justify-center>
        <v-flex md10>
          <h3>Les plus populaires</h3>
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(slide, index) in popularZones"
              :key="index">
              <v-big-card :slide="slide"/>
            </swiper-slide>
            <div
              slot="pagination"
              class="swiper-pagination"/>
            <div
              slot="button-prev"
              class="swiper-button-prev"/>
            <div
              slot="button-next"
              class="swiper-button-next"/>
            <div
              slot="pagination"
              class="swiper-pagination"/>
          </swiper>
        </v-flex>
      </v-layout>
      <v-layout
        fill-height
        justify-center
        mt-5>
        <v-flex md10>
          <h3>Les types de logements</h3>
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(slide, index) in homeTypes"
              :key="index">
              <v-big-card :slide="slide"/>
            </swiper-slide>
            <div
              slot="pagination"
              class="swiper-pagination"/>
            <div
              slot="button-prev"
              class="swiper-button-prev"/>
            <div
              slot="button-next"
              class="swiper-button-next"/>
            <div
              slot="pagination"
              class="swiper-pagination"/>
          </swiper>
        </v-flex>
      </v-layout>
      <v-layout
        fill-height
        justify-center
        mt-5>
        <v-flex md10>
          <h3>Les meilleures logements</h3>
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(slide, index) in bestHomes"
              :key="index">
              <v-small-card :item="slide"/>
            </swiper-slide>
            <div
              slot="pagination"
              class="swiper-pagination"/>
            <div
              slot="button-prev"
              class="swiper-button-prev"/>
            <div
              slot="button-next"
              class="swiper-button-next"/>
            <div
              slot="pagination"
              class="swiper-pagination"/>
          </swiper>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'HomepageVue',
  // components: {
  //   'v-big-card':
  // },
  data () {
    return {
      popularZones: [
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        },
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        },
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        },
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        },
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        },
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        },
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        },
        { title: 'Hauts de France',
          country: 'France',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'region/adkTYrs5Fz41'
        }
      ],
      homeTypes: [
        { title: 'Cabanes dans les arbres',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'homeType/deY24Xs6eds'
        },
        { title: 'Cabanes dans les arbres',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'homeType/deY24Xs6eds'
        },
        { title: 'Cabanes dans les arbres',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'homeType/deY24Xs6eds'
        },
        { title: 'Cabanes dans les arbres',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'homeType/deY24Xs6eds'
        },
        { title: 'Cabanes dans les arbres',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'homeType/deY24Xs6eds'
        },
        { title: 'Cabanes dans les arbres',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'homeType/deY24Xs6eds'
        },
        { title: 'Cabanes dans les arbres',
          count: '27',
          img: '/static/img/falaises-etretat.jpg',
          src: 'homeType/deY24Xs6eds'
        }
      ],
      bestHomes: [
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        { name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        loopFillGroupWithBlank: false,
        slidesPerGroup: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      images: [
        {
          src: '/static/img/home_img_1.jpg'
        },
        {
          src: '/static/img/home_img_2.jpg'
        }
      ],
      cityDestinations: [
        {
          name: 'Grenoble',
          text: 'A partir de 49€ la nuit',
          src: 'https://picsum.photos/200/300/?image=170'
        },
        {
          name: 'Lyon',
          text: 'A partir de 42€ la nuit',
          src: 'https://picsum.photos/200/300/?image=350'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .header {
    margin-bottom: 0px;
  }
</style>
