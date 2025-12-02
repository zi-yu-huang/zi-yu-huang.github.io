<script setup lang="ts">
import Workexprience from "./workexprience.vue";
</script>

<template>
  <div id="about">
    <div class="grid gap-4 pb-4" style="border-bottom: 1px solid #dedede">
      <p class="text-Primary text-4xl">About Me</p>
      <p>Junior Frontend Engineer</p>
    </div>
    <div class="my-10 lg:grid lg:grid-cols-2 lg:flex-row lg:gap-6">
      <div
        style="border-left: 1px solid var(--color-Secondary)"
        class="my-4 pl-4 py-4 flex flex-col gap-2"
      >
        <p class="text-Primary">Education</p>
        <p class="text-xl">
          National Taichung University of Science and Technology
        </p>
        <p>
          National Taichung University of Science and Technology ｜ Graduated:
          2020
        </p>
      </div>
      <p>
        I am a junior frontend engineer specializing in Vue and Nuxt, with
        experience in building responsive websites, animation effects, and
        integrating APIs. I enjoy transforming design into real, interactive
        products and continuously improving UI performance and user experience.
        I also have basic backend experience with Node.js and MongoDB, which
        helps me better collaborate in full-stack projects.
      </p>
    </div>

    <Workexprience />
  </div>
</template>
