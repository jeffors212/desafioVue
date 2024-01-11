import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('HomePage.vue', () => {
  it('deve conter os botões corretos', () => {
    const wrapper = shallowMount(HomePage);
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(4); // Supondo que existam 4 botões
  });
});
