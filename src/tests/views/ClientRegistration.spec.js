import { shallowMount } from '@vue/test-utils';
import ClientRegistration from '@/views/ClientRegistration.vue';

describe('ClientRegistration.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ClientRegistration);
  });

  it('renderiza o formulário de cadastro de clientes', () => {
    expect(wrapper.find('h1').text()).toBe('Cadastro de Cliente');
    expect(wrapper.find('#client-name-input').exists()).toBe(true);
    expect(wrapper.find('#client-document-input').exists()).toBe(true);
    expect(wrapper.find('#client-phone-input').exists()).toBe(true);
    expect(wrapper.find('#client-email-input').exists()).toBe(true);
    expect(wrapper.find('b-form-checkbox').exists()).toBe(true);
  });

  it('chama onSubmit quando o formulário é enviado', async () => {
    const mockSubmit = jest.fn();
    wrapper.setMethods({ onSubmit: mockSubmit });
    await wrapper.find('b-form').trigger('submit.prevent');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
