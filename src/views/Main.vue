<template>
  <div>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="12" :xs="24" :md="16" :lg="12">
        <Header />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="12" :xs="24" :md="16" :lg="12">
        <Status />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="24" :xs="24" :md="16" :lg="12">
        <Mbody />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Status from '@/components/Status'
import Mbody from '@/components/Mbody'
import * as types from '../store/global/mutation_types'

export default {
  name: 'Main',
  components: {
    Header,
    Status,
    Mbody
  },
  beforeDestroy() {
    this.$store.commit(types.CLEAR_TOKEN)
  }
}
</script>

<style>

</style>
