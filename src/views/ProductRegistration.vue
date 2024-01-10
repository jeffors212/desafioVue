<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card p-4">
          <h1 class="text-center mb-4">Cadastro de Produto</h1>
          <b-form @submit.prevent="onSubmit">
            
            <!-- Nome do Produto -->
            <b-form-group label="Nome do Produto:" label-for="product-name-input">
              <b-form-input
                id="product-name-input"
                v-model="product.name"
                required
                placeholder="Insira o nome do produto"
              ></b-form-input>
            </b-form-group>

            <!-- Produto Ativo -->
            <b-form-group>
              <b-form-checkbox v-model="product.active">
                Ativo
              </b-form-checkbox>
            </b-form-group>

            <!-- Botão de Submissão -->
            <b-button type="submit" variant="primary">Cadastrar Produto</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        active: false
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('Produto cadastrado:', this.product);
      // Aqui você pode adicionar a lógica para lidar com o envio do formulário
      // Por exemplo, enviar para uma API ou validar os dados
    }
  }
};
</script>

<style>
/* Estilos adicionais, se necessário */
</style>
