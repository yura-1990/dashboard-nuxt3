<script setup lang="ts">
definePageMeta({
  middleware: ['ability']
})
import { useToast } from "#imports";
import { storeToRefs } from 'pinia';
import { useUserListStore, type UserCreateInterface } from '~/store/useUserListStore'
import { onMounted } from "vue"
import { useRolesStore } from "~/store/useRolesStore"
import { useAuthStore } from '~/store/useAuthStore';
import { initFlowbite } from 'flowbite'
import { useRouter } from 'vue-router'

const router = useRouter()
const { locale } = useI18n()
const { userLists, error } = storeToRefs(useUserListStore());
const { permissions } = storeToRefs(useAuthStore());
const { getUserList, createUser, updateUsers, deleteUsers, getTrashedUsers, restoreUsers, restoreAllUsers, getOneUser } = useUserListStore()
const { roleLists } = storeToRefs(useRolesStore())
const { getRoleList } = useRolesStore()
const toggleModal = ref(false)
const toggleTrash = ref(false)
const links = ref([
  {
    title: 'users',
    icon: { name: 'nimbus:user-group', size: '16' },
    to: '/users',
  }
])
const togglePassword = ref({
  password: false,
  password_confirm: false
})
const toast = useToast()
const page = ref<number>(1);
const method = ref('create')
const form = ref<UserCreateInterface>({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  roles: [],
  id: null
})

onMounted(async () => {
  if (Object.keys(userLists.value).length === 0){
    await getUserList(page.value)
  }

  if (roleLists.value.length === 0){
    await getRoleList()
  }
  initFlowbite();
})

function handleShowModal(meth: any) {
  toggleModal.value = !toggleModal.value
  method.value = meth
  if (toggleModal.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

function outsideClick(e: { target: any; currentTarget: any; }) {
  if (e.target === e.currentTarget) {
    toggleModal.value = !toggleModal.value

    if (toggleModal.value) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
}

function handleHideModal() {
  toggleModal.value = false
}

async function submit(e: any) {

  if (method.value === 'update') {
    await updateUsers(form.value)
    toast.add({ title: 'User updated successfully' })
  } else {
    await createUser(form.value)
    toast.add({ title: 'User created successfully' })
  }

  if (!error.value) {
    toggleModal.value = false
    document.body.classList.remove('overflow-hidden')
    await getUserList(page.value)

    form.value = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      roles: [],
      id: null
    }
  }
}

async function showUser(id: number) {
  await getOneUser(id)
  await router.push('/users/show')
}

function updateUser(user: any) {
  handleShowModal('update')
  form.value = {
    name: user.name,
    email: user.email,
    password: '',
    password_confirmation: '',
    roles: user.roles.map((el: { id: any; }) => el.id),
    id: user.id
  }
}

async function deleteUser(user: { id: number }) {
  if (confirm('Are you sure to delete ?')) {
    await deleteUsers(user.id)
    await getUserList(page.value)
    toast.add({ title: 'User deleted successfully' })
  }
}

async function handleTrashedUsers() {
  toggleTrash.value = !toggleTrash.value

  if (toggleTrash.value) {
    await getTrashedUsers()
    if (! (userLists.value.data.length > 0)) {
      toast.add({ title: 'No users in trash' })
      await getUserList(page.value)
      toggleTrash.value = false
    }
  } else {
    await getUserList(page.value)
  }
  initFlowbite();
}


async function restoreUser(id: number) {
  if (userLists.value.data.length > 1) {
    await restoreUsers(id)
    await getTrashedUsers(page.value)
  } else {
    await restoreUsers(id)
    await getUserList(page.value)
    toggleTrash.value = false
  }
  toast.add({ title: 'User restored successfully' })
}

async function restoreAll() {
  await restoreAllUsers()
  toast.add({ title: 'All users restored successfully' })
  await getUserList(page.value)
  toggleTrash.value = false
}

async function changePage(p: number){
  if (toggleTrash.value){
    await getTrashedUsers(p)
  } else {
    page.value = p
    await getUserList(page.value)
  }
}

async function prevNextPage(url: any){
  const urlParams = new URLSearchParams(new URL(url).search);
  const pageNumber: any = urlParams.get('page');

  if (!toggleTrash.value){
    page.value = parseInt(pageNumber)
    await getUserList(page.value)
  } else {
    await getTrashedUsers(parseInt(pageNumber))
  }

}

</script>

<template>
  <div>
    <!-- Table -->
    <div class="flex flex-col">
      <div class="overflow-x-auto rounded-lg">
        <div class="inline-block min-w-full align-middle">
          <div class=" my-3 flex items-center justify-between">
            <div>
              <Breadcrumb :links="links" />
            </div>
            <!-- Modal toggle -->
            <div class="flex gap-2 items-center">
              <div v-if="toggleTrash">
                <button data-tooltip-target="tooltip-restore-all" @click="restoreAll" type="button"
                  v-if="permissions?.find((el) => el === 'Restore All Users') && permissions?.find((el) => el === 'Restore Users')"
                  class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M7 .5A6.5 6.5 0 1 1 .5 7a7.23 7.23 0 0 1 2-5" />
                      <path d="m.5 2.5l2-.5l.5 2m4-.5v4l2.6 1.3" />
                    </g>
                  </svg>
                </button>

                <div id="tooltip-restore-all" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white backdrop-blur-8 transition-opacity duration-300 active-link rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Restore all
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <div>
                <button data-tooltip-target="tooltip-trash" @click="handleTrashedUsers" type="button"
                  v-if="permissions?.find((el) => el === 'Trashed Users')"
                  class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
                  <svg v-if="!toggleTrash" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74m7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"/><path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>
                </button>
                <div id="tooltip-trash" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white backdrop-blur-8 transition-opacity duration-300 active-link rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Trash Lists
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <div>
                <button data-tooltip-target="tooltip-create" @click="handleShowModal('create')" type="button"
                  v-if="permissions?.find((el) => el === 'Create Users')"
                  class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                      d="M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8M373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.8-1.7-203.2 89.2-203.2 200c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.8-1.1 6.4-4.8 5.9-8.8M824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200m-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c-.1 34.2-13.4 66.3-37.6 90.5" />
                  </svg>
                </button>

                <div id="tooltip-create" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white backdrop-blur-8 transition-opacity duration-300 active-link rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Create a new user
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <!-- Main modal -->
            <div @click="outsideClick" :class="toggleModal ? 'flex ' : 'hidden'"
              class="overflow-y-auto bg-[#01010E94] overflow-x-hidden backdrop-blur fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%+16px)] max-h-full">
              <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-lg dark:bg-[#2F3349FF]">
                  <!-- Modal header -->
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      {{ $t('create-new-user') }}
                    </h3>
                    <button @click="handleHideModal" type="button" id="close-button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div v-if="error" class="p-3 md:p-2">
                    <div class="flex p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert">
                      <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span class="sr-only">Danger</span>
                      <div>
                        <span class="font-medium">Ensure that these requirements are met:</span>
                        <ul class="mt-1.5 list-disc list-inside">
                          <li v-for="(item, index) in error" :key="index">{{ item }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Modal body -->
                  <form @submit.prevent="submit" class="max-w-sm py-4 mx-auto">
                    <div class="mb-5">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('name') }} *</label>
                      <input type="text" v-model="form.name" id="name"
                        class="shadow-sm bg-gray-50  text-gray-900 text-sm border border-gray-300 focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-[#2F3349FF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:shadow-sm-light"
                        placeholder="name@flowbite.com" />
                    </div>

                    <div class="mb-5">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('email') }}</label>
                      <input type="email" v-model="form.email" id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#2F3349FF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com" />
                    </div>

                    <div class="mb-5 relative">
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('password') }}</label>
                      <input :type="!togglePassword.password ? 'password' : 'text'" v-model="form.password"
                        id="password"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#2F3349FF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                      <button type="button" @click="togglePassword.password = !togglePassword.password"
                        class="absolute top-[34px] right-2 ">
                        <svg v-if="togglePassword.password" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                          viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M12 16q1.875 0 3.188-1.312T16.5 11.5q0-1.875-1.312-3.187T12 7q-1.875 0-3.187 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5q0-1.125.788-1.912T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4q3.65 0 6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6Q9.175 6 6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="m16.1 13.3l-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.425-.2.863-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15l-1.45-1.4q.95-.725 1.688-1.587T20.8 11.5q-1.25-2.525-3.588-4.012T12 6q-.725 0-1.425.1T9.2 6.4L7.65 4.85q1.025-.425 2.1-.638T12 4q3.775 0 6.725 2.087T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m.5 6.15l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.5 0 .975-.062t.975-.138l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525zm4.2 4.2" />
                        </svg>
                      </button>
                    </div>

                    <div class="mb-5 relative">
                      <label for="repeat-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('repeat-password') }}</label>
                      <input :type="!togglePassword.password_confirm ? 'password' : 'text'"
                        v-model="form.password_confirmation" id="repeat-password"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#2F3349FF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                      <button type="button"
                        @click="togglePassword.password_confirm = !togglePassword.password_confirm"
                        class="absolute top-[34px] right-2 ">
                        <svg v-if="togglePassword.password_confirm" xmlns="http://www.w3.org/2000/svg" width="32"
                          height="32" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M12 16q1.875 0 3.188-1.312T16.5 11.5q0-1.875-1.312-3.187T12 7q-1.875 0-3.187 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5q0-1.125.788-1.912T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4q3.65 0 6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6Q9.175 6 6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="m16.1 13.3l-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.425-.2.863-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15l-1.45-1.4q.95-.725 1.688-1.587T20.8 11.5q-1.25-2.525-3.588-4.012T12 6q-.725 0-1.425.1T9.2 6.4L7.65 4.85q1.025-.425 2.1-.638T12 4q3.775 0 6.725 2.087T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m.5 6.15l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.5 0 .975-.062t.975-.138l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525zm4.2 4.2" />
                        </svg>
                      </button>
                    </div>

                    <div class="mb-5">
                      <label for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your
                        country</label>
                      <select id="countries" v-model="form.roles" multiple
                        class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-10 focus:ring-blue-500 focus:border-blue-500  dark:bg-[#2F3349FF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="(item, index) in roleLists " :selected="form.roles.find(el => el === item.id)"
                          :key="index" :value="item.id">
                          {{ item.descriptions[locale] }}</option>
                      </select>
                    </div>

                    <div class="flex items-start mb-5">
                      <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" value=""
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required />
                      </div>
                      <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                      </label>
                    </div>
                    <button type="submit"
                      class="text-white active-link focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                      {{ $t('register-new-user') }}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-hidden bg-white shadow p-1 sm:rounded-lg dark:bg-[#2F3349FF]">
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
              <tbody
                class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
                <tr v-for="(item, index) in userLists.data" :key="index"
                  class="bg-gray-100 odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
                  <td
                    class="p-2 text-md font-normal text-black whitespace-nowrap border border-gray-700 dark:text-white">
                    <span class="font-semibold">{{ item.id }}</span>
                  </td>
                  <td
                    class="p-2 text-lg font-normal text-black font-medium border border-gray-700 whitespace-nowrap dark:text-white">
                    {{ item.name }}
                  </td>
                  <td
                    class="p-2 text-lg font-normal text-gray-900 whitespace-nowrap border border-gray-700 dark:text-white">
                    {{ item.email }}
                  </td>
                  <td
                    class="p-2 text-lg font-normal border border-gray-700 text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <select id="small"
                      class="block w-full p-2 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-10 focus:ring-blue-500 focus:border-blue-500  dark:bg-[#2F2B3DFF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option v-for="(it, i) in item.roles" :key="i">{{ it?.descriptions[locale] }}</option>
                    </select>
                  </td>
                  <td
                    class=" p-2 font-normal dark:text-white border border-gray-700 whitespace-nowrap text-[#2F2B3DFF]">
                    <div class="flex justify-end gap-2 items-center">
                      <template v-if="item.deleted_at">
                        <button v-if="permissions?.find((el) => el === 'Restore Users') && permissions?.find((el) => el === 'Restore All Users')" type="button" @click="restoreUser(item.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                              d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4l-4 4l1.4 1.4l1.6-1.55zm-6 5V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zM7 6v13z" />
                          </svg>
                        </button>
                      </template>

                      <template v-else>
                        <button @click="showUser(item.id)" v-if="permissions?.find((el) => el === 'Show Users')">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15">
                            <path fill="currentColor"
                              d="m.5 7.5l-.464-.186a.5.5 0 0 0 0 .372zm14 0l.464.186a.5.5 0 0 0 0-.372zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.368 9.368 0 0 1-1.449-2.164a5.065 5.065 0 0 1-.08-.18l-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004a2.107 2.107 0 0 0 .026.063l.078.173a10.368 10.368 0 0 0 1.61 2.406C2.94 11.653 4.814 13 7.5 13zm-7-4.5l.464.186l.004-.008a2.62 2.62 0 0 1 .08-.18a9.368 9.368 0 0 1 1.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.367 10.367 0 0 0-1.61 2.406a6.05 6.05 0 0 0-.104.236l-.002.004v.001H.035zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.37 9.37 0 0 1 1.449 2.164a4.705 4.705 0 0 1 .08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004a.656.656 0 0 0-.026-.063a9.094 9.094 0 0 0-.39-.773a10.365 10.365 0 0 0-1.298-1.806C12.06 3.348 10.186 2 7.5 2zm7 4.5a68.887 68.887 0 0 1-.464-.186l-.003.008l-.015.035l-.066.145a9.37 9.37 0 0 1-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.366 10.366 0 0 0 1.61-2.407a6.164 6.164 0 0 0 .104-.236l.002-.004v-.001h.001zM7.5 9A1.5 1.5 0 0 1 6 7.5H5A2.5 2.5 0 0 0 7.5 10zM9 7.5A1.5 1.5 0 0 1 7.5 9v1A2.5 2.5 0 0 0 10 7.5zM7.5 6A1.5 1.5 0 0 1 9 7.5h1A2.5 2.5 0 0 0 7.5 5zm0-1A2.5 2.5 0 0 0 5 7.5h1A1.5 1.5 0 0 1 7.5 6z" />
                          </svg>
                        </button>
                        <button @click="updateUser(item)" v-if="permissions?.find((el) => el === 'Update Users')">
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
                        <button @click="deleteUser(item)" v-if="permissions?.find((el) => el === 'Delete Users')">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M6.286 8.571L7.429 20h9.142l1.143-11.429M13.5 15.5v-5m-3 5v-5M4.571 6.286h4.572m0 0l.382-1.529a1 1 0 0 1 .97-.757h3.01a1 1 0 0 1 .97.757l.382 1.529m-5.714 0h5.714m0 0h4.572" />
                          </svg>
                        </button>
                      </template>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Card Footer -->
    <div class="flex items-center justify-center pt-1 sm:pt-2">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-sm">
          <li>
            <button :disabled="!userLists['prev_page_url']" :key="5" @click="prevNextPage(userLists['prev_page_url'])"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-black dark:bg-[#2F2B3DFF] dark:border-gray-700 dark:text-white dark:hover:bg-[#2F3349FF] dark:hover:text-white">
              &laquo; {{ $t('previous') }}
            </button>
          </li>
          <li v-for="page in userLists['last_page']" :key="page">
            <button @click="changePage(page)"
              :class="userLists['current_page'] === page ? 'active-link text-white' : 'text-black'"
              class="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-black dark:bg-[#2F2B3DFF] dark:border-gray-700 dark:text-white dark:hover:bg-[#2F3349FF] dark:hover:text-white">
              {{ page }}
            </button>
          </li>
          <li>
            <button :disabled="!userLists['next_page_url']" :key="6" @click="prevNextPage(userLists['next_page_url'])"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#2F2B3DFF] dark:border-gray-700 dark:text-white dark:hover:bg-[#2F3349FF] dark:hover:text-white">
              {{ $t('next') }} &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<style scoped>
.ff {
  color: #2f2b3d;
  color: rgba(115, 103, 240, 0.84);
}
</style>
