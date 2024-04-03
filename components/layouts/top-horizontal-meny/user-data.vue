<script setup lang="ts">
import { useAuthStore } from '~/store/useAuthStore';
const { userData, logUserOut } = useAuthStore()
const router = useRouter();
import { initFlowbite } from 'flowbite'

onMounted(()=>initFlowbite())

const logout = () => {
  logUserOut()
  router.push('/auth/login/')
}

</script>

<template>
    <div class="flex items-center ml-3">
      <div>
        <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
        </button>
      </div>

      <div class="z-50 my-4 mt-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-[#2F3349FF] shadow-lg dark:divide-gray-500 hidden" id="dropdown-2"
        style="position: absolute; top:50px; inset: 0 auto auto 0; transform: translate(1514px, 61px);"
        data-popper-placement="bottom"
      >
        <div class="px-4 py-3" role="none">
          <p class="text-sm text-gray-900 dark:text-white" role="none">
            {{ userData.name }}
          </p>
          <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
            {{ userData.email }}
          </p>
        </div>
        <ul class="py-1" role="none">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
          </li>
          <li>
            <button @click="logout" class="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</button>
          </li>
        </ul>
      </div>
    </div>

</template>

<style>

</style>

