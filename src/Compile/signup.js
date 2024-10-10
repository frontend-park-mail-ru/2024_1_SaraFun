export default function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-section\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
if (inputType=='password') {
;pug_debug_line = 3;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"password\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Cinput type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 6;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 8;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "Ошибка: Введите пароль\u003C\u002Fp\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-password-error\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
;pug_debug_line = 11;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"login\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "Логин\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Cinput class=\".text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u002F\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 14;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 16;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\CustomInput\\CustomInput.pug";
pug_html = pug_html + "Ошибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Ch1 class=\"description\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Добро пожаловать!\u003C\u002Fh1\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_mixins["customInput"]('login', 'registration');
;pug_debug_line = 8;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_mixins["customInput"]('password', 'registration');
;pug_debug_line = 10;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"gender\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Пол\u003C\u002Flabel\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cdiv class=\"gender-selection\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" checked=\"checked\"\u002F\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Clabel for=\"male\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Мужской\u003C\u002Flabel\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"female\" name=\"gender\" value=\"female\"\u002F\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Clabel for=\"female\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Женский\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"gender-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Выберите пол\u003C\u002Fp\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"age\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Возраст\u003C\u002Flabel\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cinput type=\"range\" id=\"age\" name=\"age\" min=\"18\" max=\"100\" value=\"18\" oninput=\"this.nextElementSibling.value = this.value\"\u002F\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Coutput\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "18\u003C\u002Foutput\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cbutton type=\"button\" id=\"register-button\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Зарегистрироваться\u003C\u002Fbutton\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "У вас уже есть аккаунт? \u003C\u002Fspan\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Flogin\" id=\"link\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\\components\\ImageSection\\ImageSection.pug";







pug_html = pug_html + "\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}