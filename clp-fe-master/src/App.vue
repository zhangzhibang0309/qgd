<template>
  <div id="app">
    <router-view name="head"></router-view>
    <div>
      <router-view />
    </div>
    <router-view name="foot"></router-view>
  </div>
</template>

<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
