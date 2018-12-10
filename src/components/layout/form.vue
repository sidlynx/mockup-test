<template>
    <form></form>
</template>
<script>
export default {
  props: {
    columns: {
      type: Number,
      default: 1
    }
  }
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
