import { shallowMount } from '@vue/test-utils';
import ProductClientAssociation from '@/views/ProductClientAssociation.vue';

describe('ProductClientAssociation.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductClientAssociation, {
      data() {
        return {
          clients: [
            { value: null, text: 'Escolha um cliente' },
            { value: '1', text: 'Cliente 1' },
            { value: '2', text: 'Cliente 2' }
          ],
          products: [
            { id: '1', name: 'Produto 1', selected: false },
            { id: '2', name: 'Produto 2', selected: false }
          ],
          selectedClient: null
        };
      }
    });
  });

  it('renderiza o seletor de clientes', () => {
    expect(wrapper.find('#client-select').exists()).toBe(true);
    expect(wrapper.vm.clients.length).toBeGreaterThan(0);
  });

  it('mostra produtos quando um cliente é selecionado', async () => {
    await wrapper.setData({ selectedClient: '1' });
    expect(wrapper.findAll('b-form-checkbox').length).toBe(wrapper.vm.products.length);
  });

  it('chama associateProducts quando o botão é clicado', async () => {
    // Mock the method
    const mockMethod = jest.fn();
    wrapper.setMethods({ associateProducts: mockMethod });

    await wrapper.find('b-button').trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  });
});
