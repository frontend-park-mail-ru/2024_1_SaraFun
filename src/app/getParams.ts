export function getParams(): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
}