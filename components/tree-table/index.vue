<script setup lang="ts">
import {ref} from "vue";
defineProps({
  children: {
    type: Object,
    require: true
  }
})

const toggleTable = ref(false)

</script>

<template>
  <template v-for="(item, index) in children" :key="index">
    <tr class=" border-b dark:border-gray-600" :class="item.children.length > 0 ? 'dark:bg-[#2D2D38FF] bg-[#98986DFF]' : 'dark:bg-[#1F1F23FF] bg-white'">
      <td class="p-2 text-md  font-normal text-black whitespace-nowrap border border-gray-700 dark:text-white">
        <div @click="toggleTable = !toggleTable" class="flex items-center">
          <span class="font-semibold">{{ item.parent.id }}</span>
          <template v-if="item.children.length > 0">
            <Icon name="system-uicons:chevron-open" size="20"/>
          </template>
        </div>
      </td>
      <td class="p-2 text-lg font-normal text-gray-900 font-medium border border-gray-700 whitespace-nowrap dark:text-white">
        {{ item.parent.code }}
      </td>
      <td class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
        {{ item.parent.military_personnel_under_contract }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.listeners }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.conscripts }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.cadets }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.group_number_receiving_payments }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.name_of_payment }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.abbreviated_name }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.calculation_method }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.calculation_method_according_to_payout_codes }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.payment_period }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.payment_with_concrete_period }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.personal_income_tax }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.social_tax }}
      </td>
      <td class="p-2 text-lg font-normal border border-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
        {{ item.parent.alimony }}
      </td>
      <td class=" p-2 font-normal dark:text-white border border-gray-700 whitespace-nowrap dark:text-white">
        <div class="flex justify-end gap-2 items-center">
            <button >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4l-4 4l1.4 1.4l1.6-1.55zm-6 5V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zM7 6v13z" />
              </svg>
            </button>

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15">
                <path fill="currentColor"
                      d="m.5 7.5l-.464-.186a.5.5 0 0 0 0 .372zm14 0l.464.186a.5.5 0 0 0 0-.372zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.368 9.368 0 0 1-1.449-2.164a5.065 5.065 0 0 1-.08-.18l-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004a2.107 2.107 0 0 0 .026.063l.078.173a10.368 10.368 0 0 0 1.61 2.406C2.94 11.653 4.814 13 7.5 13zm-7-4.5l.464.186l.004-.008a2.62 2.62 0 0 1 .08-.18a9.368 9.368 0 0 1 1.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.367 10.367 0 0 0-1.61 2.406a6.05 6.05 0 0 0-.104.236l-.002.004v.001H.035zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.37 9.37 0 0 1 1.449 2.164a4.705 4.705 0 0 1 .08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004a.656.656 0 0 0-.026-.063a9.094 9.094 0 0 0-.39-.773a10.365 10.365 0 0 0-1.298-1.806C12.06 3.348 10.186 2 7.5 2zm7 4.5a68.887 68.887 0 0 1-.464-.186l-.003.008l-.015.035l-.066.145a9.37 9.37 0 0 1-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.366 10.366 0 0 0 1.61-2.407a6.164 6.164 0 0 0 .104-.236l.002-.004v-.001h.001zM7.5 9A1.5 1.5 0 0 1 6 7.5H5A2.5 2.5 0 0 0 7.5 10zM9 7.5A1.5 1.5 0 0 1 7.5 9v1A2.5 2.5 0 0 0 10 7.5zM7.5 6A1.5 1.5 0 0 1 9 7.5h1A2.5 2.5 0 0 0 7.5 5zm0-1A2.5 2.5 0 0 0 5 7.5h1A1.5 1.5 0 0 1 7.5 6z" />
              </svg>
            </button>
            <button >
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
            <button >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M6.286 8.571L7.429 20h9.142l1.143-11.429M13.5 15.5v-5m-3 5v-5M4.571 6.286h4.572m0 0l.382-1.529a1 1 0 0 1 .97-.757h3.01a1 1 0 0 1 .97.757l.382 1.529m-5.714 0h5.714m0 0h4.572" />
              </svg>
            </button>
        </div>
      </td>
    </tr>
    <template v-if="item.children && toggleTable">
      <TreeTable :children="item.children" />
    </template>
  </template>
</template>

<style scoped>
  .fff{
    color: rgba(1, 1, 14, 0.58);
    background: #9593c7;
  }
</style>
