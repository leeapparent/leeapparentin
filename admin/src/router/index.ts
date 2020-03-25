import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import CourseEdit from "../views/CourseEdit.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "/courses/list", name: "course-list", component: CourseEdit }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
