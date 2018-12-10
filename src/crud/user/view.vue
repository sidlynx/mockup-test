<template>
  <page :padding="true" :menuItems="menuItems" :loading="loading">
    <crud-header title="View user" sub-titles="deleted" slot="header" :backRoute="{name:'crud_user_list'}">
      <m-button icon="fas fa-home" :outline="true" state="info" label="Update" :route="{name:'crud_user_edit',uuid:viewModel.uuid}"></m-button>
    </crud-header>
    <card class="card">
      <h3 slot="header">{{viewModel.firstName}} {{viewModel.lastName}}</h3>
      <text-output label="First name">{{viewModel.firstName}}</text-output>
      <text-output label="Last name">{{viewModel.lastName}}</text-output>
      <text-output label="Email address">{{viewModel.email}}</text-output>
    </card>
  </page>
</template>
<script>
import menuItems from "../menu.js";
import CrudHeader from "../header.vue";
import Factory from "../../lib/factory/user";
import call from "../../lib/call";
export default {
  data() {
    return {
      viewModel: {},
      menuItems,
      loading: false
    };
  },
  created: async function() {
    this.loading = true;
    try {
      let uuid = this.$route.params.uuid;
      let user = await call("user/find_one", { uuid });
      this.viewModel = user;
      this.loading = false;
    } catch (e) {
      if (e.json) {
        let error = e.json;
      }
      this.loading = false;
    }
  },
  components: {
    CrudHeader
  }
};
</script>
<style lang="scss" scoped>
</style>
