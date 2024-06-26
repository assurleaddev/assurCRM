import Dashboard from '../views/Dashboard.vue';

export default [
    {
        path: '/',
        component: () => import('../../common/layouts/Admin.vue'),
        children: [
            {
                path: '/admin/dashboard',
                component: Dashboard,
                name: 'admin.dashboard.index',
                meta: {
                    requireAuth: true,
                    menuParent: "dashboard",
                    menuKey: route => "dashboard",
                }
            }
        ]

    }
]
