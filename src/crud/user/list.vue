<template>
  <page :padding="true" :menuItems="menuItems">
    <crud-header title="User's list" slot="header" :backRoute="{name:'crud' }">
      <m-button icon="fas fa-plus" :outline="true" state="info" label="New" :route="{name:'crud_user_add'}">
      </m-button>
    </crud-header>
    <m-table :items="table.items" :columns="table.columns" :generateRoute="generateRoute" v-loading="loading"></m-table>
  </page>
</template>
<script>
import menuItems from "../menu.js";
import CrudHeader from "../header.vue";
import Factory from "../../lib/factory/user";
import loading from "../../plugins/loading";

import call from "../../lib/call";

export default {
  data() {
    return {
      loading: false,
      menuItems,
      table: {
        items: [],
        columns: {
          firstName: {
            label: "First name"
          },
          lastName: {
            label: "Last name"
          },
          email: {
            label: "Email address"
          }
        }
      },
      generateRoute: item => {
        return "/crud/" + Factory.name + "/" + item.uuid + "/view";
      }
    };
  },
  created: async function() {
    this.loading = true;
    try {
      let users = await call("user/list");
      this.table.items = users;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      if (e && e.name == "CONNECTION_ERROR") {
        toastr.warning("Verify your internet connection", "Connexion problem");
      }
    }
  },
  components: {
    CrudHeader
  }
};
</script>
<style lang="scss" scoped>
</style>
