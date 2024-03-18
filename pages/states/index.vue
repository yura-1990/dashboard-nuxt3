<script setup lang="ts">
definePageMeta({
  middleware: ['ability']
})

import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';
import { useStatesStore } from "~/store/useStatesStore";
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";

const { stateLists, directives } = storeToRefs(useStatesStore());
const { getStateList, getStateByID, getDirectiveLists } = useStatesStore()
const router = useRouter()

onMounted(async () => {
  initFlowbite()
  await getStateList()
  await getDirectiveLists()
})

async function getOneState(id: number){
  await getStateByID(id)
  await router.push('/states/show')
}


const links = ref([
  {
    title: 'states',
    icon: { name: 'mingcute:book-5-line', size: '16' },
  },
  {
    title: 'state-list',
    icon: { name: 'mingcute:book-5-line', size: '16' },
    to: '/states',
  }
])

</script>

<template>
  <div>
    <div class="w-max my-3">
      <Breadcrumb :links="links" />
    </div>
    <div class="grid gap-4 rounded-lg xl:grid-cols-2 2xl:grid-cols-3">
      <div class="bg-white table-height table-wrp block rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 dark:bg-transparent">
        <table class="w-full text-sm text-left rtl:text-right rounded-lg dark:text-gray-400">
          <thead class="sticky top-[49px] backdrop-blur-3xl z-50 bg-indigo-400 dark:bg-[#6D609B49] text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" data-tooltip-target="tooltip-top1" data-tooltip-placement="top"
                  class="p-2 border border-gray-700 text-xs font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('№ п/п') }}
                <div id="tooltip-top1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('№ п/п') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top2" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('№ штата').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('№ штата') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top3" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Источник финансирование').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Источник финансирование') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top4" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Uuid штата').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top4" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Uuid штата') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top5" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Воинской часть').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top5" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Воинской часть') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top6" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Военной округ').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top6" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Военной округ') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top7" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Номер принята директивы').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top7" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Номер принята директивы') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top8" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Дата принята директивы').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top8" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Дата принята директивы') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top9" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Номер отмены директивы').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top9" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Номер отмены директивы') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top10" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white ">
                {{ $t('Дата отмены директивы').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top10" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Дата отмены директивы') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white"></th>
            </tr>
          </thead>
          <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
            <tr v-for="(item, index) in stateLists" :key="index"  class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
              <td class="p-2 text-md font-normal text-black whitespace-nowrap border border-gray-700 dark:text-white">
                <span class="font-semibold">{{ item.id }}</span>
              </td>
              <td class="p-2 text-lg font-normal text-black font-medium border border-gray-700 whitespace-nowrap dark:text-white">
                {{ item.state_number }}
              </td>
              <td class="p-2 text-lg font-normal text-black font-medium border border-gray-700 whitespace-nowrap dark:text-white"></td>
              <td class="p-2 text-lg font-normal text-black font-medium border border-gray-700 whitespace-nowrap dark:text-white">
                {{ item.common_uuid }}
              </td>
              <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
                {{ item.military_unit }}
              </td>
              <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
                {{ item.military_district }}
              </td>
              <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
                {{ directives.find(el=>el.id === item.directive_code )?.code }}
              </td>
              <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
                {{ directives.find(el=>el.id === item.directive_code )?.date_of_adoption }}
              </td>
              <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
                {{ directives.find(el=>el.id === item.cancel_directive_code )?.code }}
              </td>
              <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
                {{ directives.find(el=>el.id === item.cancel_directive_code )?.date_of_adoption }}
              </td>
              <td @click="getOneState(item.id)" class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
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
