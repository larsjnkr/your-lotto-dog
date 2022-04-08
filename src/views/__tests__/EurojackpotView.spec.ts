import { describe, it, expect } from "vitest";
import EurojackpotView from "@/views/EurojackpotView.vue";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createRouter, createWebHistory, RouterLink } from "vue-router";
import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("EurojackpotView.vue", () => {
  it("navigates to '/'", () => {
    const wrapper: VueWrapper = shallowMount(EurojackpotView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(RouterLink).props().to).toBe("/");
  });
});
