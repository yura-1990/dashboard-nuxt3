<script setup lang="ts">

import UserData from "~/components/layouts/top-horizontal-meny/user-data.vue";
import LangSwitcher from "~/components/language/LangSwitcher.vue";

</script>

<template>
  <div class="flex items-center justify-between rounded h-[60px] border border-gray-600 px-4 z-[5] sticky top-[-10px] bg-white shadow-lg dark:bg-[#2F3349FF]">
    <div class="">

    </div>
    <div class="flex gap-4 z-50">
      <LangSwitcher />
      <LazyThemesColorMode />
      <UserData />
    </div>
  </div>
</template>

<style scoped>
  k{
    color: rgb(71 81 115);
  }
</style>
