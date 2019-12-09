<template>
  <div>
    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="false"
      :scroll={x:200}
      :rowKey="setTableKey"
      :locale="{emptyText: '暂无数据'}"
    >
      <a-popconfirm
        slot="operations"
        title="确认关闭设备？"
        @confirm="confirm"
        @cancel="cancel"
        okText="确定"
        cancelText="取消"
      >
        <a-button
          type="danger"
        >关闭设备</a-button>
      </a-popconfirm>
      <a-divider type="horizontal" />
      <a-popconfirm
        slot="operations"
        title="确认打开设备？"
        @confirm="confirm"
        @cancel="cancel"
        okText="确定"
        cancelText="取消"
      >
        <a-button
          type="danger"
        >开启设备</a-button>
      </a-popconfirm>
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
    align: "center"
  },
  {
    title: "MAC地址",
    dataIndex: "mac",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "operations",
    scopedSlots: { customRender: 'operations' }
  }
]

const data = []

export default {
  name: 'Mbody',
  data() {
    return {
      loading: false,
      close: true,
      data,
      columns,
    }
  },
  methods: {
    closeDevice (index) {
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



    confirm (e) {
      this.$store.dispatch('error2', 'sdf')
      // this.$store.commit('error1', 'sdf')
      this.$message.success('请求成功！')
    },
    cancel (e) {
      console.log(e)
      this.$message.warning('已取消！')
    },
    setTableKey (record) {
      return record.ip;
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
          this.$store.commit('SET_NUM', { devNum: res.data.length } )
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
