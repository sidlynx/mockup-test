import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/";
import GeneralPlugin from "./plugins/general";
import loading from "./plugins/loading";
import { VueMasonryPlugin } from "vue-masonry";
import Notifications from "vue-notification";
import "./registerServiceWorker";

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.use(GeneralPlugin);
Vue.directive("loading", loading);
Vue.use(VueMasonryPlugin);
Vue.use(Notifications);

import Page from "@/components/layout/page.vue";
import Card from "@/components/card.vue";
import TextInput from "@/components/form/text_input.vue";
import TextArea from "@/components/form/text_area.vue";
import TextOutput from "@/components/form/text_output.vue";
import MButton from "@/components/form/m_button.vue";
import MTable from "@/components/table/index.vue";

Vue.component("page", Page);
Vue.component("card", Card);
Vue.component("text-input", TextInput);
Vue.component("text-area", TextArea);
Vue.component("text-output", TextOutput);
Vue.component("m-button", MButton);
Vue.component("m-table", MTable);

Vue.config.productionTip = false;

import "./style/app.scss";

import toastr from "toastr/toastr.js";
window.toastr = toastr;
import "toastr/toastr.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
