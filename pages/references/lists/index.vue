<script setup lang="ts">
import {useStatesStore} from "~/store/useStatesStore";

definePageMeta({
  middleware: ['ability']
})

import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';
import { useReferenceStore } from "~/store/useReferenceStore";
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
const { locale, locales } = useI18n()

const { references } = storeToRefs(useReferenceStore());
const { getReferenceList, getReferenceByEndpoint } = useReferenceStore()
const router = useRouter()

onMounted(async () => {
  initFlowbite()
  await getReferenceList()
})
async function getEndpointReference(item: string){
  await getReferenceByEndpoint(item.endpoint)
  await router.push('/references/show')
}


const links = ref([
  {
    title: 'references',
    icon: { name: 'codicon:references', size: '16' },
  },
  {
    title: 'references-list',
    icon: { name: 'material-symbols:lists-rounded', size: '16' },
    to: '/references/lists',
  }
])
</script>

<template>
  <div>
    <div class="w-max my-3 sticky top-0 z-[5]">
      <Breadcrumb :links="links" />
    </div>
    <div class="grid gap-4 rounded-lg xl:grid-cols-2 2xl:grid-cols-3">
      <div class="bg-white table-height table-wrp block rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 dark:bg-transparent">
        <table class="w-full text-sm text-left rtl:text-right rounded-lg dark:text-gray-400">
          <thead class="sticky top-[49px] z-[5] backdrop-blur-3xl bg-indigo-400 dark:bg-[#6D609B49] text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" data-tooltip-target="tooltip-top1" data-tooltip-placement="top"
                  class="p-2 border border-gray-700 text-xs font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('№ п/п') }}
                <div id="tooltip-top1" role="tooltip" class="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('№ п/п') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top2" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Справочник') }}
                <div id="tooltip-top2" role="tooltip" class="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Справочник') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white"></th>
            </tr>
          </thead>
          <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
          <tr v-for="(item, index) in references" :key="index"  class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td class="p-2 text-md font-normal text-black whitespace-nowrap border border-gray-700 dark:text-white">
              <span class="font-semibold">{{ item.id }}</span>
            </td>
            <td class="p-2 text-lg font-normal text-black font-medium border border-gray-700 whitespace-nowrap dark:text-white">
              {{ item.title[locale] }}
            </td>
            <td @click="getEndpointReference(item)" class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
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
