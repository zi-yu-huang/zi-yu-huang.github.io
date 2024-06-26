<template lang="pug">
//- 請填寫功能描述👈
#Navbar

  .nav-title
    .a-link(@click="toHome") Home
    .a-link(@click="toResume") Resume
    .a-link(@click="toProfile") Profile
    //- .a-link(@click="toContact") Contact
    .a-link(@click="toTravel") Travel
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toHome = () => {
  router.push("/");
}

const toResume = () => {
  router.push("/resume");
}

const toProfile = () => {
  router.push("/profile");
}
const toContact = () => {
  router.push("/contact");
}
const toTravel = () => {
  router.push("/travel");
}
</script>

<style lang="scss" scoped>
#Navbar {
  position: fixed;
  box-sizing: border-box;
  width: 100dvw;
  color: white;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 999;
  background-color: #F1FAEE;

  // border-bottom: 2px solid #457B9D;




  .nav-title {

    display: flex;
    gap: 100px;
    color: black;
    font-size: 24px;
  }

  .a-link {
    cursor: pointer;
  }
}
</style>
