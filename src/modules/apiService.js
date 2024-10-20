import {get, post, put, del} from './api.js'

export async function loginUser(login, password) {
    try {
        const response = await post('http://5.188.140.7:8080/signin', JSON.stringify({'username': login, 'password': password}));

        if (!response.ok) {
            return false;
        }

        return true;

    } catch (error) {
        return false;
    }
}

export async function registerUser(login, password, gender, age) {
    try {
        const body = JSON.stringify({'username': login, 'password': password, 'gender': gender, 'age': parseInt(age)});
        const response = await post('http://5.188.140.7:8080/signup', body);
    
        if (!response.ok) {
            return false;
        }

        return true;

    } catch (error) {
        return false;
    }
}

export async function fetchUsers() {
    try {
        const response = await get('http://5.188.140.7:8080/getusers');
        
        if (!response.ok) {
            return [];
        }

        return response;

    } catch (error) {
        return [];
    }
}

export async function checkAuth() {
    try {
        const response = await get('http://5.188.140.7:8080/checkauth');
        
        if (!response.ok) {
            return false;
        }

        return true;

    } catch (error) {
        return false;
    }
}

export async function logout() {
    try {
        const response = await get('http://5.188.140.7:8080/logout');
        
        if (!response.ok) {
            return false;
        }

        return true;

    } catch (error) {
        return false;
    }
}