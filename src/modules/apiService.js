import {get, post, put, del} from './api.js'

export async function loginUser(login, password) {
    try {
        const body = {'username': login, 'password': password};
        const response = await post('http://5.188.140.7:8080/signin', body);
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function registerUser(login, password, gender, age) {
    try {
        const body = {'username': login, 'password': password, 'gender': gender, 'age': parseInt(age)};
        const response = await post('http://5.188.140.7:8080/signup', body);
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function fetchUsers() {
    try {
        const response = await get('http://5.188.140.7:8080/getusers');
        return response.json();

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function checkAuth() {
    try {
        const response = await get('http://5.188.140.7:8080/checkauth');
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout() {
    try {
        const response = await get('http://5.188.140.7:8080/logout');
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}