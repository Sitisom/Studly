import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index')
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
        path: '/rate-plan',
        name: 'RatePlan',
        component: () => import('../views/RatePlan')
    },
    // {
    //     path: '/lesson/:id',
    //     name: 'TestDetail',
    //     component: () => import('../views/TestDetail'),
    //     props: true
    // },
    {
        path: '/course',
        name: 'Course',
        component: () => import('../views/Course')
    },
    {
        path: '/course/:id',
        name: 'CourseDetail',
        component: () => import('../views/CourseDetail'),
        props: true
    },
    {
        path: '/lesson',
        name: 'Lesson',
        component: () => import('../views/Lesson')
    },
    {
        path: '/lesson/:id',
        name: 'LessonDetail',
        component: () => import('../views/LessonDetail'),
        props: true
    },
    {
        path: '/test/:id',
        name: 'TestDetails',
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
