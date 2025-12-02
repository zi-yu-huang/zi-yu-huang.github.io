<script setup lang="ts">
const { t } = useI18n(); 

</script>
<template>
  <div id="about" class="my-20">
    <p class="text-Secondary">{{ $t('header.title') }}</p>
    <p class="text-Primary text-3xl py-5">Febe Huang</p>
    <p>
      {{ $t('header.greeting') }}
    </p>
    <div class="flex gap-1.5">
      <UButton
        class="mt-4 text-[Accent] hover:text-Secondary active:text-Secondary dark:text-white"
        trailing-icon="i-lucide-arrow-up-right"
        variant="link"
        style="border-bottom: 1px solid black; border-radius: 0%"
        ><a href="#work">{{ $t('link.view_work') }}</a></UButton
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
