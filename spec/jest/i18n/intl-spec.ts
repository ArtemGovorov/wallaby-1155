const $intl = {t: (a: any, b: any) => true};
const LOCALE_NAMESPACE = {GENERAL: 1};
const expect = require('chai').expect;

describe('1', () => {
  describe('2', () => {
    it('should cache generated formatter', () => {
      const fixture = 'Hello {name}';
      expect($intl.t(fixture, LOCALE_NAMESPACE.GENERAL)).to.equal($intl.t(fixture, LOCALE_NAMESPACE.GENERAL));
    });
  });
});
