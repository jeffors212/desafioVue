import { shallowMount } from '@vue/test-utils';
import ProductRegistration from '@/views/ProductRegistration.vue';

describe('ProductRegistration.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductRegistration);
  });

  it('renderiza o formulário de cadastro de produtos', () => {
    expect(wrapper.find('h1').text()).toBe('Cadastro de Produto');
    expect(wrapper.find('#product-name-input').exists()).toBe(true);
    expect(wrapper.find('b-form-checkbox').exists()).toBe(true);
  });

  it('chama onSubmit quando o formulário é enviado', async () => {
    const mockSubmit = jest.fn();
    wrapper.setMethods({ onSubmit: mockSubmit });
    await wrapper.find('b-form').trigger('submit.prevent');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
