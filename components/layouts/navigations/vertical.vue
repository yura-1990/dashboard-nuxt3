<template>
  <div @mouseenter="onHovering(true)" @mouseleave="onHovering(false)"
    class="h-screen bg-slate-50 shadow-xl relative overflow-y-auto overflow-x-hidden duration-100 hover:ease-in dark:bg-[#2F3349FF]"
    :class="openClose ? 'w-[5rem] hover:w-[18.625rem]' : 'w-[18.625rem]'"
  >
    <div class=" w-[15.625rem] absolute top-0 left-0 ">
      <ul class="h-[3.75rem] flex items-center px-5 justify-between ">
        <li class="w-[2.125rem]">
          <NuxtImg class="w-[2.125rem] " src="assets/logo.svg"/>
        </li>
        <li><div class="text-3xl">Vuexy</div></li>
        <li><NuxtImg class="w-5 h-5" @click="handleOpenCloseNavbar" :src="openClose ? 'assets/close.svg' : 'assets/open.svg'"/></li>
      </ul>
      <div class="px-2">
        <LayoutsNavigationsVerticalList :children="verticalNavigation" :hovering="hovering" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { vertical } from '~/navigations/vertical/vertical'
  import { useAuthStore } from '~/store/useAuthStore'
  import { storeToRefs } from 'pinia';
  const { error, permissions } = storeToRefs(useAuthStore());
  const openClose = ref<boolean>(false)

  const verticalNavigation = computed(()=> {
    return vertical().filter(route => checkPermissions(route));
  })
  function checkPermissions(route: { title: string; icon: { name: string; size: string; }; permissions: string[]; children: ({ title: string; icon: { name: string; size: string; }; permissions: string[]; children: { title: string; icon: { name: string; size: string; }; to: { name: string; target: string; }; permissions: string[]; }[]; to?: undefined; } | { title: string; icon: { name: string; size: string; }; to: { name: string; }; permissions: string[]; children?: undefined; })[]; to?: undefined; } | { title: string; icon: { name: string; size: string; }; to: { name: string; }; permissions: string[]; children?: undefined; }) {
    if (route.permissions) {
      for (let permission of route.permissions) {
        if (!permissions.value.includes(permission)) {
          return false;
        }
      }
    }
    if (route.children) {
      route.children = route.children.filter(childRoute => checkPermissions(childRoute));
      return route.children.length > 0;
    }

    return true;
  }

  const hovering = ref<boolean>(true)

  onMounted(()=>{
    if (localStorage.getItem('navbar')) {
      openClose.value = JSON.parse(localStorage.getItem('navbar') || '{}')
    }

    if (localStorage.getItem('hovering')) {
      hovering.value = JSON.parse(localStorage.getItem('hovering') || '{}')
    }

    localStorage.setItem('navbar', JSON.stringify(openClose.value))
    localStorage.setItem('hovering', JSON.stringify(hovering.value))
  })

  const handleOpenCloseNavbar = () => {
    openClose.value = !openClose.value
    localStorage.setItem('navbar', JSON.stringify(openClose.value))
  }

  const onHovering = (check:boolean) => {
    if (! openClose.value) {
      hovering.value = true
    } else {
      hovering.value = check
    }

    localStorage.setItem('hovering', JSON.stringify(hovering.value))
  }


</script>

<style>

</style>
