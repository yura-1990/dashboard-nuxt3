<script setup lang="ts">
definePageMeta({
  middleware: ['ability']
})

import { Breadcrumb } from '#components';
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';
import { useRolesStore } from "~/store/useRolesStore";
import { usePermissionsStore } from "~/store/usePermissionsStore";
import { storeToRefs } from 'pinia';

const { roleLists, error } = storeToRefs(useRolesStore())
const { permissionLists } = storeToRefs(usePermissionsStore())
const { getRoleList, createRole } = useRolesStore()
const { getPermissionList } = usePermissionsStore()
const { locale, locales } = useI18n()

const roleForm = ref({
  descriptions: locales.value.reduce((acc, curr) => {
    return { ...acc, [curr.code]: '' }
  }, {}),
  permissions: []
})

onMounted(async () => {
  initFlowbite()
  await getRoleList()
  await getPermissionList()
})

async function createRoles(){
  console.log(roleForm.value)
  await createRole(roleForm.value.descriptions, roleForm.value.permissions  )
  await getRoleList()
  roleForm.value = {
    descriptions: locales.value.reduce((acc, curr) => {
      return { ...acc, [curr.code]: '' }
    }, {}),
    permissions: []
  }
}


const links = ref([
  {
    title: 'roles',
    icon: { name: 'ic:round-lock-person', size: '16' },
    to: '/roles',
  }
])

</script>

<template>
  <div>
    <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 relative">
      <div class=" 2xl:col-span-2 relative">
        <div class="my-3 flex sticky top-[-5px] z-50 justify-between items-center">
          <Breadcrumb :links="links" />

          <div class="flex items-center gap-3">
            <div>
              <button data-tooltip-target="tooltip-restore-all" type="button"
                      class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 .5A6.5 6.5 0 1 1 .5 7a7.23 7.23 0 0 1 2-5" />
                    <path d="m.5 2.5l2-.5l.5 2m4-.5v4l2.6 1.3" />
                  </g>
                </svg>
              </button>

              <div id="tooltip-restore-all" role="tooltip"
                   class="absolute z-10 invisible inline-block px-5 py-3 text-sm font-medium text-white backdrop-blur-8 transition-opacity duration-300 active-link rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Restore all
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>

            <div>
              <button data-tooltip-target="tooltip-trash" type="button"
                      class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:focus:ring-blue-800">
                <svg v-if="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74m7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"/><path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>
              </button>
              <div id="tooltip-trash" role="tooltip"
                   class="absolute z-10 invisible inline-block px-5 py-3 text-sm font-medium text-white backdrop-blur-8 transition-opacity duration-300 active-link rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Trash Lists
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>

        </div>
        <div class="dark:bg-[#2F3349FF] sticky top-[65px] bg-white border border-gray-500 rounded-lg shadow-sm dark:border-gray-500 overflow-hidden p-1">
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
                {{ $t('permissions') }}
              </th>
              <th scope="col"
                  class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
              </th>
            </tr>
            </thead>
            <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
            <tr v-for="(item, index) in roleLists" :key="index"
                class="bg-gray-100 odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600"
            >
              <td class="p-2 text-md font-normal text-black whitespace-nowrap border border-gray-700 dark:text-white">
                <span class="font-semibold">{{ item.id }}</span>
              </td>
              <td class="p-2 text-lg font-normal text-black font-medium border border-gray-700 whitespace-nowrap dark:text-white">
                <div v-for="(it,i) in locales" :key="it.code" class="flex items-center gap-2">
                  <label  class="w-10 capitalize" :for="it.code">{{ it.code }}</label>
                  <input type="text"
                         :id="it.code"
                         class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#2F2B3DFF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="John"
                         :value="item.descriptions[it.code]"
                  />
                </div>

              </td>
              <td
                  class="p-2 text-lg font-normal border border-gray-700 text-gray-500 whitespace-nowrap dark:text-gray-400">
                <select id="small" multiple
                        class="block w-full h-[200px] p-2 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-10 focus:ring-blue-500 focus:border-blue-500  dark:bg-[#2F2B3DFF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="(it, i) in permissionLists" 
                          :key="i" 
                          :value="it.id" 
                          :selected="item.permissions.find(el => el.name === it.name)"
                  >
                  {{ it.descriptions[locale]  }}
                  </option>
                </select>
              </td>
              <td
                  class=" p-2 font-normal dark:text-white border border-gray-700 whitespace-nowrap text-[#2F2B3DFF]">
                <div class="flex-col flex justify-center gap-2 items-center">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15">
                      <path fill="currentColor"
                            d="m.5 7.5l-.464-.186a.5.5 0 0 0 0 .372zm14 0l.464.186a.5.5 0 0 0 0-.372zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.368 9.368 0 0 1-1.449-2.164a5.065 5.065 0 0 1-.08-.18l-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004a2.107 2.107 0 0 0 .026.063l.078.173a10.368 10.368 0 0 0 1.61 2.406C2.94 11.653 4.814 13 7.5 13zm-7-4.5l.464.186l.004-.008a2.62 2.62 0 0 1 .08-.18a9.368 9.368 0 0 1 1.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.367 10.367 0 0 0-1.61 2.406a6.05 6.05 0 0 0-.104.236l-.002.004v.001H.035zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.37 9.37 0 0 1 1.449 2.164a4.705 4.705 0 0 1 .08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004a.656.656 0 0 0-.026-.063a9.094 9.094 0 0 0-.39-.773a10.365 10.365 0 0 0-1.298-1.806C12.06 3.348 10.186 2 7.5 2zm7 4.5a68.887 68.887 0 0 1-.464-.186l-.003.008l-.015.035l-.066.145a9.37 9.37 0 0 1-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.366 10.366 0 0 0 1.61-2.407a6.164 6.164 0 0 0 .104-.236l.002-.004v-.001h.001zM7.5 9A1.5 1.5 0 0 1 6 7.5H5A2.5 2.5 0 0 0 7.5 10zM9 7.5A1.5 1.5 0 0 1 7.5 9v1A2.5 2.5 0 0 0 10 7.5zM7.5 6A1.5 1.5 0 0 1 9 7.5h1A2.5 2.5 0 0 0 7.5 5zm0-1A2.5 2.5 0 0 0 5 7.5h1A1.5 1.5 0 0 1 7.5 6z" />
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="1.5">
                        <path
                            d="M9.533 11.15A1.823 1.823 0 0 0 9 12.438V15h2.578c.483 0 .947-.192 1.289-.534l7.6-7.604a1.822 1.822 0 0 0 0-2.577l-.751-.751a1.822 1.822 0 0 0-2.578 0z" />
                        <path
                            d="M21 12c0 4.243 0 6.364-1.318 7.682C18.364 21 16.242 21 12 21c-4.243 0-6.364 0-7.682-1.318C3 18.364 3 16.242 3 12c0-4.243 0-6.364 1.318-7.682C5.636 3 7.758 3 12 3" />
                      </g>
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M6.286 8.571L7.429 20h9.142l1.143-11.429M13.5 15.5v-5m-3 5v-5M4.571 6.286h4.572m0 0l.382-1.529a1 1 0 0 1 .97-.757h3.01a1 1 0 0 1 .97.757l.382 1.529m-5.714 0h5.714m0 0h4.572" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="p-4 bg-white border border-gray-200 mt-4 rounded-lg min-h-80 shadow-sm dark:border-gray-700 sm:p-6 dark:bg-[#2F3349FF]">
        <form>
          <div class="mb-6">
            <div v-for="(item, index) in locales" :key="index" class="flex items-center gap-2" >
              <label class="w-10 capitalize" :for="item.iso">{{ item.code }}</label>
              <input type="text"
                     :id="item.iso"
                     class="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#2F2B3DFF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Add role"
                     required
                     v-model="roleForm.descriptions[item.code]"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center" v-for="(item, index) in permissionLists" :key="index">
              <input :id="item.name.split(' ').join('_')"
                     type="checkbox"
                      v-model="roleForm.permissions"
                     :value="item.id"
                     class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label :for="item.name.split(' ').join('_')" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ item.descriptions[locale] }}</label>
            </div>
          </div>
          <div class="flex justify-end">
            <button data-tooltip-target="tooltip-create"  @click="createRoles" type="button" class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M6 8.256L24.009 3L42 8.256v10.778A26.316 26.316 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z"/><path stroke-linecap="round" d="M23.95 14.95v16m-8-8h16"/></g></svg>
            </button>

            <div id="tooltip-create" role="tooltip"
                 class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white backdrop-blur-8 transition-opacity duration-300 active-link rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Create a new role
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
