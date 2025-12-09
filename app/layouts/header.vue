<script setup lang="ts">
// 引入 useI18n 來獲取語言切換的工具
const { locale, setLocale, t } = useI18n();
const route = useRoute();

const navItems = computed(() => [
  { label: t("nav.about"), id: "about" },
  { label: t("nav.skill"), id: "skill" },
  { label: t("nav.work"), id: "work" },
  { label: t("nav.contact"), id: "contact" },
]);

function toggleLocale() {
  const newLocale = locale.value === "zh-tw" ? "en" : "zh-tw";
  setLocale(newLocale);
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  // 這裡假設您的路由結構不需要特別處理 i18n 前綴，Nuxt i18n 會自動處理
  const pathWithHash = `${route.path.split("#")[0]}#${id}`;
  void useRouter().push(pathWithHash);
}
const goHome = () => {
  window.location.href = "https://zi-yu-huang.github.io/";
};
</script>

<template>
  <UHeader
    :toggle="false"
    class="sticky top-0 z-50"
    style="border-bottom: 1px solid #dedede"
  >
    <template #title>
      <div @click="goHome" class="cursor-pointer flex items-end gap-1.5">
        <img
          src="/images/myLogo.png"
          alt="Logo"
          loading="lazy"
          class="w-10"
        />
      </div>
    </template>

    <nav class="hidden lg:flex gap-6 items-center">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="text-neutral-600 whitespace-nowrap transition-colors duration-200 dark:text-neutral-200"
        @click="scrollToId(item.id)"
      >
        {{ item.label }}
      </button>
    </nav>

    <template #right>
      <!-- 語言切換按鈕 -->
      <UButton
        color="neutral"
        variant="ghost"
        icon="i-lucide-languages"
        :aria-label="`Switch to ${locale === 'en' ? '繁體中文' : 'English'}`"
        @click="toggleLocale"
      >
        <!-- 顯示當前語言的對應名稱 (例如: EN 或 中文) -->
        {{ locale === "en" ? "中" : "EN" }}
      </UButton>
      <UColorModeButton />
      <!-- 履歷下載連結 -->
      <a
        download="Febe_resume.pdf"
        class="text-neutral-800 hover:text-neutral-700 transition-colors duration-200 dark:text-Background"
        href="/Febe_resume.pdf"
        aria-label="Resume Download"
      >
        {{ $t("resume") }}</a
      >
    </template>
  </UHeader>
</template>
