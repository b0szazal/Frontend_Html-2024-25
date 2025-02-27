import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFoursStore = defineStore('fours', () => {
  const four = ref([0, 0, 0, 0]);

  return { four }
})
