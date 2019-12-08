<template>
  <div>
    <span style="float:left">设备列表</span>
    <!-- <span style='float: "right", fontWeight: "bold"'>当前连接设备：<span style='color: "red", fontWeight: "bold"'>{props.devNum}</span>台</span> -->

    <span style="float:right;fontWeight:bold">
      <span type="smile" theme="twoTone">在线：{{getNum('awakeNum')}}</span>
      <span type="danger" shape="circle">离线：{{getNum('closeNum')}}</span>
      <span type="info">总台数：{{getNum('devNum')}}</span>
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Status",
  methods: {
    getNum(type) {
      return this.$store.getters.getNum(type);
    }
  },
  computed: {
    ...mapState(['loading']),
  }
};
</script>

<style>
</style>
