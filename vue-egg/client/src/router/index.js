import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import User from "../views/index.vue"
import Login from "../views/login.vue"
import Registry from "../views/registry.vue"
import List from "../views/list.vue"
import Detail from "../views/detail.vue"
import Shop from "../views/shop.vue"

import { getSession } from "../utils/index"

Vue.use(Router)



let router = new Router({
    mode: 'history',
    routes: [{
            path: "/",
            component: User,
        },
        {
            path: "/user",
            component: User,
            children: [{
                    path: "/user/login",
                    component: Login,
                },
                {
                    path: "/user/registry",
                    component: Registry,
                },
                {
                    path: "/user/list",
                    component: List,
                },
                {
                    path: "/user/detail/:id",
                    component: Detail,
                },
                {
                    path: "/user/shop",
                    component: Shop,
                }

            ]
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.path === "/user/list") {
//         getSession("token") ? next() : next("/user/login")
//     }
// })


export default router