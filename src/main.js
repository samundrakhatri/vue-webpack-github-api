// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login/Login.vue';
import Home from './components/Me.vue';
Vue.use(VueRouter);
/* eslint-disable no-new */

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
