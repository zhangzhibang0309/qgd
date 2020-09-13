<template>
  <div class="main">
    <clp-container class="problem-container">
      <ProblemSearch />
    </clp-container>
    <clp-container class="problem-container">
      <QuestionList />
    </clp-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import ProblemSearch from "../components/ProblemSearch";
// eslint-disable-next-line no-unused-vars
import QuestionList from "../components/QuestionList";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    QuestionList,
    // eslint-disable-next-line vue/no-unused-components
    ProblemSearch
  }
};
</script>

<style lang="scss" scoped>
.problem-container {
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
</style>
