<template>
    <div class="card">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="body">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.card {
  border-bottom: 1px solid #e5e5e5;

  margin-bottom: 4rem;
  .header {
    padding: 8px;
    border-bottom: 2px solid #e5e5e5;
    //background-color: #fafafb;
    /*
    -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1),
      0 1px 6px rgba(59, 64, 69, 0.1);
    /* box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1); */
  }
  .body {
    padding: 8px;
  }
  .footer {
  }
}
</style>
