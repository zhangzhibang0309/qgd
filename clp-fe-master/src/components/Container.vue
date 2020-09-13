<template>
  <div class="clp-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "clp-container",
  props: {
    shadow: String
  }
};
</script>

<style scoped>
.clp-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .clp-container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .clp-container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .clp-container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .clp-container {
    max-width: 1140px;
  }
}
</style>
