<template>
  <div class="home">
    <h1>Bem-vindo ao Sistema de Cadastro</h1>
    <button @click="goToProductRegistration" class="btn btn-primary">Cadastrar Produto</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToProductRegistration() {
      this.$router.push('/register-product');
    }
  }
}
</script>

<style>
/* Adicione aqui os estilos da sua página */
</style>
