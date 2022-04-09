import { describe, it, expect } from "vitest";
import WelcomeView from "@/views/WelcomeView.vue";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createRouter, createWebHistory, RouterLink } from "vue-router";
import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("WelcomeView.vue", () => {
  it("navigates to '/eurojackpot'", () => {
    const wrapper: VueWrapper = shallowMount(WelcomeView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(RouterLink).props().to).toBe("/eurojackpot");
  });
});
