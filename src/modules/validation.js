/**
 * Validates if the given password meets the required criteria.
 * 
 * @param {string} password - The password to validate.
 * @returns {boolean} - Returns true if the password is valid, otherwise false.
 */
export function isValidPassword(password) {
  if (!password) {
    return false;
  }
  if (password.length < 6 || password.length > 40) {
    return false;
  }

  if (!/\d/.test(password)) {
    return false;
  }

  for (let char of password) {
    if (!/[a-zA-Z0-9*?!$]/.test(char)) {
      return false;
    }
  }

  return true;
}

/**
 * Validates if the given login meets the required criteria.
 * 
 * @param {string} login - The login to validate.
 * @returns {boolean} - Returns true if the login is valid, otherwise false.
 */
export function isValidLogin(login) {
  if (login.length < 5 || login.length > 15) {
    return false;
  }
    
  const invalidChars = /[^a-zA-Z0-9_-]/;
  if (invalidChars.test(login)) {
    return false;
  }
    
  if (login.startsWith('_') || login.startsWith('-') || login.endsWith('_') || login.endsWith('-')) {
    return false;
  }
    
  if (/\d/.test(login.charAt(0))) {
    return false;
  }
    
  return true;
}