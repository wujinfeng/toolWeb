import '@/assets/css/normalize.css'
import '@/assets/css/main.css'
import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
