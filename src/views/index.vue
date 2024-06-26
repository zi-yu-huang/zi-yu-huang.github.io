<template lang="pug">
#Index
  img.img-title(src="/src/assets/img/500704706730393764.jpg")
  h1 My Work
  Experience
</template>

<script setup lang="ts">
import Experience from '../components/ComponentStyle/index/experience.vue';

components: {
  Experience
}
</script>
<style lang="scss" scoped>
#Index {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;

  .img-title {
    width: 90%;
    height: 80%;
    // filter: contrast(50%);
  }

}
</style>