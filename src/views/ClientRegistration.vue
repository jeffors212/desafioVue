<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card p-4">
          <h1 class="text-center mb-4">Cadastro de Cliente</h1>
          <b-form @submit.prevent="onSubmit">

            <!-- Nome -->
            <b-form-group label="Nome:" label-for="client-name-input">
              <b-form-input
                id="client-name-input"
                v-model="client.name"
                required
                placeholder="Insira o nome do cliente"
              ></b-form-input>
            </b-form-group>

            <!-- Documento -->
            <b-form-group label="Documento:" label-for="client-document-input">
              <b-form-input
                id="client-document-input"
                v-model="client.document"
                required
                placeholder="Insira o documento do cliente"
              ></b-form-input>
            </b-form-group>

            <!-- Telefone -->
            <b-form-group label="Telefone:" label-for="client-phone-input">
              <b-form-input
                id="client-phone-input"
                v-model="client.phone"
                required
                placeholder="Insira o telefone do cliente"
              ></b-form-input>
            </b-form-group>

            <!-- E-mail -->
            <b-form-group label="E-mail:" label-for="client-email-input">
              <b-form-input
                id="client-email-input"
                type="email"
                v-model="client.email"
                required
                placeholder="Insira o e-mail do cliente"
              ></b-form-input>
            </b-form-group>

            <!-- Ativo -->
            <b-form-group>
              <b-form-checkbox v-model="client.active">
                Ativo
              </b-form-checkbox>
            </b-form-group>

            <!-- Botão de Submissão -->
            <b-button type="submit" variant="primary">Cadastrar Cliente</b-button>
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
      client: {
        name: '',
        document: '',
        phone: '',
        email: '',
        active: false
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('Cliente cadastrado:', this.client);
      // Implemente a lógica de envio do formulário
    }
  }
};
</script>

<style>
/* Estilos adicionais, se necessário */
</style>
