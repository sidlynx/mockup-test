<template>
  <div class="page">
    <div class="title">Holy Joly Christmas</div>
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  .title {
    color: #fff;
    padding-left: 50px;
    font-size: 30px;
    font-weight: bold;
  }
  .header {
    flex-basis: 150px;
    text-align: center;
    color: #fff;
    font-size: 100px;
    font-weight: bold;
  }
  .content {
    padding-top: 20px;
    flex-basis: 100%;
    padding-bottom: 50px;
  }
}
</style>
