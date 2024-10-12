function loginUser(login, password) {
    return $.ajax({
        url: 'http://5.188.140.7:8080/signin',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'username': login, 'password': password }),
        xhrFields: {
            withCredentials: true 
        }
    })
    .done(function(response) {
        return true;
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Ошибка:', textStatus, errorThrown);
        return false;
    });
}

function checkAuth() {
    return $.ajax({
        url: 'http://5.188.140.7:8080/checkauth',
        type: 'GET',
        xhrFields: {
            withCredentials: true 
        }
    })
    .done(function(response) {
        return true;
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Обработка ошибки
        console.error('Ошибка авторизации:', textStatus, errorThrown);
        return false;
    });
}

function logout() {
    return $.ajax({
        url: 'http://5.188.140.7:8080/logout',
        method: 'GET',
        xhrFields: {
            withCredentials: true 
        }
    })
    .done(function() {
        console.log('Успешный выход из системы');
        return true; 
    })
    .fail(function(jqXHR) {
        console.error('Ошибка при выходе:', jqXHR.statusText);
        return false; 
    });
}

async function fetchUsers() {
    try {
        const response = await fetch('http://5.188.140.7:8080/getusers', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors'
        });
        if (!response.ok) {
            throw new Error('Ошибка при получении списка пользователей');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении списка пользователей:', error);
        return [];
    }
}

function registerUser(login, password, gender, age) {
    return $.ajax({
        url: 'http://5.188.140.7:8080/signup',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true 
        },
        data: JSON.stringify({
            username: login,
            password: password,
            gender: gender,
            age: parseInt(age)
        })
    })
    .done(function() {
        console.log('Успешно зарегистрировался');
        renderNavBar().then(() => {
        navigateTo('/feed');
        });
    })
    .fail(function(jqXHR) {
        console.error('Ошибка регистрации:', jqXHR.statusText);
    });
}
