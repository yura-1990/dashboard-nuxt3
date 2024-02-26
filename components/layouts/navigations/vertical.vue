<template>
  <div @mouseenter="onHovering(true)" @mouseleave="onHovering(false)" class="h-screen relative bg-slate-50 shadow-xl overflow-y-auto overflow-x-hidden duration-100 hover:ease-in dark:bg-[#475173] z-50"
    :class="openClose ? 'w-[5rem] hover:w-[15.625rem]' : 'w-[15.625rem]'"
  >
    <div class=" absolute w-[15.625rem] top-0 left-0">
      <ul class="h-[3.75rem] flex items-center px-5 justify-between">
        <li class="w-[2.125rem] flex">
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
  import { vertical } from '../../../navigations/vertical/vertical'

  const openClose = ref<boolean>(false)
  const verticalNavigation = computed(()=>vertical())
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
