<template>
    <page :padding="true" :menuItems="menuItems">
        <crud-header title="View user" sub-title="deleted" slot="header">
            <m-button icon="fas fa-home" :outline="true" state="info" label="Update"></m-button>
        </crud-header>
        user view {{$route.params.id}}
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
      generateLink: item => {
        return "/usser/" + item.id;
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
