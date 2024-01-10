<template>
  <div class="home">
    <h1>Bem-vindo ao Sistema de Cadastro</h1>
    <button @click="goToProductRegistration" class="btn btn-primary">Cadastrar Produto</button>
    <button @click="goToClientRegistration" class="btn btn-secondary">Cadastrar Cliente</button>
    <button @click="goToAssociateProducts" class="btn btn-info">Associar Produtos a Clientes</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToProductRegistration() {
      this.$router.push('/register-product');
    },
       goToClientRegistration() {
      this.$router.push('/register-client');
    },
     goToAssociateProducts() {
      this.$router.push('/associate-products');
    }
  }
}
</script>

<style>
/* Adicione aqui os estilos da sua página */
</style>
