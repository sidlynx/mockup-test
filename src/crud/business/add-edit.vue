<template>
  <page :padding="true" :menuItems="menuItems">
    <crud-header title="Create user" slot="header" :backRoute="$router.currentRoute.name == 'crud_business_add' ? {name:'crud_user_list'}:{name:'crud_business_view',uuid:form.uuid}">
      <m-button icon="fas fa-save" :outline="true" state="info" label="Save" @click="submit"></m-button>
    </crud-header>
    <div class="form" v-loading="loading">
      <text-input label="Name:" v-model="form.name" :validationErrors="validationErrors.firstName" @input="validationErrors.firstName = []" />
      <text-area label="About:" v-model="form.about" />
    </div>
  </page>
</template>
<script>
import menuItems from "../menu.js";
import CrudHeader from "../header.vue";

import Factory from "../../lib/factory/business";
export default {
  data() {
    return {
      menuItems,
      loading: false,
      form: {
        name: "",
        about: ""
      },
      validationErrors: {
        name: [],
        about: []
      }
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      if (this.$router.currentRoute.name === "crud_" + Factory.name + "_add") {
        try {
          let response = await Factory.create(this.form);
          let entity = response.json;
          this.$router.push({
            name: "crud_" + Factory.name + "_view",
            params: { uuid: entity.uuid }
          });
          this.loading = false;
        } catch (e) {
          if (e.json) {
            let error = e.json;
            if (error.name === "VALIDATION_ERRORS") {
              this.validationErrors = error.payload;
            }
          }
        }
      } else {
        try {
          let response = await Factory.update(this.form);
          let entity = response.json;
          this.$router.push({
            name: "crud_business_view",
            params: { uuid: entity.uuid }
          });
          this.loading = false;
        } catch (e) {
          if (e.json) {
            let error = e.json;
            if (error.name === "VALIDATION_ERRORS") {
              this.validationErrors = error.payload;
            }
          }
        }
      }
      this.loading = false;
    }
  },
  created: async function() {
    if (this.$router.currentRoute.name === "crud_" + Factory.name + "_edit") {
      this.loading = true;
      try {
        let response = await Factory.read(this.$route.params.uuid);
        this.form = response.json;
        this.loading = false;
      } catch (e) {
        if (e.json) {
          let error = e.json;
        }
        this.loading = false;
      }
    }
  },
  components: {
    CrudHeader
  }
};
</script>
<style lang="scss" scoped>
.holder {
}
</style>
