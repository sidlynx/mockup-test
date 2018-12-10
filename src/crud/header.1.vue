<template>
  <div class="crud-header">
    <div class="button-icon center-vertical center-horizontal">
      <div class="button center-vertical center-horizontal">
        <m-button icon="fas fa-chevron-circle-up" :outline="true" state="info" :route="backRoute"></m-button>
      </div>
      <div class="icon center-vertical center-horizontal">
        <span class="fas fa-user"></span>
      </div>
    </div>
    <div class="text">
      <div class="title center-vertical">{{title}}</div>
      <div class="sub-title center-vertical" v-if="!!subTitle">({{subTitle}})</div>
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
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
  display: flex;
  flex-direction: row;
  .button-icon {
    height: 100%;
    flex-basis: 10rem;
    height: 5rem;
    font-size: 3rem;
    display: flex;
    .button {
      width: 5rem;
      height: 5rem;
    }
    .icon {
    }
  }
  .text {
    height: 5rem;
    flex-basis: 100%;
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
  .slot {
    order: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
