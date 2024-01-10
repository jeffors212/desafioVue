<template>
  <div class="container mt-5">
    <h1 class="text-center">Associação de Produtos a Clientes</h1>
    <b-form-group label="Selecione um Cliente:" label-for="client-select">
      <b-form-select id="client-select" v-model="selectedClient" :options="clients"></b-form-select>
    </b-form-group>

    <div v-if="selectedClient">
      <h3>Produtos Disponíveis</h3>
      <div v-for="product in products" :key="product.id" class="mb-2">
        <b-form-checkbox v-model="product.selected">
          {{ product.name }}
        </b-form-checkbox>
      </div>
      <b-button @click="associateProducts" variant="success">Associar Produtos</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        { value: null, text: 'Escolha um cliente' },
        { value: '1', text: 'Cliente 1' },
        { value: '2', text: 'Cliente 2' },
        // Adicione mais clientes conforme necessário
      ],
      products: [
        { id: '1', name: 'Produto 1', selected: false },
        { id: '2', name: 'Produto 2', selected: false },
        // Adicione mais produtos conforme necessário
      ],
      selectedClient: null
    };
  },
  methods: {
    associateProducts() {
      console.log('Produtos associados:', this.products.filter(p => p.selected));
      // Implemente a lógica de associação aqui
    }
  }
};
</script>

<style>
/* Estilos adicionais, se necessário */
</style>
