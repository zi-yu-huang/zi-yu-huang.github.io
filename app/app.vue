<script setup lang="ts">
import Header from "./layouts/header.vue";
import HeroSection from "./components/hero_section.vue";
import ProjectSection from "./components/project_section.vue";
import SkillSection from "./components/skill_section.vue";
import AboutMe from "./components/aboutme.vue";
import TouchSection from "./components/touch_section.vue";
import Footer from "./layouts/footer.vue";
</script>
<template>
  <div class="bg-Background dark:bg-[#0D060F]">
    <Header />
    <div class="m-5 lg:max-w-[800px] lg:mx-auto">
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <AboutMe />
      <TouchSection />
    </div>

    <Footer />
  </div>
</template>
<style>
body {
  /* background-color: var(--color-Background); */
}
</style>
