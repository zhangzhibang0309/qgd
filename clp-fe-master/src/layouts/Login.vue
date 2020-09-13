<template>
  <div class="main">
    <clp-container class="login-container">
      <el-page-header
        class="page-header"
        @back="goBack"
        :title="$t('navbar.back')"
        :content="$t('navbar.login')"
      ></el-page-header>
      <el-form
        class="login-form"
        ref="login-form"
        :model="form"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item :label="$t('login.username')" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">{{
            $t("login.submit")
          }}</el-button>
          <el-button @click="resetForm()">{{ $t("login.reset") }}</el-button>
        </el-form-item>
      </el-form>
    </clp-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 32,
            message: "长度在 4 到 32 字符之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 32,
            message: "长度在 4 到 32 字符之间",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    submitForm: function() {
      this.$refs["login-form"].validate(valid => {
        if (valid) {
          console.log("Valid");
        } else {
          console.log("Not Valid");
        }
      });
    },
    resetForm: function() {
      this.$refs["login-form"].resetFields();
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 40px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  background-color: rgb(255, 255, 255);
}

.page-header {
  padding: 20px 40px 25px 40px;
}

.login-form {
  padding: 10px 40px 20px 40px;
  width: 400px;
}

.el-form-item {
  margin-bottom: 30px;
}
</style>
