<template>
  <div class="component" :style="{flexDirection:inline ? 'row':'column'}">
    <div class="label center-vertical">{{label}} :</div>
    <div class="value center-vertical">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    inline: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss">
.component {
  display: flex;
  min-height: 34px;
  .label {
    font-weight: bold;
  }
  .value {
    padding-left: 4px;
  }
}
</style>
