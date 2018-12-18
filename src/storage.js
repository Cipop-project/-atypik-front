// const jwtDecode = require('jwt-decode');

const storage = {
  install(Vue) {
    Vue.prototype.storage = storage;
    this.setToken(this.getToken());
  },
  // set(key, value) {
  //   window.localStorage.setItem(key, value)
  // },
  // get(key) {
  //   return window.localStorage.getItem(key)
  // },
  // setToken(token) {
  //   this.set('token', token);
  //   if (token) {
  //     const auth = JSON.stringify(jwtDecode(token));
  //     this.set('auth', auth);
  //     delete this.auth; // remove cache
  //   }
  //   if (this.isAdmin()) {
  //     this.set('switch', token);
  //   }
  // },
  // getToken() {
  //   return this.get('token') || '';
  // },
  // getSwitch() {
  //   return this.get('switch') || '';
  // },
  // getAuth() {
  //   if (!this.auth) {
  //     const authString = this.get('auth');
  //     if (!authString) return {};
  //     this.auth = JSON.parse(authString); // set cache
  //   }
  //   return this.auth;
  // },
  // // TODO temp delete after 2 weed
  // isAdmin() {
  //   return (this.getAuth().type === 'ADMIN' && this.getAuth().owner == null && this.getAuth().client == null && this.getAuth().agency == null) || ['ROLE_ROOT', 'ROLE_ADMIN', 'ROLE_ADMIN_ALL', 'ROLE_ADMIN_MANAGER', 'ROLE_ADMIN_CLEARANCE', 'ROLE_ADMIN_STOCKING', 'ROLE_ADMIN_AFTERSALE', 'ROLE_ADMIN_LOGISTIC', 'ROLE_ADMIN_INSPECTION'].includes(this.getAuth().roles);
  // },
  // isAgency() {
  //   return this.getAuth().type === 'AGENCY' || !!this.getAuth().agency;
  // },
  // isClient() {
  //   return this.getAuth().type === 'CLIENT' || !!this.getAuth().client;
  // },
  // isRole(role) {
  //   return (storage.getAuth().roles || '').split(',').includes(role);
  // },
  // isSwitch() {
  //   return storage.getSwitch() !== storage.getToken();
  // },
  // // TODO temp delete after 2 weed
  // getClientId() {
  //   return this.getAuth().owner || this.getAuth().client;
  // },
  // getAgencyId() {
  //   return this.getAuth().owner || this.getAuth().agency;
  // },
  getAPIPrefix() {
    let apiPrefix;
    if (this.isAdmin()) apiPrefix = '/api/admin'
    if(this.isClient()) apiPrefix = `/api/client/${this.getClientId()}`
    if(this.isAgency()) apiPrefix = `/api/agency/${this.getAgencyId()}`
    return apiPrefix
  },
  username() {
    return this.getAuth().username;
  },
  logout() {
    this.setToken('');
  },
  adminHome() {
    if (this.isRole('ROLE_ADMIN_AFTERSALE')) {
      return '/support/list';
    } else if(this.isRole('ROLE_ADMIN_INSPECTION')) {
      return'/batch/list';
    } else if(this.isRole('ROLE_ADMIN_FINANCE')) {
      return'/reconciliationFlow/billDownload';
    } else {
      return '/processFlow/create';
    }
  },
  adminHomeName() {
    if (this.isRole('ROLE_ADMIN_AFTERSALE')) {
      return 'support.list';
    } else if(this.isRole('ROLE_ADMIN_INSPECTION')) {
      return'batch.list';
    } else if(this.isRole('ROLE_ADMIN_FINANCE')) {
      return'reconciliationFlow.billDownload';
    } else {
      return 'processFlow.create';
    }
  }
}
export default storage
