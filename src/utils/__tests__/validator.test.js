import { isNotEmpty, isNumber, isString } from '@utils/validator';

describe('Testing Validator Helper File', () => {
  describe('Testing method is not empty', () => {
    it('Should be return false', () => {
      expect(isNotEmpty(null)).toBeFalsy();
      expect(isNotEmpty('')).toBeFalsy();
      expect(isNotEmpty(undefined)).toBeFalsy();
    });

    it('Should be return true', () => {
      expect(isNotEmpty(1)).toBeTruthy();
      expect(isNotEmpty('sample text')).toBeTruthy();
      expect(isNotEmpty({ foo: 'bar' })).toBeTruthy();
    });
  });

  describe('Testing method is number', () => {
    it('Should be return false', () => {
      expect(isNumber(null)).toBeFalsy();
      expect(isNumber('')).toBeFalsy();
      expect(isNumber(undefined)).toBeFalsy();
    });

    it('Should be return true', () => {
      expect(isNumber(1)).toBeTruthy();
      expect(isNumber(-1000)).toBeTruthy();
      expect(isNumber(1000_000_000_000)).toBeTruthy();
    });
  });

  describe('Testing method is string', () => {
    it('Should be return false', () => {
      expect(isString(null)).toBeFalsy();
      expect(isString(1)).toBeFalsy();
      expect(isString(undefined)).toBeFalsy();
    });

    it('Should be return true', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString('sample')).toBeTruthy();
      expect(isString('this is sample test case')).toBeTruthy();
    });
  });
});
