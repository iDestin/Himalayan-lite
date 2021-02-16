/**
 * Created by PanJiaChen on 16/11/18.
 * 避免重复造轮子，这里照搬花裤衩大佬的代码使用
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
function isExternal(path) {
	return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
function validUsername(str) {
	const valid_map = ['admin', 'editor']
	return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
function validURL(url) {
	const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
	return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
function validLowerCase(str) {
	const reg = /^[a-z]+$/
	return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
function validUpperCase(str) {
	const reg = /^[A-Z]+$/
	return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
function validAlphabets(str) {
	const reg = /^[A-Za-z]+$/
	return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
function validEmail(email) {
	const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
function isString(str) {
	if (typeof str === 'string' || str instanceof String) {
		return true
	}
	return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
function isArray(arg) {
	if (typeof Array.isArray === 'undefined') {
		return Object.prototype.toString.call(arg) === '[object Array]'
	}
	return Array.isArray(arg)
}

// 向外暴露接口
module.exports = {
	isExternal,
	validUsername,
	validURL,
	validLowerCase,
	validUpperCase,
	validAlphabets,
	validEmail,
	isString,
	isArray
}