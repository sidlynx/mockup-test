<template>
    <div class="table-header fwb">
        <div class="cells-holder">
            <table-cell v-for="(v,k) of Object.keys($parent.columns)" :key="k" :style="{flexBasis}">{{$parent.columns[v].label}}</table-cell>
        </div>
        <div class="arrow center-horizontal center-vertical">
            <!--span class="fas fa-chevron-right"></span-->
        </div>
    </div>
</template>
<script>
import TableRow from "./row.vue";
import TableCell from "./cell.vue";
export default {
  components: {
    TableRow,
    TableCell
  },
  computed: {
    flexBasis() {
      let percentage = 100 / Object.keys(this.$parent.columns).length;
      return percentage + "%";
    }
  }
};
</script>
<style lang="scss" scoped>
.table-header {
  height: 40px;
  display: flex;
  background-color: transparent;
  //border-bottom: 1px solid #dddfe2;
  .cells-holder {
    flex-basis: calc(100% - 4rem);
    display: flex;
    height: 4rem;
  }
  .arrow {
    width: 4rem;
    height: 4rem;
  }
}
</style>
