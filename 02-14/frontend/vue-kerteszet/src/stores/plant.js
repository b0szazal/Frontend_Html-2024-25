import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const url="http://localhost:3000/api/plants/"

export const usePlantStore = defineStore('plant', () => {
  const plants = ref([])
  const selectedPlant=ref()
  
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

  const SelectPlant = async (id) =>{
    selectedPlant.value=plants.value.find(p => p.id == id);
  }

  const updatePlant = async (id, json) =>{
    await axios.put(url+id, json);
  }

  return { plants, selectedPlant, getPlants, DeletePlant, AddPlant, SelectPlant, updatePlant }
})
