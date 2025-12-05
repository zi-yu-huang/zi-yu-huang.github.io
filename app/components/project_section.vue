<script setup lang="ts">
import ProjectCard from "./project_card.vue";
import ProjectList from "../../mock/project_list";
const { t } = useI18n();
</script>
<template>
  <div id="project" class=" my-25">
    <div
      class="flex justify-between pb-4"
      style="border-bottom: 1px solid #dedede"
    >
      <div class="grid gap-4 pb-4">
        <p class="text-4xl text-Primary dark:text-Background">
          {{ t("sections.featured_projects") }}
        </p>
        <p class="text-Secondary dark:text-TagBorder">
          {{ t("sections.featured_desc") }}
        </p>
      </div>
      <UButton
        href="https://github.com/zi-yu-huang"
        target="_blank"
        variant="link"
        trailing-icon="i-lucide-external-link"
        class="text-Secondary hover:text-Secondary active:text-Secondary dark:text-white"
        >{{ t("link.view_github") }}
      </UButton>
    </div>
    <div v-for="(project, index) in ProjectList" :key="index">
      <ProjectCard :project="project" class="mb-20" />
    </div>
  </div>
</template>
