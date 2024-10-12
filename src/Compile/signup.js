export default function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\\components\\ImageSection\\ImageSection.pug";
pug_mixins["imageSection"] = pug_interp = function(path){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\ImageSection\\ImageSection.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-section\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\ImageSection\\ImageSection.pug";
pug_html = pug_html + "\u003C!--img(src!=path, alt=\"Image\")--\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\ImageSection\\ImageSection.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FImage.svg\" alt=\"Image\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\ImageSection\\ImageSection.pug";
pug_html = pug_html + "\u003C!--img(src=`..\u002F..\u002Fassets\u002Fimg\u002F${path}` alt=\"Image\") будет работать...--\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 7;pug_debug_filename = "src\\components\\ImageSection\\ImageSection.pug";
pug_html = pug_html + "\u003C!--надо чинить--\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\BaseLogReg\\BaseLogReg.pug";
const pathToImage = "../../assets/img/Image.svg"
;pug_debug_line = 5;pug_debug_filename = "src\\components\\BaseLogReg\\BaseLogReg.pug";
pug_mixins["base"] = pug_interp = function(typeOfPage){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 6;pug_debug_filename = "src\\components\\BaseLogReg\\BaseLogReg.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\BaseLogReg\\BaseLogReg.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-section\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\\components\\BaseLogReg\\BaseLogReg.pug";
if (typeOfPage === 'signup') {
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
;pug_debug_line = 1;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + "\u003Ch1 class=\"description\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + "\u003Cbutton id=\"elemId\" type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + "\u003C!--не могу указать кастомный id для кнопки--\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
if (type=='login') {
;pug_debug_line = 3;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "У вас еще нет аккаунта? \u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Fregistration\" id=\"link\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
;pug_debug_line = 7;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "У вас уже есть аккаунт? \u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Flogin\" id=\"link\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 6;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_mixins["header"]('Добро пожаловать!');
;pug_debug_line = 9;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_mixins["customInput"]('login', 'registration');
;pug_debug_line = 10;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_mixins["customInput"]('password', 'registration');
;pug_debug_line = 1;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "\u003Ctext class=\".text-base\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "Пол";
;pug_debug_line = 2;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "\u003Cdiv class=\"gender-selection\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" checked=\"checked\"\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "\u003Clabel for=\"male\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "Мужской\u003C\u002Flabel\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"female\" name=\"gender\" value=\"female\"\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "\u003Clabel for=\"female\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "Женский\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"gender-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\GenderSelection\\GenderSelection.pug";
pug_html = pug_html + "Выберите пол\u003C\u002Fp\u003E\u003C\u002Ftext\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"age\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "Возраст\u003C\u002Flabel\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Cinput type=\"range\" id=\"age\" name=\"age\" min=\"18\" max=\"100\" value=\"18\" oninput=\"this.nextElementSibling.value = this.value\"\u002F\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "\u003Coutput\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_html = pug_html + "18\u003C\u002Foutput\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_mixins["textButton"]('Зарегистрироваться');
;pug_debug_line = 20;pug_debug_filename = "src\\components\\RegistrationForm\\RegistrationForm.pug";
pug_mixins["footerText"]('registration');
}
else
if (typeOfPage === 'login') {
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
;pug_debug_line = 1;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + "\u003Ch1 class=\"description\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\Header\\Header.pug";
pug_html = pug_html + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + "\u003Cbutton id=\"elemId\" type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + "\u003C!--не могу указать кастомный id для кнопки--\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
if (type=='login') {
;pug_debug_line = 3;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "У вас еще нет аккаунта? \u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Fregistration\" id=\"link\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
;pug_debug_line = 7;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "У вас уже есть аккаунт? \u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Flogin\" id=\"link\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\FooterText\\FooterText.pug";
pug_html = pug_html + "Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 6;pug_debug_filename = "src\\components\\LoginForm\\LoginForm.pug";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\LoginForm\\LoginForm.pug";
pug_mixins["header"]('С возвращением!');
;pug_debug_line = 9;pug_debug_filename = "src\\components\\LoginForm\\LoginForm.pug";
pug_mixins["customInput"]('login', 'login');
;pug_debug_line = 10;pug_debug_filename = "src\\components\\LoginForm\\LoginForm.pug";
pug_mixins["customInput"]('password', 'login');
;pug_debug_line = 11;pug_debug_filename = "src\\components\\LoginForm\\LoginForm.pug";
pug_mixins["textButton"]('Войти в аккаунт', 'login-button');
;pug_debug_line = 13;pug_debug_filename = "src\\components\\LoginForm\\LoginForm.pug";
pug_mixins["footerText"]('login');
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\\components\\BaseLogReg\\BaseLogReg.pug";
pug_mixins["imageSection"](pathToImage);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + "\u003Cbutton id=\"elemId\" type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\\components\\TextButton\\TextButton.pug";
pug_html = pug_html + "\u003C!--не могу указать кастомный id для кнопки--\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_mixins["navbar"] = pug_interp = function(isAuth){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 4;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav__logo\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"main-nav\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
if ((isAuth)) {
;pug_debug_line = 10;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Ffeed\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 13;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Flogin\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fsignup\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_html = pug_html + "Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
if ((isAuth)) {
;pug_debug_line = 18;pug_debug_filename = "src\\components\\Navbar\\Navbar.pug";
pug_mixins["textButton"]('Выйти из аккаунта', 'button-logout');
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug";
pug_mixins["navbar"](false);
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug";
pug_mixins["base"]('signup');} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}