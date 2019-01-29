import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Md5 from '../components/Md5';
import Base64 from '../components/Base64';

const router = new Router({
    routes: [
        {path: '/', component: Md5},
        {path: '/base64', component: Base64}
    ]
});

export default router;
