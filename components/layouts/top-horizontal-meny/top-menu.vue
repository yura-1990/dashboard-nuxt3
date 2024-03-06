<script setup lang="ts">

import UserData from "~/components/layouts/top-horizontal-meny/user-data.vue";
import LangSwitcher from "~/components/language/LangSwitcher.vue";

</script>

<template>
  <div class="flex items-center justify-between relative rounded h-[60px] px-4 sticky top-0 bg-white shadow-lg dark:bg-[#2F3349FF]">
    <div class="">

    </div>
    <div class="flex gap-4">
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
