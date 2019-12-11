import Router from 'vue-router'

import ActivityForm from '@/components/ActivityForm'

export default new Router({
    routes: [
        {
            path: '/',
            component: ActivityForm
        }
    ]
})