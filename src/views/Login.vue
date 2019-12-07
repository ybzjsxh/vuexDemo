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
          <!-- <a-form-item>
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
          </a-form-item>-->
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码!' }] }
              ]"
              type="password"
              placeholder="请输入密码"
              autoFocus
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

import "../mock";
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {};
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  computed: {
    ...mapState(["loading", "err1", "err2"])
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const result = await this.login({pass:this.$form.pass});
          if (result) {
            this.$message.success("登陆成功！");
            this.$router.push("/main");
          } else {
            this.err1 = true;
            setTimeout(() => {
              this.err1 = false;
            }, 3000);
          }
        } else {
          this.err2 = true;
          setTimeout(() => {
            this.err2 = false;
          }, 3000);
        }
      });
    }
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

/* .ant-form-explain {
  text-align: left;
} */
</style>
