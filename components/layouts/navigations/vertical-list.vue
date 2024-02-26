<template>
  <div v-for="(item, index) in props.children" :key="index" > 
    <ULink 
      :to="item.to" 
      class="flex items-center gap-3 mb-1 py-2 pl-4 pr-3 w-full rounded "
      :class="acticeClass === item.title ? 'bg-[#8692d00f]' : 'bg-transparent'"
      active-class="active-link  "
      inactive-class="text-gray-500 dark:text-gray-400 hover:bg-[#8692d00f] hover:text-gray-700 dark:hover:text-gray-200"
      @click="handleAccordion(item)"
    >
      {{ acticeClass === item.title }}
      <div class="flex gap-2" > 
        <div class="w-[30px] flex items-center justify-center">
          <Icon :name="item.icon.name" :size="item.icon.size" />
        </div>
        <span :class="props.hovering ? 'opacity-100' : 'opacity-0'">{{ item.title }}</span>
      </div>
      <div 
        class="w-full flex justify-end"
        v-if="item.children" 
        
      >
        <Icon name="fe:arrow-right" size="22" :class="!accordions ? 'rotate-90' : 'rotate-0'" class="transition duration-300 ease-in-out"/>
      </div>
    </ULink>
    <div class="transition duration-300 ease-in-out overflow-hidden" :class="accordions ? 'h-0 ' : 'h-auto'">
      <LayoutsNavigationsVerticalList :children="item.children" :hovering="props.hovering" /> 
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  children: {
    type: Object,
    required: true
  },
  hovering:{
    type: Boolean,
    required: true
  },
})

const accordions = ref<boolean>(true)
const acticeClass = ref()

const handleAccordion = (item: any) => {
  if (! item.to ) {
    accordions.value = !accordions.value
  }
  
  acticeClass.value = item.title

  console.log(acticeClass.value);
  
  
}


</script>

<style>
  .arrow{
    background-image: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="%234B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
   
  }

  .active-link {
    background: linear-gradient(72.47deg, #7367f0 22.16%, rgba(115, 103, 240, 0.7) 76.47%);
    box-shadow: 0px 2px 6px 0px rgba(115,103,240,.48);
    color: #fff !important;
  }
</style>
