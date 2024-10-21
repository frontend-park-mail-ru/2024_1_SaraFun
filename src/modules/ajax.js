/**
 * Performs an AJAX request.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {string} method - The HTTP method to use (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {Object} [body=null] - The request body to send, if any.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the response is not ok.
 */
export async function ajax(url, method, body = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response;

    } catch (error) {
        throw error;
    }
}

/**
 * Performs an AJAX request with a multipart form.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {string} method - The HTTP method to use (e.g., 'POST').
 * @param {File} file - The file to send in the multipart form.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the response is not ok.
 */
export async function ajaxMultipartForm(url, method, file) {
    const formData = new FormData();
    formData.append('file', file);

    const options = {
        method: method,
        body: formData,
        credentials: 'include'
    };

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response;

    } catch (error) {
        throw error;
    }
}
