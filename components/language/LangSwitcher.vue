<script setup lang="ts">
import { ref } from 'vue'
const { locales, locale, setLocale } = useI18n()
const isLocales = ref(false)

const getLocals = computed(()=>{
 return locales.value.filter(el => el.code !== locale.value)
})
function setLang(lang: any){
  setLocale(lang)
  isLocales.value = !isLocales.value
}


</script>

<template>
  <div class="relative w-[60px] flex justify-center items-center">
    <button @click="isLocales = !isLocales" class="active-link text-white items-center gap-2 px-2 flex w-full rounded-lg py-1 hover:bg-[#8692d00f]">
      <span class="flex items-center capitalize gap-2">
        {{ locale }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.552.552 0 0 0-.771 0"/></svg>
    </button>

    <ul class="flex  w-[100px] overflow-hidden rounded-lg  bg-white shadow-lg dark:bg-[#2F3349FF] right-[-20px] top-[-15px] flex-col transition-all ease-linear absolute scale-0" :class="{ 'z-[20] !scale-100 !right-[-2px] !top-[50px]': isLocales }">
      <li v-for="lang in getLocals"
          :key="lang.code"
          @click="setLang(lang.code)"
          class="cursor-pointer capitalize py-1 hover:bg-[#8692d00f] font-normal text-dark dark:text-white flex items-center justify-center text-dark rounded-sm montserrat-500"
      >
        {{ lang.code }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>
