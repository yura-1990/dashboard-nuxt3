<script setup lang="ts">
definePageMeta({
  middleware: ['children']
})

import {useI18n} from "vue-i18n";
import {useCookie} from "#imports";
import {onMounted, computed, ref} from "vue";
import { initFlowbite } from 'flowbite'
import { storeToRefs } from 'pinia';
import { useReferenceStore } from "~/store/useReferenceStore";

const { referenceEndpointLists, referenceKeys } = storeToRefs(useReferenceStore());
const { getReferenceByEndpoint } = useReferenceStore()
const endpoint = computed<string>(()=> useCookie('referenceEndpoint').value )
const { locale, locales } = useI18n()

onMounted(()=>{
  initFlowbite()

  getReferenceByEndpoint(endpoint.value)
  console.log(referenceKeys.value)

})

function getEndpointReferenceId(id:number){

}

const links = ref([
  {
    title: 'references',
    icon: { name: 'codicon:references', size: '16' },
    to: '/references/lists',
  },
  {
    title: 'show',
    icon: { name: 'clarity:eye-show-line', size: '16' },
    to: '/references/show',
  }
])

</script>

<template>
  <div>
    <div class="w-max sticky z-[5] top-0 my-3">
      <Breadcrumb :links="links" />
    </div>
    <div class="grid gap-4 rounded-lg xl:grid-cols-2 z-[4] 2xl:grid-cols-3">
      <div class="bg-transparent table-height table-wrp block rounded-lg shadow-sm 2xl:col-span-3 ">
        <table class="w-full text-sm text-left rtl:text-right rounded-lg dark:text-gray-400 overflow-x-auto">
          <thead class="sticky top-[49px] z-[5] backdrop-blur-3xl bg-indigo-400 dark:bg-[#6D609B49] text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th v-for="(item, index) in referenceKeys" scope="col" data-tooltip-target="tooltip-top1" data-tooltip-placement="top"
                  class="p-2 border  border-gray-700 text-xs font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t(item) }}
                <div id="tooltip-top1" role="tooltip" class="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t(item) }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>

              <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white"></th>
            </tr>
          </thead>
          <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
          <tr v-for="(item, index) in referenceEndpointLists" :key="index"  class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td v-for="(it, i) in referenceKeys" class="p-2 text-md font-normal text-wrap text-black whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item[it] }}
            </td>
            <td @click="getEndpointReferenceId(item.id)" class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              <Icon name="clarity:eye-show-line"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
</template>

<style scoped>
.table-height{
  min-height: calc(100vh - 148px);
}
</style>
