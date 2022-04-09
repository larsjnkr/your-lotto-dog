export interface IGqlTestCase {
  description: string;
  expectedOutput: string;
  mockedResponse: Promise<any>;
}
