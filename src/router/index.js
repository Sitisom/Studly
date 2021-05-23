import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('../views/Auth')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile')
    },
    {
        path: '/test/:id',
        name: 'TestDetail',
        component: () => import('../views/TestDetail'),
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const DEFAULT_TITLE = 'Studly';
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = `${ DEFAULT_TITLE } - ${ to.name }` || DEFAULT_TITLE;
    });
});

export default router
