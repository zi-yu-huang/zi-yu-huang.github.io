<template lang="pug">
#ZTag
  .tag-area(:class="Themetype")
    .icon-left(v-if="tagIcon")
      font-awesome-icon(:icon="tagIcon")
    div {{props.tagText}}
</template>

<script setup lang="ts">
import {  computed, defineProps } from 'vue';

const props = defineProps({
  iconColor: {
    type: String,
    default: ''
  }, 
  tagText: {
    type: String,
    default: ''
  },
  tagIcon:{
    type:String,
    default:null
  }
});


const Themetype = computed(() => props.iconColor);

console.log(Themetype)
</script>

<style lang="scss" scoped>
#ZTag {
  .icon-left {
    margin-right: 6px;
  }

  .tag-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    padding: 0px 6px;
  }

  .primary {
    background-color: #A8DADC;
  }

  .secondary {
    background-color: #457B9D;
    color: white;
  }

  .info {
    background-color: #F1FAEE;
  }

  .danger {
    background-color: #E63946;
    color: white;
  }

  .warning {
    background-color: #1D3557;
    color: white;
  }
}
</style>