<template>
  <div>
    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="false"
      :scroll={x:200}
    >
      <a-button
        slot="operation"
        type="primary"
        slot-scope="text"
        href="javascript:;"
        @click="closeDevice"
        :key="text"
      >
        关闭设备
      </a-button>
    </a-table>
  </div>
</template>

<script>
// import '../mock'

import { getCloseNum } from "../utils/utils";

import NProgress from 'nprogress';

const columns = [
  {
    title: "IP地址",
    dataIndex: "ip",
    align: "center"
  },
  {
    title: "名称",
    dataIndex: "name",
    rowKey: "name",
    align: "center"
  },
  {
    title: "MAC地址",
    dataIndex: "mac",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "operation",
    scopedSlots: { customRender: 'operation' }
  }
]

const data = []

export default {
  name: 'Mbody',
  props: {
    // setDevNum,
    // setCloseNum,
    // setAwakeNum
  },
  data() {
    return {
      loading: false,
      close: true,
      data,
      columns
    }
  },
  methods: {
    closeDevice(index) {
      this.axios.get('/closeDevice', {
        params: {
          index
        }
      })
      .then(()=>{
        this.data = {loading: true, data: [...this.data]}
        setTimeOut(()=>{
          this.data = {loading: false}
        }, 500)
      })
      .catch(err=>{
        this.$message.error('请求失败！');
        console.log(err.$message);
      })
    },


    wakeDevice(index) {
      this.axios.get('/wakeDevice', {
        params: {
          index
        }
      })
        .then(() => {
          this.data = ({loading: true, data: [...this.data]});
          setTimeout(() => {
            this.data = ({loading: false});
          }, 500)
        })
        .catch(err => {
          this.$message.error('请求失败！')
          console.log(err.message);
        })
    }
  },
  create() {
    NProgress.start()
  },
  mounted() {
    this.getAllDevice = setInterval(()=>{
      this.axios.get('/getAllDevice', {
        timeout: 500
      })
        .then(res => {
          // console.log(res);
          this.data = res.data;
          // console.log(this.data);
          // this.props.setDevNum(res.data.length);
          // this.props.setCloseNum(getCloseNum(res.data).closeNum);
          // this.props.setAwakeNum(getCloseNum(res.data).awakeNum);
          // console.log(this.data);
          NProgress.done()
        })
        .catch(err => {
          this.$notification.warning({
            message: '警告',
            description: '连接似乎异常！',
            duration: 2
          });
          console.log(err.message);
          NProgress.done()
        })
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.getAllDevice)
  }
}
</script>
