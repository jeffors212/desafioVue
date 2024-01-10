<template>
  <div class="container mt-5">
    <h1 class="text-center">Listagem e Controles</h1>

    <!-- Listagem de Produtos -->
    <h2>Produtos</h2>
    <b-table :items="products" :fields="productFields"></b-table>

    <!-- Listagem de Clientes -->
    <h2>Clientes</h2>
    <b-table :items="clients" :fields="clientFields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Produto 1', active: true },
        { id: 2, name: 'Produto 2', active: false },
        // Mais produtos...
      ],
      productFields: [
        { key: 'name', label: 'Nome do Produto' },
        { key: 'active', label: 'Ativo' },
        { key: 'actions', label: 'Ações' }
      ],
      clients: [
        { id: 1, name: 'Cliente 1', document: '1234', active: true },
        { id: 2, name: 'Cliente 2', document: '5678', active: false },
        // Mais clientes...
      ],
      clientFields: [
        { key: 'name', label: 'Nome do Cliente' },
        { key: 'document', label: 'Documento' },
        { key: 'active', label: 'Ativo' },
        { key: 'actions', label: 'Ações' }
      ]
    };
  },
  methods: {
    // Métodos para editar, ativar/inativar produtos/clientes
  }
};
</script>

<style>
/* Estilos adicionais, se necessário */
</style>
