<template>
  <div class="home">
    <h1>Christmas time !</h1>
  </div>
</template>
<script>
import Page from "./page.vue";
export default {
  components: {
    Page
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 140px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
