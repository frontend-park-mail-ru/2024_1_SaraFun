export function getParams(): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const pathSegments = window.location.pathname.split('/').filter(segment => segment);
    console.log(pathSegments);

    if (pathSegments.length >= 2) {
        params['chatId'] = pathSegments[1];
    }
    
    console.log(params);
    return params;
}