<template>
  <div id="about" class="my-20">
    <p class="text-Secondary">Frontend Engineer & Creative Developer</p>
    <p class="text-Primary text-3xl py-5">Febe Huang</p>
    <p>
      Hi, I’m Febe — a Frontend Engineer who builds interactive web experiences.
      I specialize in Vue and Nuxt, focusing on responsive design, smooth
      animations, and clean, maintainable code. From concept to deployment, I
      bring ideas to life with thoughtful UI and solid engineering.
    </p>
    <div class="flex gap-1.5">
      <UButton
        class="mt-4 text-[Accent] hover:text-Secondary active:text-Secondary dark:text-white"
        trailing-icon="i-lucide-arrow-up-right"
        variant="link"
        style="border-bottom: 1px solid black; border-radius: 0%"
        ><a href="#work">View Work</a></UButton
      >
      <UButton
        class="mt-4 text-[Accent] hover:text-Secondary active:text-Secondary dark:text-white"
        trailing-icon="i-lucide-arrow-up-right"
        variant="link"
        style="border-bottom: 1px solid black; border-radius: 0%"
        ><a href="#contact">Contact</a></UButton
      >
    </div>
  </div>
</template>
