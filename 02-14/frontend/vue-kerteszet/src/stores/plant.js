import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const url="http://localhost:3000/api/plants/"

export const usePlantStore = defineStore('plant', () => {
  const plants = ref([])
  
  const getPlants = async () =>{
    await axios.get(url)
    .then(res =>{
      plants.value = res.data
    }) 
  }

  const DeletePlant = async (id) =>{
    await axios.delete(url+id);
    plants.value = plants.value.filter(p => p.id !=id)
  }

  const AddPlant = async (json) =>{
    await axios.post(url, json)
  }

  return { plants, getPlants, DeletePlant, AddPlant }
})
