<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const navItems = computed(() => [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Skill", id: "skill" },
  { label: "Contact", id: "contact" },
]);

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const pathWithHash = `${route.path.split("#")[0]}#${id}`;
  void useRouter().push(pathWithHash);
}
</script>

<template>
  <UHeader
    :toggle="false"
    class="bg-[#FDF9F2]"
    style="border-bottom: 1px solid #dedede"
  >
    <template #title>
      <p class="h-6 w-auto">Febe Huang</p>
    </template>

    <nav class="hidden lg:flex gap-6 items-center">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="text-Primary hover:text-Accent whitespace-nowrap"
        @click="scrollToId(item.id)"
      >
        {{ item.label }}
      </button>
    </nav>

    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/zi-yu-huang"
        target="_blank"
        icon="i-lucide-languages"
        aria-label="GitHub"
      />
      <a
        download="Febe_resume.pdf"
        class="text-neutral-500 hover:text-neutral-700"
        href="/Febe_resume.pdf"
        aria-label="Resume"
        >Resume</a
      >
    </template>
  </UHeader>
</template>
