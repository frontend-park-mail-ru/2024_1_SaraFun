import { ajax } from './ajax.js';

export const AJAX_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const get = async (url) => {
    try {
        return await ajax(url, AJAX_METHODS.GET);
    } catch (error) {
        throw error;
    }
};

export const post = async (url, body) => {
    try {
        return await ajax(url, AJAX_METHODS.POST, body);
    } catch (error) {
        throw error;
    }
};

export const put = async (url, body) => {
    try {
        return await ajax(url, AJAX_METHODS.PUT, body);
    } catch (error) {
        throw error;
    }
};

export const del = async (url) => {
    try {
        return await ajax(url, AJAX_METHODS.DELETE);
    } catch (error) {
        throw error;
    }
};