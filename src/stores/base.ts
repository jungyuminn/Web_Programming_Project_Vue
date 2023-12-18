import { ref } from 'vue'
import { defineStore } from 'pinia'
import { STORES } from '@/constants'

export const useBaseStore = defineStore(STORES.BASE, () => {
  const visibleMenu = ref(false)

  function setVisibleMenu(visible: boolean) {
    visibleMenu.value = visible
  }

  return { visibleMenu, setVisibleMenu }
})
