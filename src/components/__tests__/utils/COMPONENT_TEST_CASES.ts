import type { IGqlTestCase } from "@/types/IGqlTestCase";

export const DRAWING_COMPONENT_TESTS: IGqlTestCase[] = [
  {
    description: "renders output correctly",
    expectedOutput: "1-42-3-99-35-5-17",
    mockedResponse: Promise.resolve({
      data: {
        draw: {
          draws: [
            {
              date: "Apr 08 2022",
              numbers: [1, 42, 3, 99, 35],
              additionalNumbers: [5, 17],
            },
          ],
          success: true,
        },
      },
    }),
  },
  {
    description: "renders error when an error occurs",
    expectedOutput: "GraphQL Error",
    mockedResponse: Promise.resolve({ errors: [{ message: "GraphQL Error" }] }),
  },
  {
    description: "renders loading when loading",
    expectedOutput: "Loading...",
    mockedResponse: new Promise(() => {
      /* unresolved promise mocks loading */
    }),
  },
];
