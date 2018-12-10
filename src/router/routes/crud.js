export default [
  {
    path: "/crud",
    name: "crud",
    component: () => import("@/crud/index.vue")
  },
  {
    path: "/crud/job",
    name: "crud_job_list",
    component: () => import("@/crud/job/list.vue")
  },
  {
    path: "/crud/job/:id",
    name: "crud_job_view",
    component: () => import("@/crud/job/view.vue")
  },
  {
    path: "/crud/job/:id/edit",
    name: "crud_job_edit",
    component: () => import("@/crud/job/add-edit.vue")
  },
  {
    path: "/crud/job/add",
    name: "crud_job_add",
    component: () => import("@/crud/job/add-edit.vue")
  },
  {
    path: "/crud/quizz",
    name: "crud_quizz_list",
    component: () => import("@/crud/quizz/list.vue")
  },
  {
    path: "/crud/quizz/:id",
    name: "crud_quizz_view",
    component: () => import("@/crud/quizz/view.vue")
  },
  {
    path: "/crud/quizz/:id/edit",
    name: "crud_quizz_edit",
    component: () => import("@/crud/quizz/add-edit.vue")
  },
  {
    path: "/crud/quizz/add",
    name: "crud_quizz_add",
    component: () => import("@/crud/quizz/add-edit.vue")
  },
  /***********User*********** */
  {
    path: "/crud/user",
    name: "crud_user_list",
    component: () => import("@/crud/user/list.vue")
  },
  {
    path: "/crud/user/:uuid/view",
    name: "crud_user_view",
    component: () => import("@/crud/user/view.vue")
  },
  {
    path: "/crud/user/:uuid/edit",
    name: "crud_user_edit",
    component: () => import("@/crud/user/add-edit.vue")
  },
  {
    path: "/crud/user/add",
    name: "crud_user_add",
    component: () => import("@/crud/user/add-edit.vue")
  },
  /***********Business*********** */
  {
    path: "/crud/business",
    name: "crud_business_list",
    component: () => import("@/crud/business/list.vue")
  },
  {
    path: "/crud/business/:uuid/view",
    name: "crud_business_view",
    component: () => import("@/crud/business/view.vue")
  },
  {
    path: "/crud/business/:uuid/edit",
    name: "crud_business_edit",
    component: () => import("@/crud/business/add-edit.vue")
  },
  {
    path: "/crud/business/add",
    name: "crud_business_add",
    component: () => import("@/crud/business/add-edit.vue")
  }
];
