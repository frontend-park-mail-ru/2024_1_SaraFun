import { ajax, ajaxMultipartForm } from './ajax.js';

/**
 * Enum for AJAX methods.
 * @readonly
 * @enum {string}
 */
export const AJAX_METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

/**
 * Performs a GET request.
 * 
 * @param {string} url - The URL to send the request to.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
export const get = async (url) => {
	try {
		return await ajax(url, AJAX_METHODS.GET);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a POST request.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {Object} body - The request body to send.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
export const post = async (url, body) => {
	try {
		return await ajax(url, AJAX_METHODS.POST, body);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a PUT request.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {Object} body - The request body to send.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
export const put = async (url, body) => {
	try {
		return await ajax(url, AJAX_METHODS.PUT, body);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a DELETE request.
 * 
 * @param {string} url - The URL to send the request to.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
export const del = async (url) => {
	try {
		return await ajax(url, AJAX_METHODS.DELETE);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a POST request with a file.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {File} file - The file to send in the request.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
export const postFile = async (url, file) => {
	try {
		return await ajaxMultipartForm(url, AJAX_METHODS.POST, file);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a PUT request with a file.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {File} file - The file to send in the request.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
export const putFile = async (url, file) => {
	try {
		return await ajaxMultipartForm(url, AJAX_METHODS.PUT, file);
	} catch (error) {
		throw error;
	}
};