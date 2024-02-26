<template>
  <div v-for="(item, index) in props.children" :key="index">
    <ULink
      :to="item.to"
      class="flex items-center gap-3 mb-1  py-2 pl-4 pr-3 w-full rounded "
      active-class="active-link text-white dark:text-white"
      inactive-class="text-black-700 dark:text-white-400 hover:bg-[#8692d00f] hover:text-white-700 dark:hover:text-black-900"
      @click="handleAccordion(item)"
    >
      <div class="flex gap-2" >
        <div class="w-[30px] flex items-center justify-center">
          <Icon :name="item.icon.name" :size="item.icon.size" />
        </div>
        <span class="font-bold"
            :class="props.hovering ? 'opacity-100' : 'opacity-0'"
        >{{ item.title }}</span>
      </div>
      <div
        class="w-full flex justify-end"
        v-if="item.children"

      >
        <Icon name="fe:arrow-right" size="22" :class="!accordions ? 'rotate-90' : 'rotate-0'" class="transition duration-300 ease-in-out"/>
      </div>
    </ULink>
    <div class="transition duration-300 ease-in-out overflow-hidden" :class="accordions ? 'h-0 ' : 'h-auto'" >
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
const activeClass = ref()

const handleAccordion = (item: any) => {
  if (! item.to ) {
    accordions.value = !accordions.value
  }

  activeClass.value = item.title
}

</script>

<style>
  .active-link {
    background: linear-gradient(72.47deg, #7367f0 22.16%, rgba(115, 103, 240, 0.7) 76.47%);
    box-shadow: 0px 2px 6px 0px rgba(115, 103, 240, 0.07);
  }
</style>
