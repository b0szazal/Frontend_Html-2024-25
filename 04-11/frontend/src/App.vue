<template>
  <div class="container ">
    <header class="my-5">
      <div class="wrapper">
        <nav class="d-flex justify-content-center gap-100">
          <RouterLink class="btn btn-outline-success w-250" to="/">Lottó</RouterLink>
          <RouterLink class="btn btn-outline-success w-250" to="/play">Játék</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>


<script setup>
</script>

<style scoped>
  .w-250{
    width: 250px;
  }
  .gap-100{
    gap: 100px;
  }
</style>