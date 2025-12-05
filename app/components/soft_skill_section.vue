<script setup lang="ts">
import softskill_list from "../../mock/softskill_list.js";

const { t } = useI18n();
</script>
<template>
  <div id="softskill" class="my-25">
    <div class="grid gap-4 pb-4" style="border-bottom: 1px solid #dedede">
      <p class="text-Primary text-4xl dark:text-Background">
        {{ t("softskill.softskill_title") }}
      </p>
      <p class="text-Secondary  dark:text-TagBorder">{{ t("softskill.softskill_desc") }}</p>
    </div>
    <div class="my-4">
      <div v-for="(item, index) in softskill_list" :key="index" class="my-8">
        <div class="grid gap-2">
          <b class="text-xl">{{ t(item.title) }}</b>
          <p>{{ t(item.desc) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
