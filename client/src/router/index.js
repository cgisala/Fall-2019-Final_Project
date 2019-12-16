import Router from 'vue-router'

import ActivityForm from '@/components/ActivityForm'
import ActivityTable from '@/components/ActivityTable'
import About from '@/components/About'

export default new Router({
    routes: [
        {
            path: '/',
            component: ActivityForm
        },
        {
            path: '/table',
            component: ActivityTable
        },
        {
            path: '/about',
            component: About
        },
    ]
})