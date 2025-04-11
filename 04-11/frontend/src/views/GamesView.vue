<template>
    <h2 class="text-center">Fogadások</h2>
    <div class="card">
        <div v-if="betsStore.bets.length>0" class="p-3">
            <h5>Megtett játékok:</h5>
            <ul v-for="bet in betsStore.bets">
                <li>{{ bet }}</li>
            </ul>
            <button class="btn btn-danger" @click="betsStore.ClearBets()">Lista törlése</button>
        </div>
        <div v-else>
            <h4 class="text-center text-danger">Még nincs leadott fogadás</h4>
        </div>
    </div>

</template>

<script setup>
    import { useBetsStore } from '@/stores/betsStore.js';

    const betsStore=useBetsStore();
</script>
<style scoped>
    .btn{
        width: 250px;
        padding: 5px;
    }
</style>