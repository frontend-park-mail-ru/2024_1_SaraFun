function logout() {
    return $.ajax({
        url: 'http://5.188.140.7:8080/logout',
        method: 'GET',
        xhrFields: {
            withCredentials: true
        }
    }).then(() => true).catch(() => false);
}

function loginUser(login, password) {
    return $.ajax({
        url: 'http://5.188.140.7:8080/signin',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({ username: login, password: password })
    }).then(() => {
        renderNavBar();
        navigateTo('/feed'); //тут ли это должно быть?
        return true;
    }).catch(() => false);
}

function checkAuth() {
    return $.ajax({
        url: 'http://5.188.140.7:8080/checkauth',
        method: 'GET',
        xhrFields: {
            withCredentials: true
        }
    }).then(() => true).catch(() => false);
}

function fetchUsers() {
    return $.ajax({
        url: 'http://5.188.140.7:8080/getusers',
        method: 'GET',
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json'
    }).then(data => data).catch(error => {
        console.error('Ошибка при получении списка пользователей:', error);
        return [];
    });
}

function registerUser(login, password, gender, age) {
    return $.ajax({
        url: 'http://5.188.140.7:8080/signup',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({ username: login, password: password, gender: gender, age: parseInt(age) })
    }).then(() => {
        renderNavBar();
        navigateTo('/feed'); //тут ли это должно быть?
    }).catch(error => {
        console.error('Ошибка:', error);
    });
}
