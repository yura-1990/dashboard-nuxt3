<template>
    <section class="bg-[#f8f7faea] dark:bg-[#2f2b3dc7]  flex">
      <div class="h-screen relative">
        <LayoutsNavigationsVertical />
      </div>

      <div class="overflow-y-auto px-3 py-2 h-screen  w-full">
        <layouts-top-horizontal-meny-top-menu />
        <slot />
      </div>
    </section>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/store/useAuthStore';
import { onMounted } from "vue";


const toast = useToast()
const userData = useAuthStore()

onMounted(()=>{
  toast.add({title: `Welcome ${userData?.userData?.name}`, ui: {
      notifications: {
        position: 'top-0'
      }
    }});

})

</script>
<style scoped>

</style>
