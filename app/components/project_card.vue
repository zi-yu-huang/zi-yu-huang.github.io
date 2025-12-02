<script setup lang="ts">
const props = defineProps<{
  project: {
    year: number;
    title: string;
    description: string;
    link: string;
    image: string;
    tag: string[];
  };
}>();
</script>
<template>
  <div
    class="flex flex-col gap-6 my-8 lg:grid  lg:grid-cols-2 lg:gap-8 lg:items-center lg:h-80 md:grid  md:grid-cols-2 md:gap-8 md:items-center md:h-80"
  >
    <div class="flex flex-col gap-6">
      <p class="text-Secondary">{{ project.year }}</p>
      <p class="text-4xl font-bold">{{ project.title }}</p>
      <p class="text-Secondary text-wrap">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="(item, index) in project.tag"
          :key="index"
          class="bg-Tag text-Secondary px-2 py-1 font-bold rounded-full"
          style="border: 1px solid var(--color-TagBorder)"
          >{{ item }}</UBadge
        >
      </div>
      <div>
        <a :href="project.link" target="_blank" class="font-bold"
          >View Project <UIcon name="i-lucide-arrow-up-right"></UIcon
        ></a>
      </div>
    </div>
    <div class="w-full h-full lg:order-first">
      <img
        :src="project.image"
        :alt="project.title"
        class="aspect-4/3 w-full h-full"
      />
    </div>
  </div>
</template>
