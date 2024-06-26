<template lang="pug">
//- 請填寫功能描述👈
#Experience
  h3 Experience
  .area
    ul.tiemCircle
      li 
        .title 2024/02-2024/07
          .content-title 國泰人壽保險股份有限公司
          .content-detail 前端實習生
      li 
        .title 2022/09-2023/11
          .content-title 八曜和茶國際有限公司
          .content-detail 外場工讀生（勤美門市）

      li 
        .title 2022/02-2022/07
          .content-title 泰爾科技股份有限公司
          .content-detail 前端實習生

      li 
        .title 2021/09-2021/12
          .content-title 台中科技大學 就業輔導組
          .content-detail 專案助理工讀生

      li 
        .title 2020/07-2021/07
          .content-title 平祿壽司
          .content-detail 外場工讀生


</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
// 排版
#Experience {}

// 元件
#Experience {
  .area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 300px;

    ul {
      display: flex;
      justify-content: center;
      text-align: start;
      flex-direction: column;
      width: 404px;

      // height: 400px;
    }

    li {
      position: relative;
      font-weight: 800;
      list-style-type: none;

      //line
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        padding: 2px 0px;
        width: 3px;
        height: 100%;
        background-color: #457B9D;
      }

      //circle



      &:nth-child(odd) {
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -10px;
          bottom: 0;
          margin: auto;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #457B9D;

        }
      }


      &:nth-child(even) {

        position: relative;
        right: 0;
        left: -301px;
        display: flex;
        flex-direction: row-reverse;

        padding-right: 100px;
        text-align: end;
        word-wrap: break-word;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 92px;
          bottom: 0;
          margin: auto;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #457B9D;

        }

      }

      .title {
        padding: 40px 25px;
        word-wrap: break-word;
      }
    }
  }
}
</style>
