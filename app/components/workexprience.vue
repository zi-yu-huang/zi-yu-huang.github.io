<script setup lang="ts">
import WoekexprienceList from "../../mock/workexprience_list.js";

</script>

<template>
  <div>
    <div
      v-for="(item, index) in WoekexprienceList"
      :key="index"
      class="my-16 pl-4 py-5 border-style"
      style=""
    >
      <div class="flex justify-between mb-4">
        <div class="flex flex-col">
          <p class="text-xl">
            {{ item.position }}
          </p>
          <p class="text-Secondary">{{ item.company }}</p>
        </div>
        <p class="text-Secondary">
          {{ item.year }}
        </p>
      </div>
      <div class="my-4">
        <p>{{ item.description }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="(t,index) in item.tag"
          :key="index"
          class="bg-Tag text-Secondary px-2 py-1 font-bold rounded-full"
          >{{ t }}</UBadge
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.border-style {
  border-left: 2px solid var(--color-TagBorder);
  border-color: var(--color-TagBorder);
}
.border-style:hover {
  border-color: var(--color-Primary);
  transition: border-color 0.3s ease;
}
</style>