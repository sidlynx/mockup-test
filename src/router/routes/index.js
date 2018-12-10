import HomePage from "@/pages/Home.vue";
import MePage from "@/pages/me.vue";
import JobsPage from "@/pages/jobs.vue";
import JobPage from "@/pages/job.vue";
import GuestPage from "@/pages/guest.vue";

import CrudRoutes from "./crud.js";
export default [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/page1",
    name: "page1",
    component: () => import("@/pages/page1.vue")
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("@/pages/page2.vue")
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("@/pages/page3.vue")
  },
  {
    path: "/page4",
    name: "page4",
    component: () => import("@/pages/page4.vue")
  },
  {
    path: "/me",
    name: "me",
    component: MePage
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsPage
  },
  { name: "job", path: "/job/:id", component: JobPage },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/about.vue")
  },
  {
    path: "/guest",
    name: "guest",
    component: GuestPage
  },
  {
    path: "/samples",
    name: "samples",
    component: () => import("@/pages/samples/index.vue")
  },
  {
    name: "samples_buttons",
    path: "/samples/buttons",
    component: () => import("@/pages/samples/buttons.vue")
  },
  {
    name: "samples_inputs",
    path: "/samples/inputs",
    component: () => import("@/pages/samples/inputs.vue")
  },
  {
    path: "/tests",
    name: "tests",
    component: () => import("@/pages/tests.vue")
  }
].concat(CrudRoutes);
