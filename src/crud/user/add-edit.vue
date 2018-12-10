<template>
  <page :padding="true" :menuItems="menuItems">
    <crud-header title="Create user" slot="header" :backRoute="$router.currentRoute.name == 'crud_user_add' ? {name:'crud_user_list'}:{name:'crud_user_view',uuid:form.uuid}">
      <m-button icon="fas fa-save" :outline="true" state="info" label="Save" @click="submit"></m-button>
    </crud-header>
    <div class="form" v-loading="loading">
      <text-input label="First name:" v-model="form.firstName" :validationErrors="validationErrors.firstName" @input="validationErrors.firstName = []" />
      <text-input label="Last name:" v-model="form.lastName" :validationErrors="validationErrors.lastName" @input="validationErrors.lastName = []" />
      <text-input label="Email address:" type="email" v-model="form.email" :validationErrors="validationErrors.email" @input="validationErrors.email = []" />
      <text-input label="Password:" type="text" v-model="form.password" :validationErrors="validationErrors.password" @input="validationErrors.password = []" />
    </div>
  </page>
</template>
<script>
import menuItems from "../menu.js";
import CrudHeader from "../header.vue";

import Factory from "../../lib/factory/user";
export default {
  data() {
    return {
      menuItems,
      loading: false,
      form: {
        firstName: "Younes",
        lastName: "Safir",
        email: "younes.safir@gmail.com",
        password: "azerty"
      },
      validationErrors: {
        firstName: [],
        lastName: [],
        email: []
      }
    };
  },
  methods: {
    async submit() {
      console.log("called");
      this.loading = true;
      if (this.$router.currentRoute.name === "crud_" + Factory.name + "_add") {
        try {
          let user = await this.call("user/create", this.form);
          this.$router.push({
            name: "crud_" + Factory.name + "_view",
            params: { uuid: entity.uuid }
          });
          this.loading = false;
        } catch (e) {
          this.loding = false;
          if (e) {
            switch (e.name) {
              case "VALIDATION_ERRORS":
                this.validationErrors = e.payload;
                break;
              default:
                toastr.warning(
                  "Verify your internet connection",
                  "Connexion problem"
                );
            }
          }
        }
      } else {
        try {
          let response = await call("user/update", this.form);
          let entity = response;
          this.$router.push({
            name: "crud_" + Factory.name + "_view",
            params: { uuid: entity.uuid }
          });
          this.loading = false;
        } catch (e) {
          if (e.name === "VALIDATION_ERRORS") {
            this.validationErrors = e.payload;
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
