<template>
  <div class="news-container">
    <!-- 公告栏标题 -->
    <div v-if="!isExpand && !warning" class="news-header">
      {{ $t("news.title") }}
    </div>
    <!-- 没有公告的警告 -->
    <div v-if="warning" class="no-news">
      {{ $t("news.nonews") }}
    </div>
    <!-- 如果没有警告且没有打开任何公告则显示 -->
    <div v-if="!warning && !isExpand">
      <!-- 循环遍历所有公告对象 -->
      <div v-for="n in news" :key="n.id">
        <el-link
          class="news-item"
          :underline="false"
          @click="expand(n)"
          icon="el-icon-s-opportunity"
          >{{ n.title }}</el-link
        >
      </div>
    </div>
    <!-- 公告详情 -->
    <div
      class="news-detail"
      v-if="article != null && article != '' && isExpand"
    >
      <el-page-header
        class="page-header"
        @back="goBack"
        :title="$t('navbar.back')"
        :content="title"
      ></el-page-header>
      <div v-html="article"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import request from "../util/request";
export default {
  name: "clp-news",
  data() {
    return {
      warning: false,
      article: "",
      title: "",
      news: [],
      page: 0,
      isExpand: false
    };
  },
  // 被挂载后执行获取公告、判断公告是否为空显示警告
  mounted() {
    this.getNews();
    setTimeout(() => {
      if (this.news.length == undefined || this.news.length < 1) {
        this.warning = true;
      }
    }, 3000);
  },
  // 盯着news，当变化时重新判断是否显示警告
  watch: {
    news: function() {
      if (this.news.length == undefined || this.news.length < 1) {
        this.warning = true;
      }
    }
  },
  methods: {
    // 点开一个公告后使用markd解析公告内容，添加标题与标记展开
    expand: function(content) {
      this.article = marked(content.content);
      this.title = content.title;
      this.isExpand = true;
    },
    // 使用公共的request工具获取新闻内容
    getNews: function() {
      request({
        method: "get",
        url: "/news",
        data: {
          size: 20,
          page: this.page
        }
      }).then(response => {
        this.news = response.data.content;
      });
    },
    // 返回新闻列表
    goBack() {
      this.isExpand = false;
    }
  }
};
</script>

<style>
.news-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 40px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  background-color: rgb(255, 255, 255);
  transition: 0.3s;
  padding-bottom: 20px;
}

.news-item {
  line-height: 42px;
  font-size: 18px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  justify-content: left !important;
}

.news-item:hover {
  background-color: #f7fafe;
}

.button-back {
  position: relative;
}

.news-detail {
  padding: 5px 40px 20px 40px;
}

.news-header {
  font-size: 30px;
  padding: 18px 0px 16px 38px;
  font-weight: 200;
  border-bottom: 5px rgba(0, 0, 0, 0.8) !important;
}

.no-news {
  font-size: 22px;
  padding: 30px 0px 16px 38px;
  font-weight: 400;
  border-bottom: 5px rgba(0, 0, 0, 0.8) !important;
}

.page-header {
  padding-top: 20px;
}
</style>
