<template>
    <div class="table">
        <slot name="header">
            <table-header />
        </slot>
        <slot name="body">
            <table-row v-for="(item,index) of items" :key="index" :item="item" :columns="columns" />
        </slot>
        <slot name="footer"></slot>
    </div>
</template>
<script>
import TableHeader from "./header.vue";
import TableRow from "./row.vue";
import TableCell from "./cell.vue";
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Object,
      default: () => {}
    },
    generateRoute: {
      type: Function
    }
  },
  computed: {},
  components: {
    TableHeader,
    TableRow,
    TableCell
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/variables";
.table {
  width: 100%;
  border-bottom: 1px solid $color-border;
}
</style>
