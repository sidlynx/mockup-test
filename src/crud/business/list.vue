<template>
  <page :padding="true" :menuItems="menuItems">
    <crud-header title="View user" sub-title="deleted" slot="header">
      <m-button icon="fas fa-plus" :outline="true" state="info" label="New" :route="{name:'crud_business_add'}"></m-button>
    </crud-header>
    <m-table :items="table.items" :columns="table.columns" :generateRoute="generateRoute"></m-table>
  </page>
</template>
<script>
import menuItems from "../menu.js";
import CrudHeader from "../header.vue";
export default {
  data() {
    return {
      menuItems,
      table: {
        items: [
          {
            id: 1,
            firstName: "Mohammed",
            lastName: "Hamdoune",
            email: "sidlynx@gmail.com"
          },
          {
            id: 2,
            firstName: "Younes",
            lastName: "Safir",
            email: "younes.safir@gmail.com"
          }
        ],
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
        return "/crud/user/" + item.id;
      }
    };
  },
  components: {
    CrudHeader
  }
};
</script>
<style lang="scss" scoped>
</style>
