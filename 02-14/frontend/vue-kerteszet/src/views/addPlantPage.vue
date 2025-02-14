<template>
    <div class="container">
        <table>
            <tbody>
                <tr>
                    <td>
                        <label for="nev">Növény neve</label>
                    </td>
                    <td>
                        <input type="text" name="nev" id="nev" v-model="nev">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="evelo-e">Évelő-e</label>
                    </td>
                    <td>
                        <input type="checkbox" name="evelo-e" id="evelo-e" v-model="eveloE">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="kategoria">Kategória</label>
                    </td>
                    <td>
                        <input type="text" name="kategoria" id="kategoria" v-model="kategoria">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="ar">Ár:</label>
                    </td>
                    <td>
                        <input type="number" name="ar" id="ar" placeholder="Ft" v-model="ar">
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="submit">
            <button @click="AddNewPlant()">Létrehozás</button>
        </div>
    </div>
</template>

<script setup>
import { usePlantStore } from '@/stores/plant';
import {  ref } from 'vue';
import {  useRouter } from 'vue-router';

const router = useRouter()

const nev = ref("");
const eveloE = ref(false)
const kategoria = ref("");
const ar=ref()

const plantStore = usePlantStore()

const AddNewPlant=()=>{
    let json={};
    json.nev=nev;
    json.eveloE=eveloE;
    json.kategoria=kategoria;
    json.ar=ar;
    plantStore.AddPlant(json);
    router.push("/")
}

</script>

<style scoped>
.container{
    max-width: fit-content;
    margin: auto;
    margin-top: 25px;
    padding: 25px;
}
</style>