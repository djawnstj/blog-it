import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"
import BlogIt from "../views/BlogIt.vue"
import NoteView from "../views/NoteView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/blog-it",
    name: "blogIt",
    component: BlogIt,
    props: true // true로 설정하면 데이터를 props로도 받습니다.
  },
  {
    path: "/note",
    name: "note",
    component: NoteView,
    props: true // true로 설정하면 데이터를 props로도 받습니다.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
