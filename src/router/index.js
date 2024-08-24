import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/StudentView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/student",
    name: "student",
    component: StudentView,
  },
  {
    path: "*",
    name: "error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
