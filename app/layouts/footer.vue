<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

</script>

<template>
  <div style="border-top: 1px solid var(--color-Tag);">
    <UFooter>
      <template #default>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </div>
</template>
