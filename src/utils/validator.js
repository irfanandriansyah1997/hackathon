/**
 * Is Not Empty
 *
 * @param {unknown} param - parameter will be checked
 * @returns {boolean}
 * @since 2022.01.13
 */
export const isNotEmpty = (param) =>
  [null, '', undefined].filter((item) => param === item).length === 0;

/**
 * Check is number
 *
 * @param {unknown} param - parameter to check
 * @return {boolean}
 */
export const isNumber = (param) => {
  return typeof param === 'number' || typeof param === 'bigint';
};

/**
 * Check is number
 * @param {unknown} param - parameter to check
 * @return {boolean}
 */
export const isString = (param) => {
  return typeof param === 'string';
};
