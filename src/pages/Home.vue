<template>
  <page :padding="false">
    home page
  </page>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      let items = [];
      for (let i = 0; i < 100; i++) {
        items.push(i);
      }
      return items;
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  border-bottom: 1px solid grey;
  height: 50px;
  line-height: 50px;
}
</style>
