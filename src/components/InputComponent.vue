<template>
  <div>
    <x-input
      :title="data.desc"
      v-model="muteValue"
      :placeholder="data.props.placeholder"
    ></x-input>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    value: {
      type: String,
      default: "value",
    },
    data: Object,
  },
  created() {
    console.log("this.value", this.value);
  },
  data() {
    return {
      muteValue: this.value,
    };
  },
  watch: {
    muteValue(val) {
      this.$emit("input", val);
    },
  },
};
</script>
<style lang="less" scoped></style>
