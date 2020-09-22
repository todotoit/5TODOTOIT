<template>
  <div class="container">
    <full-page ref="fullpage" :options="options">
      <div class="section">Section 1</div>
      <div class="section">Section 2</div>
    </full-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {},
    }
  },
}
</script>

<style></style>
