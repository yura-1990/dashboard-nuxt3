<template>
    <section class="bg-[#f8f7faea] dark:bg-[#2f2b3dc7] flex h-screen">
      <LayoutsNavigationsVertical />
      <div class="overflow-y-auto px-5 py-2 w-full">
        <layouts-top-horizontal-meny-top-menu />
        <slot />
      </div>
    </section>
</template>
<script setup lang="ts">
</script>
<style scoped>

</style>
