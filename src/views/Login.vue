<template>
  <div>
    <logo />
    <a-row type="flex" justify="center">
      <a-col :xs="22" :md="12" :lg="10">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: '请输入账户名!' }] }
              ]"
              placeholder="请输入账户名"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码!' }] }
              ]"
              type="password"
              placeholder="请输入密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import axios from 'axios'

import '../mock'

export default {
  name: "Login",
  data() {
    return {
      err1: this.$store.state.err1,
      err2: this.$store.state.err2,
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          axios.post('/login', {
            pass: this.$form.pass
          })
            .then(response => {
              console.log(response.data);
              if (response.data.code === 200) {
                this.$message.success('登陆成功！');
                this.$router.push('/main');
              } else {
                this.err1 = true;
                setTimeout(() => {
                  this.err1 = false
                }, 3000)
              }
            })
            .catch(err => {
              this.$message.error('服务异常！');
              console.log(err.message);
            })
        } else {
          this.err2 = true
          setTimeout(() => {
            this.err2=false
          }, 3000)
        }
      });
    },
  },
  components: {
    Logo
  }
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
