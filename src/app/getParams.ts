export function getParams(): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const pathSegments = window.location.pathname.split('/').filter(segment => segment);

    if (pathSegments.length >= 2) {
        params['param'] = pathSegments[1];
    }

    return params;
}