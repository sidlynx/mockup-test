<template>
  <component :is="!!$parent.generateRoute ? 'router-link' : 'div'" :to="!!$parent.generateRoute?$parent.generateRoute(item):null" class="table-row">
    <div class="cells-holder">
      <table-cell v-for="(v,k) of Object.keys(columns)" :key="k" :style="{flexBasis}">{{item[v]}}</table-cell>
    </div>
    <div class="arrow center-horizontal center-vertical">
      <span class="fas fa-chevron-right"></span>
    </div>
  </component>
</template>
<script>
import TableCell from "./cell";
export default {
  components: {
    TableCell
  },
  props: {
    item: {
      type: Object
    },
    columns: {
      type: Object
    }
  },
  computed: {
    flexBasis() {
      let percentage = 100 / Object.keys(this.columns).length;
      return percentage + "%";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/variables";
.table-row {
  height: 40px;
  display: flex;
  background-color: white;
  border-top: 1px solid $color-border;
  //border-left: 1px solid $color-border;
  //border-right: 1px solid $color-border;
  text-decoration: none;
  color: #13201d;
  cursor: pointer;
  .cells-holder {
    flex-basis: calc(100% - 4rem);
    display: flex;
    height: 4rem;
  }
  .arrow {
    width: 4rem;
    height: 4rem;
  }
  &:hover {
    color: $color-secondary;
    background-color: #f8f9fa;
  }
  &:first-of-type {
    border-width: 2px;
  }
}
</style>
