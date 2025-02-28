import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

let url="http://localhost:3000/fours/"

export const useFoursStore = defineStore('fours', () => {
  const FindFour = async (id)=>{
    let res=""
    try{
      await axios.get(url+id)
      .then((response)=>{
        res= response.data.data
      })
    }
    catch(err){
      res= err
    }

    return res;
  }

  const CheckIfExist = async (corners)=>{
    let fours;
    let exists=false;
    await axios.get(url)
    .then((response)=>{
      fours= response.data
    })
    .then(()=>{
      for(let i=0; i<fours.length; i++){
        if(arraysEqual(corners, fours[i].data)){
          exists=true;
        }
      }
    })
    console.log(exists)
    return exists;
  }

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  const postFour = async (four) =>{
    let numbers = four.split(',');
    numbers = numbers.map(Number);
    let res=""
    try{
      await axios.post(url, {data: numbers})
      .then(()=>{
        res= "sikeres mentés"
      })
    }
    catch(err){
      res= err
    }

    return res;
  }

  return {FindFour , CheckIfExist, postFour}
})
