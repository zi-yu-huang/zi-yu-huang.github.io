<script setup lang="ts">
const { t } = useI18n(); 

import SkillCard from "./skill_card.vue";
</script>

<template>
  <div id="skill" class="my-25">
    <div class="grid gap-4 pb-4" style="border-bottom: 1px solid #dedede">
      <p class="text-Primary text-4xl dark:text-Background">{{ $t("sections.technical_skills") }}</p>
      <p class="text-Secondary  dark:text-TagBorder">{{ $t("sections.technical_skills_desc") }}</p>
    </div>
    <SkillCard />
  </div>
</template>
