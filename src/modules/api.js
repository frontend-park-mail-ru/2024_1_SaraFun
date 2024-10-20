import { ajax } from './ajax.js';

export const AJAX_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const get = async (url) => {
    return await ajax(url, AJAX_METHODS.GET);
};

export const post = async (url, body) => {
    return await ajax(url, AJAX_METHODS.POST, body);
};

export const put = async (url, body) => {
    return await ajax(url, AJAX_METHODS.PUT, body);
};

export const del = async (url) => {
    return await ajax(url, AJAX_METHODS.DELETE);
};