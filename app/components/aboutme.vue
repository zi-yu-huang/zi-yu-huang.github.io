<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div id="about" class="my-25">
    <div class="grid gap-4 pb-4" style="border-bottom: 1px solid #dedede">
      <p class="text-Primary text-4xl dark:text-Background">
        {{ t("about.about_me") }}
      </p>
      <p class="text-Secondary dark:text-TagBorder">{{ t("about.title") }}</p>
    </div>
    <div
      class="my-10 pl-4 py-4 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-6"
      style="border-left: 1px solid var(--color-Secondary)"
    >
      <div
        class="my-2 flex flex-col gap-2 pb-4 border-b border-[#dedede] lg:border-none"
      >
        <p class="text-Primary dark:text-TagBorder">
          {{ t("about.education_title") }}
        </p>
        <p class="text-xl">
          {{ t("about.education_desc") }}
        </p>
        <div class="flex lg:flex-col">
          <p>
            {{ t("about.school") + "&nbsp" }}
          </p>
          <p>
            {{ t("about.graduated") }}
          </p>
        </div>
      </div>
      <p class="mt-4 lg:mt-0">
        {{ t("about.des") }}
      </p>
    </div>
  </div>
</template>
