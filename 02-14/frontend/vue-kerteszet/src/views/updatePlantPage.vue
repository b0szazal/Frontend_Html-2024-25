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
            <button @click="Cancel()">Mégse</button>
            <button @click="SavePlant()">Mentés</button>
        </div>
    </div>
</template>

<script setup>
import { usePlantStore } from '@/stores/plant';
import { ref, onMounted } from 'vue';
import {  useRouter } from 'vue-router';

const router = useRouter()
const plantStore = usePlantStore();

const nev = ref("");
const eveloE = ref(false)
const kategoria = ref("");
const ar=ref()

const SavePlant= async ()=>{
    let json={};
    json.nev=nev.value;
    json.eveloE=eveloE.value;
    json.kategoria=kategoria.value;
    json.ar=ar.value;
    await plantStore.updatePlant(plantStore.selectedPlant.id, json);
    router.push("/")
}

const Cancel=()=>{
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