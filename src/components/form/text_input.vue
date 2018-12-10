<template>
  <standard-form-control :label="label" :hint="hint" :validationErrors="validationErrors" :required="required" :disabled="disabled" :active="active" :value="value">
    <div class="text-input" :class="{'active':active,'has-error':!!validationErrors.length}">
      <input class="fwb" :placeholder="placeholder" @focus="activate" @blur="desactivate" :value="value" @input="update($event.target.value)" :type="type" />
    </div>
  </standard-form-control>
</template>
<script>
import StandardFormControl from "./standard_form_control.vue";
export default {
  props: {
    value: {},
    label: {
      type: String,
      default: "Textinput"
    },
    placeholder: {
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
    disabled: {
      type: Boolean
    },
    type: {
      type: String,
      validator: val => {
        return ["text", "search", "email", "password"].includes(val);
      }
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    activate() {
      this.active = true;
    },
    desactivate() {
      this.active = false;
    },
    update(val) {
      this.$emit("input", val);
    }
  },
  computed: {},
  components: {
    StandardFormControl
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/variables";
.text-input {
  width: 100%;
  text-align: center;
  input {
    width: calc(100% - 16px);
    font-size: 1.6rem;
    border-width: 0px;
    height: 3.4rem;
    width: 100%;
    border: 1px solid $color-input-border;
    outline: none;
    //border-radius: 4px;
    font-family: QuickSand;
    color: #13201d;
    padding-left: 8px;
    &:placeholder {
      font-weight: 600;
      color: grey;
      font-style: italic;
    }
  }
  &.active {
    input {
      //border-bottom: 2px solid $color-secondary;
      //border-bottom: 2px solid rgb(29, 161, 242);
      border: 1px solid rgb(29, 161, 242);
    }
  }
  &.has-error {
    input {
      border: 1px solid #cf4647;
      &:placeholder {
        color: #cf4647;
      }
    }
  }
}
</style>
