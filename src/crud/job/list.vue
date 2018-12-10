<template>
  <page :padding="true" :menuItems="menuItems">
    <crud-header title="Job list" sub-title="" icon="fas fa-briefcase" :backRoute="{name:'crud' }" slot="header">
      <m-button icon="fas fa-plus" :outline="true" state="info" label="New job" :route="{name:'crud_job_add'}"></m-button>
    </crud-header>
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
        items: []
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
