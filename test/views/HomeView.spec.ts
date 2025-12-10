import { flushPromises, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import herbsService from '@/services/herbs-service';
import HomeView from '@/views/HomeView.vue';

// Mock Service
vi.mock('@/services/herbs-service');

const mockHerbs = [
  { ID: 1, Name: 'Herb A', Category: 'Cat1', Description: 'Desc A' },
  { ID: 2, Name: 'Herb B', Category: 'Cat2', Description: 'Desc B' },
];

describe('homeView.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders loading state initially', () => {
    (herbsService.getAllHerbs as any).mockReturnValue(new Promise(() => {}));

    const wrapper = mount(HomeView);
    expect(wrapper.text()).toContain('กำลังดาวน์โหลดข้อมูลสมุนไพร');
  });

  it('renders herbs after data fetch', async () => {
    (herbsService.getAllHerbs as any).mockResolvedValue({ status: 'success', data: mockHerbs });

    const wrapper = mount(HomeView);
    await flushPromises();

    expect(wrapper.text()).not.toContain('กำลังดาวน์โหลดข้อมูลสมุนไพร');
    expect(wrapper.text()).toContain('Herb A');
    expect(wrapper.text()).toContain('Herb B');
    expect(wrapper.text()).toContain('พบ 2 รายการ');
  });

  it('filters herbs by search query', async () => {
    (herbsService.getAllHerbs as any).mockResolvedValue({ status: 'success', data: mockHerbs });
    const wrapper = mount(HomeView);
    await flushPromises();

    const searchBar = wrapper.findComponent({ name: 'SearchBar' });
    await searchBar.vm.$emit('search', 'Herb A');

    expect(wrapper.text()).toContain('Herb A');
    expect(wrapper.text()).not.toContain('Herb B');
  });

  it('filters herbs by category', async () => {
    (herbsService.getAllHerbs as any).mockResolvedValue({ status: 'success', data: mockHerbs });
    const wrapper = mount(HomeView);
    await flushPromises();

    const searchBar = wrapper.findComponent({ name: 'SearchBar' });
    await searchBar.vm.$emit('filter', 'Cat2');

    expect(wrapper.text()).not.toContain('Herb A');
    expect(wrapper.text()).toContain('Herb B');
  });

  it('shows error message when fetch fails', async () => {
    (herbsService.getAllHerbs as any).mockRejectedValue(new Error('Network Error'));
    const wrapper = mount(HomeView);
    await flushPromises();

    expect(wrapper.text()).toContain('ไม่สามารถดึงข้อมูลได้');
  });
});
