<template>
    <h2 class="text-center">Lottók</h2>
    <div class="row">
        <div class="card col-md-6 col-lg-4 col-xl-3 col-12 p-3">
            <h3 class="card-title">Ötöslottó</h3>
            <img src="./Images/lotto5.png" alt="Image not found">
            <p>
                Az Ötöslottó játékban 90 számból kell 5-öt kiválasztani.
            </p>
            <button class="btn btn-success" @click="AddBet('Ötös lottó')">Játszom</button>
        </div>
        <div class="card col-md-6 col-lg-4 col-xl-3 col-12 p-3">
            <h3 class="card-title">Hatoslottó</h3>
            <img src="./Images/lotto6.png" alt="Image not found">
            <p>
                A Hatoslottó játékban 45 számból kell 6-ot kiválasztani.
            </p>
            <button class="btn btn-success" @click="AddBet('Hatos lottó')">Játszom</button>
        </div>
        <div class="card col-md-6 col-lg-4 col-xl-3 col-12 p-3">
            <h3 class="card-title">Skandináv Lottó</h3>
            <img src="./Images/lotto6.png" alt="Image not found">
            <p>
                A Skandináv lottó játékban 35 számból kell 7-et kiválasztani.
            </p>
            <button class="btn btn-success" @click="AddBet('Skandináv lottó')">Játszom</button>
        </div>
        <div class="card col-md-6 col-lg-4 col-xl-3 col-12 p-3">
            <h3 class="card-title">EuroJackpot</h3>
            <img src="./Images/lotto8.png" alt="Image not found">
            <p>
                Az EuroJackpot játékban 50 számból kell 5-öt és 12-ből 2-őt kiválasztani.
            </p>
            <button class="btn btn-success" @click='AddBet("Euro Jackpot")'>Játszom</button>
        </div>
    </div>

</template>

<script setup>
    import { useBetsStore } from '@/stores/betsStore.js';
    import { onMounted } from 'vue';

    const betsStore=useBetsStore();

    const AddBet=(string)=>{
        betsStore.AddBet(string)
    }

</script>