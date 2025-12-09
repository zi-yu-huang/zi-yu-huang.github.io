<script setup lang="ts">
const { t } = useI18n(); 

</script>
<template>
  <div class="my-25">
    <p class="text-Secondary dark:text-TagBorder">{{ $t('header.title') }}</p>
    <p class="text-Primary text-3xl py-5 dark:text-Background">{{ t("header.name") }}</p>
    <p>
      {{ $t('header.greeting') }}
    </p>
    <div class="flex gap-1.5">
      <UButton
        class="mt-4 text-[Accent] hover:text-Secondary active:text-Secondary dark:text-white"
        trailing-icon="i-lucide-arrow-up-right"
        variant="link"
        style="border-bottom: 1px solid black; border-radius: 0%"
        ><a href="#project">{{ $t('link.view_work') }}</a></UButton
      >
      <UButton
        class="mt-4 text-[Accent] hover:text-Secondary active:text-Secondary dark:text-white"
        trailing-icon="i-lucide-arrow-up-right"
        variant="link"
        style="border-bottom: 1px solid black; border-radius: 0%"
        ><a href="#contact">{{ $t('link.contact') }}</a></UButton
      >
    </div>
  </div>
</template>
