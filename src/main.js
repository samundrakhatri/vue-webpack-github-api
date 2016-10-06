// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
 global require
 */
const $ = require('jquery');
window._ = require('lodash');
window.jQuery = $;
window.$ = $;
import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import Login from './components/Login/Login.vue';
import Home from './components/Me.vue';
import { globalMixins } from './Mixins';

Vue.mixin(globalMixins);
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.http.headers.common.Authorization = 'token 3d1a2f8806c37231e42aaeb2ec9bad4d3787ea3c';
Vue.directive('loadingImage', {
  bind(el) {
    /*
    eslint no-param-reassign: ["error", { "props": false }]
    */
    el.innerHTML = '<img src="/images/loading.gif" width="200px" height="200px"/>';
  },
});

const componentsAndRoutes = [
  {
    name: 'me',
    component: Vue.component('me', Home),
    path: '/me',
  },
  {
    name: 'login',
    component: Vue.component('login', Login),
    path: '/login',
  },
];

const router = new VueRouter({
  routes: componentsAndRoutes,
});
const app = new Vue({
  router,
  data: {
    isLoggedIn: false,
    session: {
      github: {},
    },
    database: {
      users: [],
      partners: [],
      crush: [],
    },
  },
  ready() {
    this.verifyAuth();
  },
  watch: {
    $route() {
      this.verifyAuth();
    },
  },
  methods: {
    verifyAuth() {
      if (!this.isLoggedIn) {
        this.$router.push({ path: '/login' });
      }
    },
  },
});
app.$mount('#app');
