import Vue from 'vue'
import VueRouter from 'vue-router'
import BudgetCalculator from './components/BudgetCalculator.vue'
import Ping from './components/Ping.vue';


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'BudgetCalculator',
      component: BudgetCalculator
    },
    
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    }

  ]
})