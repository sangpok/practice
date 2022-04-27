import { createRouter, createWebHistory } from 'vue-router';
import OnboardingView from '../views/OnboardingView.vue';
// import FeedPage from '../views/FeedPage.vue';
// import MainView from '../views/MainView.vue';

const routes = [
    {
        path: '/',
        name: 'onboarding',
        component: OnboardingView,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/MainView'),
        children: [
            { path: '/main', component: () => import('@/views/FeedPage') },
            { path: '/dm', component: () => import('@/views/DirectMsg') },
            { path: '/explore', component: () => import('@/views/ExplorePage') },
        ],
        meta: {
            requiresAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
    // console.log(to);
    // if (to.matched.some((record) => record.meta.requiresAuth)) {
    //     if (localStorage.getItem('jwt') === null) {
    //         next({
    //             path: '/',
    //             params: { nextUrl: to.fullPath },
    //         });
    //     } else {
    //         next();
    //     }
    // } else {
    //     if (localStorage.getItem('jwt') !== null) {
    //         next({
    //             path: '/main',
    //             params: { nextUrl: '/main' },
    //         });
    //     } else {
    //         next();
    //     }
    // }
    next();
});

export default router;
