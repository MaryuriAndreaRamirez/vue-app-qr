<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Aplicación Qr</h1>

    <!-- <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button> -->
    <button @click="$router.push({ name: 'appQr', params: { id: 500 }})" class="btn btn-success">Succes</button>

  </div>
</template>

<script>
export default {
  methods: {
    goToAppQr() {
      this.$router.push({ name: 'appQr' })
    }
  }
}
</script>

