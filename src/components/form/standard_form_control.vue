<template>
  <div class="component" :class="{'active':active,'has-error':!!validationErrors.length,'disabled':disabled}">
    <div class="label">
      <div>{{label}}</div>
    </div>
    <div class="input">
      <slot></slot>
    </div>
    <div class="errors">
      <div v-if="!active" class="error" v-for="(validationError,index) of validationErrors" :key="index">{{validationError}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {},
    label: {
      type: String
    },
    hint: {
      type: String
    },
    validationErrors: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean
    },
    disabled: { type: Boolean },
    active: { type: Boolean }
  }
};
</script>
<style lang="scss" scoped>
.component {
  margin-top: 4px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .label {
    text-align: left;
    width: 100%;
    line-height: 1.8rem;
    height: 1.8rem;
    //font-weight: 600;
    color: grey;
    font-size: 1.6rem;
    //border: 1px solid grey;
    margin-bottom: 4px;
    font-family: RobotoRegular;
  }
  .input {
    height: 3.4rem;
    height: auto;
    width: 100%;
  }
  .errors {
    font-size: 1rem;
    color: #cf4647;
    width: 100%;
    .error {
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 1.4rem;
    }
  }
  &.has-error {
    .label {
      color: #cf4647;
    }
  }
  &.active {
    .label {
      color: rgb(29, 161, 242);
    }
    .input {
    }
  }
}
</style>
