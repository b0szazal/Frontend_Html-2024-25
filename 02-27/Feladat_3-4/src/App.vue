<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="fs-5">Home</RouterLink>
      </nav>
    </div>
    <div class="container">
      <div class="get">
        <div>
          <label for="fourInput">Számnégyes vesszővel elválasztva</label>
          <input type="text" id="fourInput" placeholder="minta: 1,1,1,1" v-model="four">
          <button @click="CheckForErrors()">Generálás</button>
          <p v-text="fourError"></p>
          <div v-if="!exists">
              <button @click="fourStore.postFour(four)">Számnégyes mentése</button>
          </div>
        </div>
        <div>
          <label for="id">Id alapján lekérdezés:</label>
          <input type="text" id="id" v-model="fourId" placeholder="pl. 1">
          <button @click="FindFour()">Lekérdezés</button>
        </div>
      </div>
      <div class="container text-center bg-primary fs-4 rounded-4">
        <div class="row p-5">
              <div class="col-4" v-text="table[0][0]">
              </div>
              <div class="col-4" v-text="table[0][1]">
              </div>
              <div class="col-4" v-text="table[0][2]">
              </div>
          </div>
          <div class="row p-5">
              <div class="col-4" v-text="table[1][0]">
              </div>
              <div class="col-4" v-text="table[1][1]">
              </div>
              <div class="col-4" v-text="table[1][2]">
              </div>
          </div>
          <div class="row p-5">
              <div class="col-4" v-text="table[2][0]">
              </div>
              <div class="col-4" v-text="table[2][1]">
              </div>
              <div class="col-4" v-text="table[2][2]">
              </div>
          </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
  import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useFoursStore } from './stores/fours';

  const fourStore=useFoursStore();

  const four= ref('');
  const fourError = ref('');
  const fourId = ref('');
  const table= ref([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const exists = ref(true);

  const CheckForErrors = () => {
    let numbers = four.value.split(',');
    if(numbers.length != 4){
      fourError.value = 'Nem 4 db szám lett megadva!';
      return;
    }
    for(let i=0; i<4; i++){
      if(isNaN(numbers[i])){
        fourError.value = 'Nem számot adtál meg!';
        return;
      }
    }
    Generate(numbers);
  }

  const Generate = async (numbers)=>{
    if(numbers.length != 4){
      fourError.value = numbers;
      return;
    }
    numbers = numbers.map(Number);
    table.value= [
      [numbers[0], numbers[0]+numbers[1], numbers[1]],
      [numbers[0]+numbers[2], numbers[0]+numbers[1]+numbers[2]+numbers[3], numbers[1]+numbers[3]],
      [numbers[2], numbers[2]+numbers[3], numbers[3]]
    ]

    exists.value = await fourStore.CheckIfExist(numbers);
  }

  const FindFour = async () => {
    Generate(await fourStore.FindFour(fourId.value))
  }
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.fs-5{
  font-size: xx-large;
}
.container{
  max-width: 80%;
  margin: auto;
}
.get{
  display: flex;
  max-width: fit-content;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
}
input{
  margin: 25px;
}
</style>
