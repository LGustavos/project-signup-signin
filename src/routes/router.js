import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/signin',
            component: Signin
        },
        {
            path: '/',
            redirect: '/signin'
        },
        {
            path: '/signup',
            component: Signup
        }
    ]
})

export default router 