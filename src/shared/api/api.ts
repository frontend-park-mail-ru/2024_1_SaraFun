import { ajax, ajaxMultipartForm } from './ajax';

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
export const get = async (url: string) => {
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
export const post = async (url: string, body: any) => {
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
export const put = async (url: string, body: any) => {
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
export const del = async (url: string) => {
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
export const postFormData = async (url: string, file: FormData) => {
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
export const putFormData = async (url: string, file: FormData) => {
	try {
		return await ajaxMultipartForm(url, AJAX_METHODS.PUT, file);
	} catch (error) {
		throw error;
	}
};