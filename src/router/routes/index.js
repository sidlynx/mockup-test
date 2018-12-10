import HomePage from "@/pages/home.vue";

export default [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/about.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/contact.vue")
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("@/pages/pricing.vue")
  }
];
