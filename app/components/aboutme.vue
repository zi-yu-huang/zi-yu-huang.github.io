<script setup lang="ts">
import Workexprience from "./workexprience.vue";

const { t } = useI18n();
</script>

<template>
  <div id="about">
    <div class="grid gap-4 pb-4" style="border-bottom: 1px solid #dedede">
      <p class="text-Primary text-4xl">{{ t("about.about_me") }}</p>
      <p>{{ t("about.title") }}</p>
    </div>
    <div class="my-10 lg:grid lg:grid-cols-2 lg:flex-row lg:gap-6">
      <div
        style="border-left: 1px solid var(--color-Secondary)"
        class="my-4 pl-4 py-4 flex flex-col gap-2"
      >
        <p class="text-Primary">{{ t("about.education_title") }}</p>
        <p class="text-xl">
          {{ t("about.education_desc") }}
        </p>
        <p>
          {{ t("about.school") }}
        </p>
      </div>
      <p>
        {{ t("about.des") }}
      </p>
    </div>

    <Workexprience />
  </div>
</template>
