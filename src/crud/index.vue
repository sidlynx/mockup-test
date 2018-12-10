<template>
    <page :padding="true" :menuItems="menuItems"></page>
</template>
<script>
import menuItems from "./menu.js";
export default {
  data() {
    return {
      menuItems
    };
  }
};
</script>
<style lang="scss">
</style>
