<script setup lang="ts">
import ProjectCard from "./project_card.vue";
import ProjectList from "../../mock/project_list";
</script>
<template>
  <div id="work" class="flex justify-between pb-4" style="border-bottom: 1px solid #dedede">
    <p class="text-4xl text-Primary">Featured Projects</p>
    <UButton
      href="https://github.com/zi-yu-huang"
      target="_blank"
      variant="link"
      trailing-icon="i-lucide-external-link"
      class="text-Secondary hover:text-Secondary active:text-Secondary dark:text-white"
      >View on GitHub
    </UButton>
  </div>
  <div v-for="(project, index) in ProjectList" :key="index">
    <ProjectCard :project="project" class="mb-20" />
  </div>
  <div>
    
  </div>
</template>
