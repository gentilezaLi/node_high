import Home from '@/containers/home'

//list页
import List from "@/containers/list"

import User from '@/containers/user'

import Login from '@/containers/user/login'
import Registry from '@/containers/user/registry'


export default [{
        path: '/home',
        name: 'home',
        component: Home,
        children: []
    },
    {
        path: "/user",
        name: 'user',
        component: User,
        children: [{
                path: "/user/login",
                name: 'login',
                component: Login
            },
            {
                path: "/user/registry",
                name: 'registry',
                component: Registry
            },
        ]
    },
    {
        path: "/list",
        component: List
    }
]