import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import customer from '@/views/customer'
import D3 from '@/views/D3'
import design from '@/views/design'
import event from '@/views/event'
import example from '@/views/example'
import H5 from '@/views/H5'
import operating from '@/views/operating'
import PR from '@/views/PR'
import resources from '@/views/resources'
import SEO from '@/views/SEO'
import smallProgram from '@/views/smallProgram'
import team from '@/views/team'
import telphone from '@/views/telphone'
import video from '@/views/video'
import vr from '@/views/vr'
import index2 from '@/views/index2'

import zsy from '@/components/zsy'

Vue.use(Router)

export default new Router({
  routes: [
    //{
    //  path:'/',
    //  redirect:'/zsy',
    //  component: zsy
    //},
    {
      path:'/',
      redirect:'/index2',
      component: index2,
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/customer',
          name: 'customer',
          component: customer
        }
        , {
          path: '/D3',
          name: '3D',
          component: D3
        }
        , {
          path: '/design',
          name: 'design',
          component: design
        }
        , {
          path: '/event',
          name: 'event',
          component: event
        }
        , {
          path: '/example',
          name: 'example',
          component: example
        }
        , {
          path: '/H5',
          name: 'H5',
          component: H5
        }
        , {
          path: '/operating',
          name: 'operating',
          component: operating
        }
        , {
          path: '/PR',
          name: 'PR',
          component: PR
        }
        , {
          path: '/resources',
          name: 'resources',
          component: resources
        }
        , {
          path: '/SEO',
          name: 'SEO',
          component: SEO
        }
        , {
          path: '/smallProgram',
          name: 'smallProgram',
          component: smallProgram
        }
        , {
          path: '/team',
          name: 'team',
          component: team
        }
        , {
          path: '/telphone',
          name: 'telphone',
          component: telphone
        }
        , {
          path: '/video',
          name: 'video',
          component: video
        }
        , {
          path: '/vr',
          name: 'vr',
          component:vr
        }
        , {
          path: '/index2',
          name: 'index2',
          component:index2
        }
      ]
    }

  ]
})
