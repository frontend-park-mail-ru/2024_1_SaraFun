export async function loginUser(login, password) {
    try {
        const response = await fetch('http://5.188.140.7:8080/signin', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials : 'include',
            body: JSON.stringify({'username': login, 'password': password}),
        });
  
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
        const response = await fetch('http://5.188.140.7:8080/signup', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials : 'include',
            body: JSON.stringify({'username': login, 'password': password, 'gender': gender, 'age': parseInt(age)}),
        });
    
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
        const response = await fetch('http://5.188.140.7:8080/getusers', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors'
        });
        if (!response.ok) {
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении списка пользователей:', error);
        return [];
    }
}

export async function checkAuth() {
    try {
        const response = await fetch('http://5.188.140.7:8080/checkauth', {
            method: 'GET',
            credentials: 'include' 
        });
        if (!response.ok) {
            return false;
        }
        return true;
    } catch (error){
      //console.log('error auth')
        return false;
    }
}

export async function logout() {
    try {
        const response = await fetch('http://5.188.140.7:8080/logout', {
            method: 'GET',
            credentials: 'include' 
        });
        if (!response.ok) {
            return false;
        }
        return true;
    } catch (error){
      //console.log('error logout')
        return false;
    }
}

/*export function checkAuth() {
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
}*/

/*export function logout() {
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
}*/

/*export function registerUser(login, password, gender, age) {
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
}*/

/*export function loginUser(login, password) {
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
}*/
