<template>
  <div>
    <!-- 题目列表 -->
    <el-table stripe :data="content">
      <el-table-column width="80px" label="编号" prop="id"></el-table-column>
      <el-table-column width="630px" label="题目名称" prop="title">
        <template slot-scope="scope">
          <el-link
            href="https://element.eleme.cn/#/zh-CN/component/link"
            type="primary"
            >{{ scope.row.title }}</el-link
          >
        </template>
      </el-table-column>
      <el-table-column width="170px" label="标签" prop="tags">
        <template slot-scope="scope">
          <!-- 这个地方想写个读取数组 但是不知道scope.row.tags后面该怎么弄 -->
          <el-tag @click="handle1" size="small" closable="true">{{
            scope.row.tags
          }}</el-tag>
          <!-- 这个地方tags2也不能写 得转成tags数组的第二个元素 -->
          <el-tag size="mini" closable="true">{{ scope.row.tags2 }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="题目类型" prop="type">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.type == '分支结构' || scope.row.type == '顺序结构'"
            type="warning"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
          <el-button
            v-else-if="scope.row.type == '数组'"
            type="success"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
        </template>
      </el-table-column>

      <el-table-column label="难度" prop="difficulty"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageable.pageNumber"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageable.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="numberOfElements"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageable: {
        pageSize: 20, //每页的题目数量
        pageNumber: 1 //当前页码
      },
      totalPages: 200, //总页数
      totalElements: [], //总题目
      numberOfElements: 100 //总题目数量
    };
  },
  created() {
    this.getQuestList;
  },
  methods: {
    handle1() {
      console.log("点击了标签");
    },
    async getQuestList() {
      // eslint-disable-next-line no-unused-vars
      const { data: res } = await this.$http.get("problem", {
        params: this.pageable
      });
      if (res.meta.status !== 200) {
        return this.$message.error("获取题目列表失败");
      }
      this.questlist = res.data.totalElements;
      this.total = res.data.numberOfElements;
    },
    //监听pageSize的函数
    // eslint-disable-next-line no-unused-vars
    handleSizeChange(newSize) {
      this.pageable.pageSize = newSize;
      this.getQuestList();
    },
    //监听页码值改变的方法
    // eslint-disable-next-line no-unused-vars
    handleCurrentChange(newPage) {
      this.pageable.pageNumber;
      this.$getQuestList;
    }
  }
};
</script>

<style></style>
