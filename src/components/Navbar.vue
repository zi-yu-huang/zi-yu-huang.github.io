<template lang="pug">
//- 請填寫功能描述👈
#Navbar
  .navbar-index 
    |
    .nav-title
      .a-link(@click="toHome") Home
      .a-link(@click="toResume") Resume
      .a-link(@click="toProfile") Profile
      //- .a-link(@click="toContact") Contact
      .a-link(@click="toTravel") Travel
  img(src="/src/assets/img/ocean.jpg")
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const toHome = () => {
  router.push("/");
};

const toResume = () => {
  router.push("/resume");
};

const toProfile = () => {
  router.push("/profile");
};
const toContact = () => {
  router.push("/contact");
};
const toTravel = () => {
  router.push("/travel");
};
console.log(toHome, toResume, toProfile, toContact, toTravel);
</script>
  
  <style lang="scss" scoped>
#Navbar {
  .navbar-index {
    position: fixed;
    box-sizing: border-box;
    width: 100dvw;
    color: white;
    padding: 25px 40px;
    display: flex;
    align-items: center;
    justify-content: end;
    z-index: 999;

    // background-color: #d0e0e2;
    // background-image: url("/src/assets/img/ocean.jpg");
  }

  img {
    height: 550px;
    width: 100dvw;
    margin-bottom: 20px;
  }

  .nav-title {
    display: flex;
    gap: 100px;
    color: #002e3a;
    font-size: 24px;
    font-weight: 1000;
  }

  .a-link {
    cursor: pointer;
  }
}
</style>