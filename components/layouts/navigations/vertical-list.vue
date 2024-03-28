<template>
    <div v-for="(item, index) in navigationLists" :key="index">
      <div>
        <ULink
            :to="item.to"
            class="flex items-center mb-1  py-2 pl-4 pr-3 w-full rounded "
            :class="item.add ? 'justify-center hover:bg-purple-700 bg-purple-600' : ''"
            active-class="active-link text-white dark:text-white"
            inactive-class="text-black-700 dark:text-white-400 hover:bg-[#8692d00f] hover:text-white-700 dark:hover:text-black-900"
        >
          <div class="flex gap-2 mr-auto" :class="item.add ? props.hovering ? 'ml-auto' : '' : ''" >
            <div  class="w-[30px] flex items-center justify-center">
              <Icon :name="item.icon.name" :size="item.icon.size" />
            </div>
            <span class="word-shadow text-left overflow-hidden capitalize text-ellipsis"
                  :class="props.hovering ? 'opacity-100' : 'opacity-0'"
            >{{ $t(item.title) }}</span>
          </div>
          <div
              v-if="item.children"
              @click="handleAccordion(index)"
          >
            <Icon name="fe:arrow-right" size="22" :class="item.status ? 'rotate-90' : 'rotate-0'" class="transition duration-300 ease-in-out"/>
          </div>
        </ULink>
      </div>
      <div class="transition ml-1 duration-300 ease-in-out overflow-hidden" :class="!item.status ? 'h-0 ' : 'h-auto'" >
        <LayoutsNavigationsVerticalList :children="item.children" :hovering="props.hovering" />
      </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
  children: {
    type: Object,
    required: false
  },
  hovering:{
    type: Boolean,
    required: true
  },
})

const navigationLists = ref(props.children)

const handleAccordion = (item: any) => {
  if (item){
    navigationLists.value[item].status = !navigationLists.value[item].status
  }
}

</script>

<style>
  .active-link {
    background: linear-gradient(72.47deg, #7367f0 22.16%, rgba(115, 103, 240, 0.7) 76.47%);
    box-shadow: 0px 2px 6px 0px rgba(115, 103, 240, 0.07);
  }
</style>
