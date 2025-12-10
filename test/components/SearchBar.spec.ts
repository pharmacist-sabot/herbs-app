import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import SearchBar from '@/components/SearchBar.vue';

describe('searchBar.vue', () => {
  it('emits search event with query when button is clicked', async () => {
    const wrapper = mount(SearchBar, {
      props: { categories: ['Cat1', 'Cat2'] },
    });

    const input = wrapper.find('input');
    await input.setValue('Fah Talai');

    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')![0]).toEqual(['Fah Talai']);
  });

  it('emits filter event when category changes', async () => {
    const wrapper = mount(SearchBar, {
      props: { categories: ['Cat1', 'Cat2'] },
    });

    const select = wrapper.find('select');
    await select.setValue('Cat1');

    expect(wrapper.emitted('filter')).toBeTruthy();
    expect(wrapper.emitted('filter')![0]).toEqual(['Cat1']);
  });
});
