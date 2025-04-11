import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBetsStore = defineStore('bets', () => {
  const bets=ref([])

  const AddBet=(string)=>{
    bets.value.push(string);
  }

  const ClearBets = ()=>{
    bets.value=[];
  }

  return { bets, AddBet, ClearBets }
})
