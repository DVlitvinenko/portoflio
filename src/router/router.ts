import { createWebHistory, createRouter } from "vue-router";
import Main from "../pages/Main.vue";
import About from "@pages/About.vue";
import Projects from "@pages/Projects.vue";
import Contacts from "@pages/Contacts.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/contacts", component: Contacts },
  { path: "/projects", component: Projects },
  { path: "/:catchAll(.*)", component: Main },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
