import { describe, it, expect, beforeEach } from "vitest";
import App from "@/App.vue";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { createRouter, createWebHistory, RouterLink } from "vue-router";
import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("App.ue", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it("navigates to '/'", () => {
    expect(wrapper.findComponent(RouterLink).props().to).toBe("/");
  });
});
