<template>
  <standard-form-control :label="label" :hint="hint" :validationErrors="validationErrors" :required="required" :disabled="disabled" :active="active" :value="value">
    <div class="text-area" :class="{'active':active,'has-error':!!validationErrors.length}">
      <textarea ref="textarea" rows="1" class="fwb" :placeholder="placeholder" @focus="activate" @blur="desactivate" :value="value" @input="$emit('input', $event.target.value)" :style="{minHeight:height}" @keydown="resize" />
      </div>
  </standard-form-control>
</template>
<script>
import StandardFormControl from "./standard_form_control.vue";
import Vue from "vue";
export default {
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      default: "Textarea"
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
    disabled: {
      type: Boolean
    },
    placeholder: {}
  },
  data() {
    return {
      active: false,
      height: "34px"
    };
  },
  methods: {
    activate() {
      this.active = true;
    },
    desactivate() {
      this.active = false;
    },
    resize() {
      let oldHeight = this.$refs.textarea.clientHeight;
      this.height = "auto";
      Vue.nextTick(() => {
        let totalHeight = this.$refs.textarea.scrollHeight;
        if (oldHeight !== totalHeight) {
          totalHeight += 3;
          if (totalHeight <= 34) totalHeight = 34;
          this.height = `${totalHeight + 3}px`;
        }
      });
    }
  },
  computed: {},
  watch: {
    value(newvalue) {}
  },
  components: {
    StandardFormControl
  },
  created() {},
  mounted() {
    //this.resize();
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/variables";
.text-area {
  width: 100%;
  text-align: center;
  textarea {
    width: calc(100% - 16px);
    font-size: 1.6rem;
    border-width: 0px;
    height: auto;
    width: 100%;
    border: 1px solid $color-input-border;
    //border-radius: 4px;
    padding-left: 8px;
    outline: none;
    font-family: QuickSand;
    color: #13201d;
    padding-top: 5px;
    &:placeholder {
      font-weight: 600;
      color: grey;
      font-style: italic;
    }
  }
  &.active {
    textarea {
      //border-bottom: 2px solid $color-secondary;
      border: 1px solid rgb(29, 161, 242);
    }
  }
  &.has-error {
    input {
      border-bottom: 2px solid #cf4647;
      &:placeholder {
        color: #cf4647;
      }
    }
  }
}
</style>
