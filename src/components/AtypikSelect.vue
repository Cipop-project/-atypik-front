<template>
  <el-select
    :value="value"
    :placeholder="$t('select.placeholder.' + type)"
    :disabled="disabled"
    :multiple="multiple"
    :filterable="filterable"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)">
    <el-option
      v-if="all"
      :label="$t('select.all.' + type)"
      value=""/>
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.i18n ? $t(option.label) : option.label"
      :value="option.value"/>
  </el-select>
</template>

<script type="es6">
import {
  ProductResource
  //   ClientResource,
  //   RouteResource,
  //   AgencyResource,
  //   PricingResource
} from '../resource'
import {
  PEOPLE_NUMBER
} from '../constant'
  // import {TRANSPORTERS_RETURNSHIPMENT} from '../transporterData';

export default {
  name: 'CitySelectView',
  props: {
    value: '',
    type: {
      type: [String],
      required: true
    },
    disabled: {
      type: Boolean
    },
    all: {
      type: Boolean
    },
    multiple: {
      type: Boolean
    },
    query: {
      type: Object,
      default: () => ({})
    },
    //   client: String,
    //   pricingType: String,
    filterable: {
      type: Boolean
    }
  },
  data () {
    return {
      options: []
    }
  },
  async mounted () {
    this.options = await this.fetchOptions()
  },
  methods: {
    async fetchOptions () {
      switch (this.type) {
        case 'cities': {
          const { data: cities } = await ProductResource.findCities()
          return cities.data.map((city) => ({
            label: `${city}`,
            value: city
          }))
        }
        //       case 'agency': {
        //         const {data: agencies} = await AgencyResource.findArray();
        //         return agencies.map((agency) => ({
        //           label: `${agency.id}`,
        //           value: agency.id,
        //         }));
        //       }
        //       case 'transferCenter':
        //         return this.fetchTransferCenter();
        //       case 'transporter':
        //         return this.fetchTransporters();
        //       case 'pricingTransporter':
        //         var {data: carriers} = await RouteResource.findArray();
        //         if (this.pricingType === 'SHIPMENT') {
        //           carriers = carriers.filter((carrier) => carrier.shipment === true);
        //         }
        //         return carriers.map((carrier) => ({
        //           label: 'transporter.' + carrier.name,
        //           value: carrier.name,
        //           i18n: true
        //         }));
        //       case 'commandTransporter':
        //         if (this.client) {
        //           const {data: transporters} = await PricingResource.findTransporters(this.client, 'OPERATION');
        //           return transporters.map((transporter) => ({
        //             label: this.$t(`transporter.${transporter}`),
        //             value: transporter,
        //           }));
        //         }
        //         break;
        //       case 'shipmentTransporter':
        //         if (this.client) {
        //           const {data: transporters} = await PricingResource.findTransporters(this.client, 'SHIPMENT');
        //           return transporters.map((transporter) => ({
        //             label: this.$t(`transporter.${transporter}`),
        //             value: transporter,
        //           }));
        //         }
        //
        //       case 'shipment-transporter-valid':
        //         return ['UPS'].map((value) => ({
        //           label: 'transporter.' + value,
        //           value: value,
        //           i18n: true
        //         }));
        case 'peoples':
          return PEOPLE_NUMBER.map((value) => ({
            label: value,
            value: value,
            i18n: true
          }))
          //       case 'provider':
          //         return PROVIDERS.map((value) => ({
          //           label: value,
          //           value: value,
          //           i18n: true
          //         }))
          //       case 'batchStatus':
          //         return BATCH_STATUS.map((value) => ({
          //           label: 'status.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //       case 'commandStatus':
          //         return COMMAND_STATUS.map((value) => ({
          //           label: 'status.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //       case 'destockingStatus':
          //         return DESTOCKING_STATUS.map((value) => ({
          //           label: 'status.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //       case 'shipmentStatus':
          //         return SHIPMENT_STATUS.map((value) => ({
          //           label: 'shipment.status.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //       case 'supportStatus':
          //         return SUPPORT_STATUS.map((value) => ({
          //           label: 'support.status.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //       case 'supportDescriptionStatusAdmin':
          //         return SUPPORT_DESCRIPTION_STATUS_ADMIN.map((value) => ({
          //           label: 'support.descriptionStatus.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //       case 'supportDescriptionStatusClient':
          //         return SUPPORT_DESCRIPTION_STATUS_CLIENT.map((value) => ({
          //           label: 'support.descriptionStatus.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //       case 'supportDeclarationReason':
          //         return SUPPORT_DECLARATION_REASON.map((value) => ({
          //           label: 'support.declarationReason.' + value,
          //           value: value,
          //           i18n: true
          //         }));
          //
      }
    }
  }
  // watch: {
  //   async type() {
  //     this.options = await this.fetchOptions();
  //   },
  //   async client() {
  //     this.options = await this.fetchOptions();
  //   },
  //   async pricingType() {
  //     this.options = await this.fetchOptions();
  //   }
}
</script>
