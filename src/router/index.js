import { createRouter, createWebHistory } from "vue-router";
import Page01 from "../components/page/Page01.vue";
import Page02 from "../components/page/Page02.vue";

const routes = [
  { path: "/", component: Page01 },
  { path: "/page02", component: Page02 }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
