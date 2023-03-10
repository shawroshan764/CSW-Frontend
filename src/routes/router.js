import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Service from '../components/Services.vue'
import Service2 from '../components/Service2.vue'
import CartPage from '../components/CartPage.vue'
import CustomerDetail from "../components/CustomerDetail.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path: '/service2',
        name: 'Service2',
        component: Service2
    },
    {
        path:'/cartpage',
        name:'CartPage',
        component: CartPage
    },
    {
        path:"/customerdetail",
        name: "CustomerDetail",
        component: CustomerDetail
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;