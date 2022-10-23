import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import KakaoLogin from '@/components/KakaoLogin'
import Login from '@/components/Login'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/kakaoLogin',
            name: 'KakaoLogin',
            component: KakaoLogin
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        }
    ]
})