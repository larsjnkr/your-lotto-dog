import { describe, it, expect, vi } from "vitest";
import DrawingComponent from "@/components/DrawingComponent.vue";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import * as ApolloComposable from "@vue/apollo-composable";
import getDraws from "@/graphql/getDraws";

vi.mock("@vue/apollo-composable", () => {
  return {
    useResult: vi.fn().mockResolvedValue({
      result: {},
      loading: false,
      error: null,
    }),
    useQuery: vi.fn().mockResolvedValue({
      result: {},
      loading: false,
      error: null,
    }),
  };
});

describe("DrawingComponent.vue (mocked @vue/apollo-composable)", () => {
  let wrapper: VueWrapper;
  const spy1 = vi.spyOn(ApolloComposable, "useQuery");

  const setWrapper = (type: string): void => {
    wrapper = shallowMount(DrawingComponent, {
      propsData: { type },
    });
  };

  it("calls useQuery with prop:type", () => {
    const eurojackpot = "eurojackpot";
    setWrapper(eurojackpot);
    expect(spy1).toBeCalledWith(getDraws, { limit: 1, type: eurojackpot });

    const cash4life = "cash4life";
    setWrapper(cash4life);
    expect(spy1).toBeCalledWith(getDraws, { limit: 1, type: cash4life });
  });
});
