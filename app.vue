<template>
  <div id="">
    <LazyNuxtLayout>
      <LazyNuxtPage />
    </LazyNuxtLayout>
    <UNotifications />
  </div>
</template>
<script setup lang="ts">
import { initFlowbite } from 'flowbite'

onMounted(()=>initFlowbite())

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: 0.1s linear;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(20rem);
}
</style>
