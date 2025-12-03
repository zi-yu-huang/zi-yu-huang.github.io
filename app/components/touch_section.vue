<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <div id="contact" class="my-35">
    <div class="grid gap-4 pb-4" style="border-bottom: 1px solid #dedede">
      <p class="text-Primary text-4xl dark:text-Background">{{ $t("sections.get_in_touch") }}</p>
      <p>{{ $t("sections.get_in_touch_desc") }}</p>
    </div>
    <div
      class="my-8 flex flex-col lg:flex-row lg:flex lg:justify-between gap-6"
    >
      <!-- Email -->
      <a href="mailto:febehuang07@gmail.com">
        <div class="border-style px-5 py-5 flex flex-col items-center gap-4">
          <div
            class="bg-Tag w-[60px] h-[60px] flex items-center justify-center "
          >
            <UIcon
              name="i-lucide-mail"
              class="size-7"
              style="color: var(--color-Secondary)"
            />
          </div>
          <p>Email</p>
          <p>febehuang07@gmail.com</p>
          <div class="icon-link">
            <UIcon
              name="i-lucide-move-up-right"
              style="color: var(--color-Secondary)"
            />
          </div>
        </div>
      </a>
      <!-- GitHub -->
      <a
        href="https://github.com/zi-yu-huang"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="border-style px-5 py-5 flex flex-col items-center gap-4">
          <div
            class="bg-Tag w-[60px] h-[60px] flex items-center justify-center"
          >
            <UIcon
              name="i-lucide-github"
              class="size-7"
              style="color: var(--color-Secondary)"
            />
          </div>
          <p>GitHub</p>
          <p>github.com/zi-yu-huang</p>
          <div class="icon-link">
            <UIcon
              name="i-lucide-external-link"
              style="color: var(--color-Secondary)"
            />
          </div>
        </div>
      </a>
      <!-- Linkedin --><a
        href="https://linkedin.com/in/子瑜-黃-613ba41aa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="border-style px-5 py-5 flex flex-col items-center gap-4">
          <div
            class="bg-Tag w-[60px] h-[60px] flex items-center justify-center"
          >
            <UIcon
              name="i-lucide-linkedin"
              class="size-7"
              style="color: var(--color-Secondary)"
            />
          </div>
          <p>Linkedin</p>
          <p>linkedin.com/in/子瑜-黃-613ba41aa/</p>
          <div class="icon-link">
            <UIcon
              name="i-lucide-external-link"
              style="color: var(--color-Secondary)"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
.border-style {
  border: 1px solid var(--color-Tag);
  background-color: var(--color-Background);
}

.icon-link {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.border-style:hover {
  cursor: pointer;
  background: var(--color-Tag);
  color: var(--color-Secondary);
  border: 1px solid var(--color-Secondary);
  transform: scale3d(1.05, 1.05, 1.05) translateY(-8px);
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.border-style:hover .icon-link {
  opacity: 1;
}

html.dark .border-style {
  background-color: black; /* 深色模式下的背景 */
  color: white;            /* 深色模式下的文字顏色 */
}
</style>
