import { createRouter, createWebHistory } from 'vue-router'
import OperatorLayout from '@/components/OperatorLayout.vue'
import OperatorOrder from '@/components/OperatorOrder.vue'
import AdminLayout from '@/components/AdminLayout.vue'
import AdminOrder from '@/components/AdminOrder.vue'
import SignLayout from '@/components/SignLayout.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import AdminUser from '@/components/AdminUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign',
      component: SignLayout,
      children: [
        {
          path: 'in',
          component: SignIn
        },
        {
          path: 'up',
          component: SignUp
        }
      ]
    },
    {
      path: '/operator',
      component: OperatorLayout,
      children: [
        {
          path: 'order',
          component: OperatorOrder
        }
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'order',
          component: AdminOrder
        },
        {
          path: 'user',
          component: AdminUser
        }
      ]
    }
  ]
})

export default router
