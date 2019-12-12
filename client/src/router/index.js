import Router from 'vue-router'

import ActivityForm from '@/components/ActivityForm'
import About from '@/components/About'

export default new Router({
    routes: [
        {
            path: '/',
            component: ActivityForm
        },
        {
            path: '/about',
            component: About
        }
    ]
})