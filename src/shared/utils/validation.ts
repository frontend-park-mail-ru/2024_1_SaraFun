/**
 * Validates if the given password meets the required criteria.
 * 
 * @param {string} password - The password to validate.
 * @returns {array} - Returns true if the password is valid, otherwise false.
 */
export function isValidPassword(password: string): string[] {
    const errors: string[] = [];

    if (!password) {
        errors.push("Пароль не должен быть пустым.");
    }
    if (password.length < 6 || password.length > 40) {
        errors.push("Пароль должен быть длиной от 6 до 40 символов.");
    }
    if (!/\d/.test(password)) {
        errors.push("Пароль должен содержать минимум одну цифру.");
    }
    for (let char of password) {
        if (!/[a-zA-Z0-9*?!$-]/.test(char)) {
            errors.push("Пароль содержит недопустимые специальные символы. Разрешены: ! ? * - $");
            break;
        }
    }

    return errors;
}


/**
 * Validates if the given login meets the required criteria.
 * 
 * @param {string} login - The login to validate.
 * @returns {array} - Returns true if the login is valid, otherwise false.
 */
export function isValidLogin(login: string): string[] {
    const errors: string[] = [];

    if (login.length < 5 || login.length > 25) {
        errors.push("Логин должен быть длиной от 5 до 25 символов.");
    }

    const invalidChars = /[^a-zA-Z0-9_-]/;
    if (invalidChars.test(login)) {
        errors.push("Логин может содержать только буквы, цифры, - и _.");
    }

    if ((login.startsWith('_') || login.startsWith('-')) || (login.endsWith('_') || login.endsWith('-'))) {
        errors.push("Специальные символы не могут быть в начале и в конце логина.");
    }

    if (/\d/.test(login.charAt(0))) {
		errors.push("Логин не может начинаться с цифры.");
	}

    return errors;
}