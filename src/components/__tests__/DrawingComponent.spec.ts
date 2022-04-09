import { describe, beforeEach, it, expect, afterEach, vi, test } from "vitest";
import DrawingComponent from "@/components/DrawingComponent.vue";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import { provideApolloClient } from "@vue/apollo-composable";
import { createMockClient, type MockApolloClient } from "mock-apollo-client";
import getDraws from "@/graphql/getDraws";
import { DRAWING_COMPONENT_TESTS } from "./utils/COMPONENT_TEST_CASES";

/**
 * Initialize and provides a mocked appollo client.
 * This client will return mocked responses in the order of the tests.
 *
 * Reason: mock-apollo-client allows to call setRequestHandler only once.
 * That prevents the dynamic setting of mocked responses
 */
const requestHandler = vi.fn();
for (const testCase of DRAWING_COMPONENT_TESTS) {
  requestHandler.mockReturnValueOnce(testCase.mockedResponse);
}

const mockClient: MockApolloClient = createMockClient();
mockClient.setRequestHandler(getDraws, requestHandler);
provideApolloClient(mockClient);
/*********************************************/

describe("DrawingComponent.vue", () => {
  describe("test component state based on query responses", () => {
    let wrapper: VueWrapper;

    beforeEach(async () => {
      wrapper = shallowMount(DrawingComponent, {
        propsData: {
          type: "eurojackpot",
        },
      });
      await wrapper.vm.$nextTick(); // otherwise tests with error responses would break
    });

    for (const testCase of DRAWING_COMPONENT_TESTS) {
      it(testCase.description, async () => {
        await wrapper.vm.$nextTick();
        expect(wrapper.html()).contains(testCase.expectedOutput);
      });
    }

    afterEach(() => {
      wrapper.unmount();
      mockClient.clearStore();
    });
  });
});
