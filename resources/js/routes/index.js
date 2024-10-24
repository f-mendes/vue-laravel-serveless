import { createRouter, createWebHistory } from "vue-router";

import AuthenticatedLayout from '@/layouts/Authenticated.vue'; 
import GuestLayout from '@/layouts/Guest.vue'; 

import PostsIndex from "@/components/Posts/Index.vue";
import PostCreate from "@/components/Posts/Create.vue";
import PostEdit from "@/components/Posts/Edit.vue";
import Login from "@/components/Auth/Login.vue";

const routes = [
  { 
      component: GuestLayout,
      children: [
          {
              path: '/login',
              name: 'login',
              component: Login
          },
      ]
  },
  {
      component: AuthenticatedLayout,
      children: [ 
      { 
        path: '/posts', 
        name: 'posts.index',
        component: PostsIndex,
        meta: {
          title: 'Posts'
        }
      },
      { 
        path: '/posts/create',
        name: 'posts.create',
        component: PostCreate,
        meta: {
          title: 'Add new post'
        }
      },
      { 
        path: '/posts/edit/:id',
        name: 'posts.edit',
        component: PostEdit,
        meta: {
          title: 'Edit post'
        }
      }

    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
