<script setup lang="ts">
definePageMeta({
  middleware: ['ability']
})

import { Breadcrumb } from '#components';
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite()
})

const links = ref([
  {
    title: 'permissions',
    icon: { name: 'arcticons:permissionchecker', size: '16' },
    to: '/permissions',
  }
])

</script>

<template>
  <div>
    <div class="w-max my-3">
      <Breadcrumb :links="links" />
    </div>
    <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 overflow-hidden p-1 dark:bg-[#2F3349FF]">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="bg-gray-50 dark:bg-[#2f2b3d49] text-xs text-gray-700  uppercase dark:text-gray-400">
            <tr>
              <th scope="col"
                class="p-2 border border-gray-700 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                #
              </th>
              <th scope="col"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('user-name') }}
              </th>
              <th scope="col"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('email-address') }}
              </th>
              <th scope="col"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                {{ $t('user-roles') }}
              </th>
              <th scope="col"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-[#2F3349FF]">
        <form>
          <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
              <input type="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
          </div> 
          
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>