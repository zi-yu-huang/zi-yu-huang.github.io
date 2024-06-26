<template lang="pug">
//- 請填寫功能描述👈
#Components
  h3.tag-area tagComponent
    ZTag(iconColor="primary" tagText="primary")
    ZTag(iconColor="secondary" tagText="secondary")
    ZTag(iconColor="info" tagText="info")
    ZTag(iconColor="danger" tagText="danger")
    ZTag(iconColor="warning" tagText="warning")
    ZTag(:iconColor="iconColor" :tagText="tagText" :tagIcon="tagIcon")
</template>

<script setup lang="ts">
import {  ref } from 'vue';
import ZTag from '../components/ComponentStyle/ZTag.vue'
components: {
  ZTag
}

const iconColor = ref("secondary")
const tagText = ref("Default Tag Text")
const tagIcon =ref("user-secret")
</script>

<style lang="scss" scoped>
// 排版
#Components {
  .tag-area{
    display: flex;
    gap: 40px;
  }
}

// 元件
#Components {}
</style>
