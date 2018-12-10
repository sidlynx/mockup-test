<template>
    <page :padding="true" :menuItems="menuItems">
        <div class="content">
            <card class="card">
                <h3 slot="header">No outline, no icon</h3>
                <div style="margin-top:4px;display:flex;">
                    <div v-for="(value,key) of colors" :key="key" style="padding-left:2px;padding-right:2px;">
                        <m-button :state="key.toLowerCase()" :label="key.toLowerCase()"></m-button>
                    </div>
                </div>
            </card>
            <card style="background-color:white;">
                <h3 slot="header">Outline, no icon</h3>
                <div style="margin-top:4px;display:flex;">
                    <div v-for="(value,key) of colors" :key="key" style="padding-left:2px;padding-right:2px;">
                        <m-button :outline="true" :state="key.toLowerCase()" :label="key.toLowerCase()"></m-button>
                    </div>
                </div>
            </card>
            <card style="background-color:white;">
                <h3 slot="header">No outline, with icon</h3>
                <div style="margin-top:4px;display:flex;">
                    <div v-for="(value,key) of colors" :key="key" style="padding-left:2px;padding-right:2px;">
                        <m-button icon="fas fa-home" :key="key" :state="key.toLowerCase()" :label="key.toLowerCase()"></m-button>
                    </div>
                </div>
            </card>
            <card style="background-color:white;">
                <h3 slot="header">Outline, with icon</h3>
                <div style="margin-top:4px;display:flex;">
                    <div v-for="(value,key) of colors" :key="key" style="padding-left:2px;padding-right:2px;">
                        <m-button icon="fas fa-home" :outline="true" :state="key.toLowerCase()" :label="key.toLowerCase()"></m-button>
                    </div>
                </div>
            </card>
        </div>
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
      ]
    };
  },
  computed: {
    colors() {
      return this.$store.state.constants.COLORS;
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  padding: 2rem;
  .card {
    background-color: white;
    margin-top: 2rem;
  }
}
</style>
