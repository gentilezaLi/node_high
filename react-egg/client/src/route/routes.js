import List from "../views/index"

import Home from "../views/home/home"
import User from "../views/user/index"

import Detail from "../views/detail"
import Val from "../views/val/index"
import Shop from "../views/shop/index"

import Login from "../views/user/login"
import Registry from "../views/user/registry"

export const routes = [{
        path: "/list",
        component: List,
        children: [{
                path: "/list/home",
                component: Home
            },
            {
                path: "/list/detail/:id",
                component: Detail
            },
            {
                path: "/list/val",
                component: Val
            },
            {
                path: "/list/shop",
                component: Shop
            },
            {
                path: "/list/user",
                component: User,
                children: [{
                        path: "/list/user/login",
                        component: Login,
                    },
                    {
                        path: "/list/user/registry",
                        component: Registry,
                    },
                    {
                        path: "/list/user",
                        redirect: "/list/user/login"
                    }
                ]
            },
            {
                path: "/list",
                redirect: "/list/home"
            }
        ]
    },
    {
        path: "/",
        redirect: "/list"
    }
]