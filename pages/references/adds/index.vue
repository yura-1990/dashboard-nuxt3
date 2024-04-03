<script setup lang="ts">
import { useImportsStore } from "~/store/useImportsStore";
import {ref} from "vue";
import {reloadNuxtApp} from "#app";
import {useCookie} from "nuxt/app";

const token = useCookie("token")
const { importFile } = useImportsStore()
const form = ref({
  import_name: '',
  import: null
})

async function submit(){
  const { data } = await useFetch('/api/create', {
    method: 'post',
    body: {
      fileName: form.value.import_name,
      importFile: form.value.import,
      token: token.value
    }
  })

  if (data.value?.status){
    await importFile(form.value)
    reloadNuxtApp({ path: `/references/${form.value.import_name.trim()}`})
  }
}

function uploadFile(e: any){
  form.value.import = e.target.files[0]
}

</script>

<template>
  <div class="mt-4">
    <form class="flex flex-col gap-5" @submit.prevent="submit" >
      <input type="text" v-model="form.import_name" :placeholder="$t('reference name')" class="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg dark:hover:bg-[#272433FF] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#2F2B3DFF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-[#272433FF] dark:bg-[#2F2B3DFF] hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">EXCEL</p>
          </div>
          <input id="dropzone-file" @change="uploadFile" type="file" class="hidden" />
        </label>
      </div>

      <button type="submit"  class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>
