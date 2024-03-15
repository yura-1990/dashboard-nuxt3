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
    icon: { name: 'ic:round-lock-person', size: '16' },
    to: '/states',
  },
  {
    title: 'show',
    icon: { name: 'ic:round-lock-person', size: '16' },
    to: '/states/show',
  }
])

</script>

<template>
  <div>
    <div class="w-max my-3">
      <Breadcrumb :links="links" />
    </div>
    <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 overflow-hidden py-5 dark:bg-[#2F3349FF]">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg dark:text-gray-400">
          <thead class="bg-gray-50 dark:bg-[#2f2b3d49] text-xs text-gray-700  uppercase dark:text-gray-400">
            <tr>
              <th scope="col"
                  class="p-2 border border-gray-700 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                Раздел
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Подразделения') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Должность') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Воинское звание') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('01') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('51') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Должностной оклад') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('ВУС') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Код подразделения') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Код первой должности') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Код второй должности') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Код воинского звания') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Код порядкового номера в штате') }}
              </th>
            </tr>
          </thead>
          <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
          <tr v-for="(item, index) in state" :key="index" class="bg-gray-100 odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
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

</style>
