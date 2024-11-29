export function getParams(): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);

    urlParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
}