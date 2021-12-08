import Vue from 'vue'
import App from './App.vue'
//引入vuex
import store from './store'
//引入UI
import { Button,Icon,Carousel,CarouselItem } from 'element-ui';

Vue.config.productionTip = false

Vue.use(Icon)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
