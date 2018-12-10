<template>
  <page :padding="true" :menuItems="menuItems">
    <card>
      <h3 slot="header">Simple text input</h3>
      <text-input />
    </card>
    <card>
      <h3 slot="header">Simple tex area input</h3>
      <text-area v-model="textArea.model" />
      <div>{{textArea.model}}</div>
    </card>
  </page>
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
      ],
      textArea: {
        model: ""
      }
    };
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.card {
  background-color: white;
}
</style>
