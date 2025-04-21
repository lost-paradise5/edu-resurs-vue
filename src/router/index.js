import MainPage from '@/views/MainPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import CourseCreate from '@/views/CreateCourse.vue';
import CourseList from '@/views/CourseList.vue';
import Register from '@/views/Register.vue';
import AppLogin from '@/views/AppLogin.vue';
import MyCourses from '@/views/MyCourses.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: AppLogin,
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/courses',
    name: 'CourseList',
    component: CourseList,
  },
  {
    path: '/courses/create',
    name: 'CourseCreate',
    component: CourseCreate,
  },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: () => import('@/views/CourseDetail.vue')
  },
  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCourses
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router