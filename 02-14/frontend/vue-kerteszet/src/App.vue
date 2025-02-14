<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div >
      <nav class="wrapper">
        <RouterLink to="/">Növények</RouterLink>
        <RouterLink to="/addplant">Új növény</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: row;
  max-width: fit-content;
  margin: auto;
  margin-top: 25px;
  gap: 25px;
  font-size: larger;
}
</style>
