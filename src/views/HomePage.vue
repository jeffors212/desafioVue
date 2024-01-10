<template>
  <div class="home d-flex flex-column align-items-center justify-content-center min-vh-100">
    <h1 class="mb-4">Bem-vindo ao Sistema de Cadastro</h1>
    <div class="button-group mb-2">
      <button @click="goToProductRegistration" class="btn btn-primary mr-2">Cadastrar Produto</button>
      <button @click="goToClientRegistration" class="btn btn-secondary mr-2">Cadastrar Cliente</button>
    </div>
    <div class="button-group">
      <button @click="goToAssociateProducts" class="btn btn-info mr-2">Associar Produtos a Clientes</button>
      <button @click="goToListingsControl" class="btn btn-warning">Listagem e Controles</button>
    </div>
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
    },
     goToListingsControl() {
      this.$router.push('/listings-control');
    }
  }
}
</script>

<style>
.home {
  padding: 0 15px;
}

.button-group .btn {
  margin-bottom: 10px;
}

@media (min-width: 576px) {
  .button-group .btn:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
