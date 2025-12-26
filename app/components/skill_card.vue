<script setup lang="ts">
const { t } = useI18n();

const frontendList = [
  "Vue2",
  "Vue3",
  "Nuxt.js",
  "JavaScript",
  "Tailwind CSS",
  "SCSS",
  "GSAP",
  "i18n"
];
const backendList = ["Node.js", "Express.js", "MongoDB", "RESTful APIs"];

</script>

<template>
  <div class="grid gap-6">
    <div class="flex flex-col flex-wrap gap-6 mt-8">
      <UIcon class="size-6" name="i-lucide-code" />
      <p class="text-3xl">{{ t("skills.frontend_title") }}</p>
      <p class="text-Secondary dark:text-TagBorder">
        {{ t("skills.frontend_desc") }}
      </p>
      <div class="flex gap-3 flex-wrap">
        <UBadge
          v-for="(item, index) in frontendList"
          :key="index"
          size="xl"
          class="tag-style bg-Background text-Primary font-bold rounded-full"
          >{{ item }}</UBadge
        >
      </div>
    </div>
    <div class="flex flex-col flex-wrap gap-6 mt-8">
      <UIcon class="size-6" name="i-lucide-database" />
      <p class="text-3xl">{{ t("skills.backend_title") }}</p>
      <p class="text-Secondary dark:text-TagBorder">
        {{ t("skills.backend_desc") }}
      </p>
      <div class="flex gap-3 flex-wrap">
        <UBadge
          v-for="(item, index) in backendList"
          :key="index"
          size="xl"
          class="tag-style bg-Background text-Primary font-bold rounded-full"
          >{{ item }}</UBadge
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.tag-style {
  padding: 8px 16px;
  border: 1px solid var(--color-TagBorder);
}
.tag-style:hover {
  background: var(--color-Tag);
  color: var(--color-Secondary);
  border: 1px solid var(--color-Secondary);
  transform: scale3d(1.1, 1.1, 1.1);
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
