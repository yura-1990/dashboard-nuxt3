<script setup lang="ts">
definePageMeta({
  middleware: ['children']
})

import { onMounted, computed } from "vue";
import { initFlowbite } from 'flowbite'
import { useStatesStore } from "~/store/useStatesStore";
import { storeToRefs } from 'pinia';

const { state } = storeToRefs(useStatesStore());
const { getStateByID } = useStatesStore()
const stateID = computed<number>(()=> useCookie('stateID').value )

onMounted(()=>{
  getStateByID(stateID.value)
  initFlowbite()
})


const links = ref([
  {
    title: 'states',
    icon: { name: 'mingcute:book-5-line', size: '16' },
    to: '/states',
  },
  {
    title: 'show',
    icon: { name: 'clarity:eye-show-line', size: '16' },
    to: '/states/show',
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
        <table class="w-full text-sm text-left rtl:text-right rounded-lg dark:text-gray-400">
          <thead class="sticky top-[48px] backdrop-blur-3xl z-[5] bg-indigo-400 dark:bg-[#6D609B49] text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" data-tooltip-target="tooltip-top1" data-tooltip-placement="top"
                  class="p-2 border border-gray-700  text-xs font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Раздел').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top1" role="tooltip" class="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Раздел') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top2" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Подразделения').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Подразделения') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top3" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Должность').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Должность') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top4" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Воинское звание').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top4" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Воинское звание') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top5" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('01') }}
                <div id="tooltip-top5" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('01') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top6" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('51') }}
                <div id="tooltip-top6" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('51') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top7" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Должностной оклад').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top7" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Должностной оклад') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top8" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('ВУС') }}
                <div id="tooltip-top8" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('ВУС') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top9" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Код подразделения').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top9" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Код подразделения') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top10" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Код первой должности').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top10" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Код первой должности') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top11" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Код второй должности').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top11" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Код второй должности') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top12" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Код воинского звания').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top12" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Код воинского звания') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
              <th scope="col" data-tooltip-target="tooltip-top13" data-tooltip-placement="top"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
                {{ $t('Код порядкового номера в штате').split(' ').map(el=>el.charAt(0)).join('').toUpperCase() }}
                <div id="tooltip-top13" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">
                  {{ $t('Код порядкового номера в штате') }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="overflow-y-auto dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
            <tr v-for="(item, index) in state" :key="index" class="bg-gray-100 hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300 odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td class="p-2 text-md font-normal text-black whitespace-nowrap border border-gray-700 dark:text-white">
              <span class="font-semibold">{{ item.section_code }}</span>
            </td>
            <td
                class="p-2 text-lg font-normal text-black font-medium border border-gray-700 whitespace-nowrap dark:text-white">
              {{ item.subsection_code.split(',')[item.subsection_code.split(',').length -1 ] }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.position_code }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.rank_code }}
            </td>
            <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item['01'] }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item['51'] }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.salary }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.vus_code }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.subsection_code.split(',')[item.subsection_code.split(',').length -1 ] }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.position_code }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.secondary_position_code }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item.rank_code }}
            </td>
            <td
                class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
              <span class="font-semibold">{{ item.number }}</span>
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
