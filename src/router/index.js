import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Md5 from '../components/Md5';
import Base64str from '../components/Base64str';
import Base64img from '../components/Base64img';

const router = new Router({
    routes: [
        {path: '/', component: Md5},
        {path: '/md5', component: Md5},
        {path: '/base64str', component: Base64str},
        {path: '/base64img', component: Base64img}
    ]
});

export default router;
