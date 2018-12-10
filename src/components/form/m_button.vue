<template>
  <div>
    <div v-if="!route" class="btn" :class="[cls]" @click="handleClick">
      {{label}}
    </div>
    <router-link v-if="!!route" :class="[cls]" :to="route" tag="a">
      {{label}}
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    outline: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    route: {},
    state: {
      type: String,
      default: "primary",
      validator: val => {
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info"
        ].includes(val.toLowerCase());
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  },
  data() {
    return {
      hover: false
    };
  },
  computed: {
    cls() {
      return "btn-" + (this.outline ? "outline-" : "") + this.state;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
