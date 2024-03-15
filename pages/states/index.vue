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
  console.log(stateLists.value)
})

async function getOneState(id: number){
  await getStateByID(id)
  await router.push('/states/show')
}


const links = ref([
  {
    title: 'states',
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
    <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 overflow-hidden py-5 dark:bg-[#2F3349FF]">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg dark:text-gray-400">
          <thead class="bg-gray-50 dark:bg-[#2f2b3d49] text-xs text-gray-700  uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="p-2 border border-gray-700 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                № п/п
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('№ штата') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Источник финансирование') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Uuid штата') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Воинской часть') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Военной округ') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Номер принята директивы') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Дата принята директивы') }}
              </th>
              <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Номер отмены директивы') }}
              </th>
              <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('Дата отмены директивы') }}
              </th>
            </tr>
          </thead>
          <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
            <tr v-for="(item, index) in stateLists" :key="index" @click="getOneState(item.id)" class="bg-gray-100 cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
