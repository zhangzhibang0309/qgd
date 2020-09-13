<template>
  <div class="search">
    <h2 class="pre1">查找题目</h2>
    <el-input
      class="search-input"
      v-model="input"
      placeholder="请输入要搜索的题目"
    ></el-input>
    <el-button class="search-but" type="primary" icon="el-icon-search"
      >搜索</el-button
    >
    <p class="search-p1">共计{{ num }}条结果</p>
  </div>
</template>

<script>
export default {
  name: "pro-searchr",
  data() {
    return {
      num: "5555",
      input: ""
    };
  }
};
</script>

<style scoped>
.search {
  display: inline-block;
  padding-left: 25px;
}
.search-input {
  width: 800px;
  position: relative;
  top: -1px;
  left: 20px;
}
.pre1 {
  display: inline-block;
  position: relative;
  top: 1.5px;
}
.search-but {
  position: relative;
  left: 50px;
  top: -1px;
}
.search-p1 {
  position: relative;
  top: -10px;
  color: rgb(140, 140, 140);
}
</style>
