<template>
  <div>
    <!-- <cell
      :title="data.desc"
      :value="$refs.picker3 && $refs.picker3.getNameValues()"
      @click.native="showPicker"
    ></cell> -->
    <popup-picker
      :title="data.desc"
      show-name
      :columns="1"
      ref="picker3"
      :data="data.props.options"
      :value="muteValue"
      @on-show="onShow"
      @on-hide="onHide"
      @on-change="onChange"
      :placeholder="data.props.placeholder"
    ></popup-picker>
  </div>
</template>

<script>
export default {
  name: "PickerComponent",
  props: {
    value: {
      type: Array,
      default: [],
    },
    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      show: false,
      muteValue: this.value,
    };
  },
  methods: {
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
    },
    onChange(val) {
      this.muteValue = val;
      this.$emit("input", val);
      console.log("val change", val);
    },
    showPicker() {
      this.show = true;
    },
  },
};
</script>
<style lang="less" scoped></style>
