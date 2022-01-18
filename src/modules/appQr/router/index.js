export default {
    name: ':id',
    component: () => import(/* webpackChunkName: "appQr" */ '@/modules/appQr/views/VistaPrincipal.vue'),
    // children: [
    //     {
    //         path: ':id',
    //         name: 'entry',
    //         component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/appQr/views/VistaPrincipal.vue'),
    //     }   
    // ]
}