<template>
  <page :padding="true">
    <div class="holder" v-masonry transition-duration="0.3s" item-selector=".item">
      <div class="item" v-for="(item,index) of tests" :key="index">
        <div class="container">
          <card class="card">
            <h4 slot="header">{{item}}</h4>
          </card>
        </div>

      </div>
    </div>
  </page>
</template>
<script>
export default {
  data() {
    return {
      tests: [
        "Java",
        "C",
        "C++",
        "Php",
        "Python",
        "Ruby",
        "C#",
        "Javascript",
        "Html/Css",
        "Haskel",
        "Go",
        "Rust",
        "Devops",
        "Big Data",
        "Block Chain",
        "Front End",
        "Testing"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.holder {
  .item {
    width: calc(25%);
    .container {
      margin: 1rem;
      .card {
        background-color: white;
      }
    }
  }
}
</style>
