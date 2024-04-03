import path from 'node:path'
import os from 'node:os'
import fs from 'node:fs'

export default function createFile(fileName: string){
    const folderPath = path.join(os.homedir(), `../../opt/dashboard-nuxt/dashboard-nuxt3/pages/references/${fileName}`);
    const vueFilePath = path.join(folderPath, `index.vue`);
    const vueFileContent = `<script setup lang="ts">
 import {onMounted, ref} from 'vue';
 import {useRoute} from "vue-router";
 import {useCookie, useFetch} from "nuxt/app";

 const token = useCookie("token")
 const route = useRoute()
 const importedData = ref<Object[]>()
 const importedColumn = ref<Object[]>()


onMounted(async () => {
  const { data, status } = await useFetch('/api/importFile', {
    method: 'post',
    body: {
      fileName: route.path.split('/')[route.path.split('/').length - 1],
      token: token.value
    },
  })

  importedData.value = await data.value?.data
  importedColumn.value = await data.value?.columns
})

const links = ref([
 {
   title: 'references',
   icon: { name: 'codicon:references', size: '16' },
   to: '/references/lists',
 },
 {
   title: route.path.split('/')[route.path.split('/').length - 1],
   icon: { name: 'material-symbols:lists-rounded', size: '16' },
   to: route.path,
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
            <th v-for="(item, index) in importedColumn" scope="col" data-tooltip-target="tooltip-top1" data-tooltip-placement="top"
                class="p-2 border  border-gray-700 text-xs font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              {{ item }}
            </th>

            <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white"></th>
          </tr>
          </thead>
          <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
          <tr v-for="(item, index) in importedData" :key="index"  class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td v-for="(it, i) in importedColumn" class="p-2 text-md font-normal text-wrap text-black whitespace-nowrap border border-gray-700 dark:text-white">
              {{ item[it] }}
            </td>
            <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
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

</style>
`;

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, {recursive: true});
    }

    fs.writeFileSync(vueFilePath, vueFileContent);

    return fs.existsSync(vueFilePath);
}
