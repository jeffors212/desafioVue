import { shallowMount } from '@vue/test-utils';
import ListingsControl from '@/views/ListingsControl.vue';

describe('ListingsControl.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ListingsControl, {
      data() {
        return {
          products: [
            { id: 1, name: 'Produto 1', active: true },
            { id: 2, name: 'Produto 2', active: false }
          ],
          clients: [
            { id: 1, name: 'Cliente 1', document: '1234', active: true },
            { id: 2, name: 'Cliente 2', document: '5678', active: false }
          ]
        };
      }
    });
  });

  it('renderiza a lista de produtos', () => {
    const productsTable = wrapper.find('h2:nth-of-type(1) + b-table');
    expect(productsTable.exists()).toBe(true);
    expect(wrapper.vm.products.length).toBeGreaterThan(0);
  });

  it('renderiza a lista de clientes', () => {
    const clientsTable = wrapper.find('h2:nth-of-type(2) + b-table');
    expect(clientsTable.exists()).toBe(true);
    expect(wrapper.vm.clients.length).toBeGreaterThan(0);
  });
});
