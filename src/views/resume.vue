<template lang="pug">
//- 請填寫功能描述👈
#Resume
  .title-area
    img(src="/src/assets/img/my.png")
    .name-title 黃子瑜
  .content-area 


</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
// 排版
#Resume {
  padding: 0px 25%;
  .title-area{
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: center;

    .name-title{
      font-size: 30px;
      display: flex;
      align-items: center;
    }
  }
}
// 元件
#Resume {
  img{
    width: 300px;
    height: 300px;
  }
}
</style>
