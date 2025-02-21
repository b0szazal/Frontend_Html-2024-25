<template>
    <div class="container">
        <div class="card" v-for="plant in plantStore.plants">
            <h2>{{ plant.nev }}</h2>
            <p>{{ plant.eveloE ? "" : "nem" }}  évelő</p>
            <p>kategória : {{ plant.kategoria }}</p>
            <p>ár : {{ plant.ar }} FT</p>
            <div class="card-footer">
                <button @click="EditPlant(plant.id)">
                    Szerkesztés
                </button>
                <button @click="plantStore.DeletePlant(plant.id)">
                    Törlés
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePlantStore } from '@/stores/plant';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const plantStore = usePlantStore()
const router = useRouter()

onMounted(async ()=>{
    await plantStore.getPlants()
})

const EditPlant = async (id) => {
    await plantStore.SelectPlant(id);
    router.push("/editplant");
}
</script>

<style scoped>
.container{
    max-width: fit-content;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 25px;
    padding: 25px;
}
.card{
    text-align: center;
    border: 1px black solid;
    padding: 15px;
    border-radius: 15px;
    margin: 25px;
}
</style>