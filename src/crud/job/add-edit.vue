<template>
  <page :padding="true">
    <crud-header title="Create job" slot="header" icon="fas fa-briefcase" :backRoute="{name:'crud_job_list'}">
      <m-button icon="fas fa-save" :outline="true" state="info" label="Save" @click="submit"></m-button>
    </crud-header>
    <div class="holder">
      <text-input label="Job title" />
    </div>
  </page>
</template>
<script>
import menuItems from "../menu.js";
import CrudHeader from "../header.vue";
export default {
  data() {
    return {
      menuItems
    };
  },
  methods: {
    submit() {}
  },
  components: {
    CrudHeader
  }
};
</script>
<style lang="scss" scoped>
.holder {
  display: flex;
  flex-direction: row;
  .menu {
    width: 260px;
    flex-grow: 0;
    flex-shrink: 0;
    //border: 1px solid grey;
    height: calc(100vh - 64px);
    display: flex;
    align-items: center;
  }
  .content {
    flex-basis: 100%;
    margin: 4rem;
    //background-color: white;
    padding: 2rem;
    height: auto;
    .form {
      background-color: white;
      padding: 2rem;
      height: 17rem;
    }
  }
}
</style>
