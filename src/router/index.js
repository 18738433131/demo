import Vue from 'vue'
import Router from 'vue-router'
import cont1 from '@/components/cont1'
import cont2 from '@/components/cont2'
import cont3 from '@/components/cont3'
import cont4 from '@/components/cont4'
import cont5 from '@/components/cont5'
import cont6 from '@/components/cont6'
import cont7 from '@/components/cont7'
import cont8 from '@/components/cont8'
import cont9 from '@/components/cont9'
import cont10 from '@/components/cont10'
import cont11 from '@/components/cont11'
import cont12 from '@/components/cont12'
import cont13 from '@/components/cont13'
import cont14 from '@/components/cont14'
import cont15 from '@/components/cont15'

import conta from '@/components/conta'
import contb from '@/components/contb'
import contc from '@/components/contc'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'cont1',
      component: cont1
    },
    {
      path: '/cont2',
      component: cont2
    },
    {
      path: '/cont3',
      component: cont3
    },
    {
      path: '/cont4',
      component: cont4
    },
    {
      path: '/cont5',
      component: cont5
    },
    {
      path: '/cont6',
      component: cont6
    },
    {
      path: '/cont7',
      component: cont7
    },
    {
      path: '/cont8',
      component: cont8
    },
    {
      path: '/cont9',
      component: cont9
    },
    {
      path: '/cont10',
      component: cont10
    },
    {
      path: '/cont11',
      component: cont11
    },
    {
      path: '/cont12',
      component: cont12
    },
    {
      path: '/cont13',
      component: cont13,
      children: [{
          path: 'conta',
          component: conta
        },
        {
          path: 'contb',
          component: contb
        },
        {
          path: 'contc',
          component: contc
        },
        {
          path: '/',
          redirect: 'conta'
        }
      ]
    },
    {
      path: '/cont14',
      component: cont14
    },
    {
      path: '/cont15',
      component: cont15
    }
  ]

})
