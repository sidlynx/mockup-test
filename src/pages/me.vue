<template>
  <page :padding="true">
    <div class="main">
      <div class="left">
        <card class="card">
          <h3 slot="header">Personnal Informations</h3>
          <div class="edit">
            <div class="row">
              <div class="col">
                <text-input label="First name" />
              </div>
              <div class="col">
                <text-input label="last name" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <text-input label="Country" />
              </div>
              <div class="col">
                <text-input label="City" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <text-input label="Telephone" />
              </div>
              <div class="col">
                <text-input label="Email" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <text-input label="Birthdate" />
              </div>
              <div class="col">
                <text-input label="Profile photo" />
              </div>
            </div>
          </div>
        </card>
        <card class="card">
          <H3 slot="header">Experiences</H3>
          <text-input label="Title" />
          <text-input label="Company" />
          <div class="row">
            <div class="col">
              <text-input label="Start date" />
            </div>
            <div class="col">
              <text-input label="End date" />
            </div>
          </div>
          <text-input label="Techologies" />
        </card>
        <card class="card">
          <h3 slot="header">Education</h3>
          <text-input label="degree" /><br />
          <text-input label="University" />
          <div class="row">
            <div class="col">
              <text-input label="Start date" />
            </div>
            <div class="col">
              <text-input label="End date" />
            </div>
          </div>
        </card>
        <card class="card">
          <h3 slot="header">Skills</h3>
          <text-input label="skills" />
        </card>
      </div>
      <div class="right">
        <card class="card">
          <h3 slot="header">Professional details</h3>
        </card>
        <card class="card">
          <h3 slot="header">Freelance details</h3>
        </card>
      </div>
    </div>
  </page>
</template>
<script>
import Card from "@/components/card.vue";
export default {
  components: {
    Card
  }
};
</script>
<style lang="scss" scoped>
@import "../style/helpers";
@import "../style/variables";
.main {
  display: flex;
  flex-direction: row;
  .left {
    flex-basis: 66%;
    padding: 10px;
    .card {
      margin-top: 20px;
      background-color: white;
    }
  }
  .right {
    flex-basis: 34%;
    padding: 10px;
    .card {
      margin-top: 20px;
      background-color: white;
    }
  }
}
.row {
  display: flex;
  flex-direction: row;
  height: 4rem;
  .col {
    flex-basis: 50%;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
