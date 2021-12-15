import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DataBinding from '../views/DataBinding.vue';
import NestedComponent from '../views/NestedComponent.vue';
import Calculator from '../views/Calculator.vue';
import ProvideInject from '../views/ProvideInject.vue';
import Mixins from '../views/Mixins.vue';
import KakaoLogin from '../views/KakaoLogin.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'KakaoLogin',
        component: KakaoLogin,
    },
    {
        path: '/naverlogin',
        name: 'NaverLogin',
        component: () =>
            import(/* webpackChunkName: "parent" */ '../views/NaverLogin.vue'),
    },
    {
        path: '/googlelogin',
        name: 'GoogleLogin',
        component: () =>
            import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/databinding',
        name: 'DataBinding',
        component: DataBinding,
    },
    {
        path: '/nest',
        name: 'Nest',
        component: NestedComponent,
    },
    {
        path: '/calc',
        name: 'Calc',
        component: Calculator,
    },
    {
        path: '/provide',
        name: 'provide',
        component: ProvideInject,
    },
    {
        path: '/mixin',
        name: 'mixins',
        component: Mixins,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
