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
