<template>
  <div class="crud-header">
    <div class="back-button center-vertical center-horizontal">
      <m-button icon="fas fa-chevron-up" :outline="true" state="info" :route="backRoute"></m-button>
    </div>
    <div class="content">
      <div class="icon center-vertical center-horizontal">
        <span :class="[icon]" v-if="!!icon"></span>
      </div>
      <div class="text">
        <div class="title center-vertical">{{title}}</div>
        <div class="sub-title center-vertical" v-if="!!subTitle">({{subTitle}})</div>
      </div>
    </div>

    <div class="slot">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    icon: {
      type: String
    },
    backRoute: {
      type: Object,
      default: () => {
        name: "home";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../style/variables";
.crud-header {
  height: 5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
  //border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
  display: flex;
  flex-direction: row;
  .back-button {
    flex-basis: 5rem;
    height: 5rem;
  }
  .content {
    justify-content: center;
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    .icon {
      height: 100%;
      flex-basis: 5rem;
      height: 5rem;
      font-size: 3rem;
    }
    .text {
      height: 5rem;
      //flex-basis: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #303038;
      overflow: hidden;
      min-width: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      .title {
        height: 28px;
        font-size: 25px;
        padding-left: 1rem;
      }
      .sub-title {
        height: 20px;
        font-family: RobotoRegular;
        font-size: 16px;
        padding-left: 1rem;
        color: #999;
      }
    }
  }
  .slot {
    order: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
