async function logout() {
    try {
        const response = await fetch('http://5.188.140.7:8080/logout', {
            method: 'GET',
            credentials: 'include' 
        });
        if (!response.ok) {
            return false;
        }
        return true;
    }
    catch (error){
        //console.log('error logout')
        return false;
    }
}

async function loginUser(login, password) {
    try {
        //console.log(login, password);
        const response = await fetch('http://5.188.140.7:8080/signin', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials : 'include',
            body: JSON.stringify({'username': login, 'password': password}),
        });

        if (!response.ok) {
            return false
        }

        //console.log('Успешно авторизовался');
        await renderNavBar();
        navigateTo('/feed');
        return true
    } catch (error) {
        // console.error('Ошибка:', error);
        return false
    }
}

async function checkAuth() {
    try {
        const response = await fetch('http://5.188.140.7:8080/checkauth', {
            method: 'GET',
            credentials: 'include' 
            });
        if (!response.ok) {
            return false;
        }
        return true;
    }
    catch (error){
        //console.log('error auth')
        return false;
    }
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

async function registerUser(login, password, gender, age) {
    try {
      //console.log(login, password, gender, age);
      const response = await fetch('http://5.188.140.7:8080/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials : 'include',
        body: JSON.stringify({'username': login, 'password': password, 'gender': gender, 'age': parseInt(age)}),
      });
    
      if (!response.ok) {
        // throw new Error('Ошибка регистрации');
      }
      //console.log('Успешно зарегистрировался');
      await renderNavBar();
      navigateTo('/feed');
    
    } catch (error) {
      console.error('Ошибка:', error);
    }
}