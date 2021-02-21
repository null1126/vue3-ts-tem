
/**
 * @description 校验是否是外链地址
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string): boolean => {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description 校验是否是数组
 * @param {string} arr
 * @returns {Boolean}
 */
export const isArray = (arr: Array<any>): boolean => {
    return Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * @description 校验数组长度是否大于0
 * @param {string} arr
 * @returns {Boolean}
 */
export const isLength = (arr: Array<any>): boolean => {
    return Array.isArray(arr) && arr.length > 0
}
