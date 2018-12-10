<template>
  <page :padding="true" :menuItems="menuItems"></page>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          icon: "fas fa-cogs",
          title: "Buttons",
          route: { name: "samples_buttons" }
        },
        {
          icon: "fas fa-cogs",
          title: "Inputs",
          route: { name: "samples_inputs" }
        }
      ]
    };
  },
  computed: {},
  components: {}
};
</script>
<style lang="scss" scoped>
</style>
