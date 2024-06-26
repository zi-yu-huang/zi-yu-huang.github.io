<template>
  <Navbar />
  <div class="header-style">
    <RouterView />
  </div>
  <ZTag />
</template>
<script setup lang="ts">
import Navbar from "./components/Navbar.vue";

</script>
<style lang="scss">
.header-style{
  padding-top: 86px;
}
</style>
