<template>
  <div>
    <span style="float:left">设备列表</span>
    <!-- <span style='float: "right", fontWeight: "bold"'>当前连接设备：<span style='color: "red", fontWeight: "bold"'>{props.devNum}</span>台</span> -->

    <span style='float:right;fontWeight:bold'>
        <span type="smile" theme="twoTone">在线：{{awakeNum}}</span>
        <span type="danger" shape="circle">离线：{{closeNum}}</span>
        <span type="info" >总台数：{{devNum}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Status',
  // props: ["awakeNum", "closeNum", "devNum"],
  data() {
    return {
      awakeNum: 1,
      closeNum: 1,
      devNum: 1
    }
  },
  computed: {
    getAwakeNum(){

    }
  }
}
</script>

<style>

</style>
