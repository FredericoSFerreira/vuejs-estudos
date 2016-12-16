import Vue from 'vue';
// import App from './App.vue'
import {Time} from './time';

new Vue({
  el: '#app',
  // render: h => h(App)
  data : {
    titulo : "Welcome App Vue.js 2",
    time: new Time("Time X","Valor")

  }
})
