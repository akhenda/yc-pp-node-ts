import { getMessage } from './hello';

describe('hello', () => {
  describe('utils#hello()', () => {
    it('should return a message', () => {
      const message = getMessage();

      expect(message).toEqual('Hello world!');

      // TODO(@akhenda): remove this useless assertion
      // confirm jest-extended matchers work
      expect(true).toBeTrue();
    });
  });
});
