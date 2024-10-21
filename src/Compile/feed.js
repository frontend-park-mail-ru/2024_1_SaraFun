export default function template(locals) {var pug_html = '', pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
  var locals_for_with = (locals || {});
    
  (function (users) {
    ;pug_debug_line = 1;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
    pug_mixins['card'] = pug_interp = function(username, gender, age){
      var block = (this && this.block), attributes = (this && this.attributes) || {};
      ;pug_debug_line = 2;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + '\u003Cdiv class="tinder--card"\u003E';
      ;pug_debug_line = 3;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + '\u003Cdiv class="image-section"\u003E';
      ;pug_debug_line = 4;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002Fimage.svg" alt="Image" draggable="false"\u002F\u003E\u003C\u002Fdiv\u003E';
      ;pug_debug_line = 5;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + '\u003Cdiv class="form-section-tinder"\u003E';
      ;pug_debug_line = 6;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + '\u003Ch1\u003E';
      ;pug_debug_line = 6;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + (null == (pug_interp = username) ? '' : pug_interp) + '\u003C\u002Fh1\u003E';
      ;pug_debug_line = 7;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + '\u003Ctext-base\u003E';
      ;pug_debug_line = 7;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + 'Пол: ';
      ;pug_debug_line = 7;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + (null == (pug_interp = gender) ? '' : pug_interp) + '\u003C\u002Ftext-base\u003E';
      ;pug_debug_line = 8;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + '\u003Ctext-base\u003E';
      ;pug_debug_line = 8;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + 'Возраст: ';
      ;pug_debug_line = 8;pug_debug_filename = 'src\\components\\SwipeCard\\SwipeCard.pug';
      pug_html = pug_html + (null == (pug_interp = age) ? '' : pug_interp) + '\u003C\u002Ftext-base\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E';
    };
    ;pug_debug_line = 1;pug_debug_filename = 'src\\components\\TextButton\\TextButton.pug';







    ;pug_debug_line = 3;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
    pug_mixins['navbar'] = pug_interp = function(isAuth){
      var block = (this && this.block), attributes = (this && this.attributes) || {};
      ;pug_debug_line = 4;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
      pug_html = pug_html + '\u003Cdiv class="nav"\u003E';
      ;pug_debug_line = 5;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
      pug_html = pug_html + '\u003Cdiv class="nav__logo"\u003E';
      ;pug_debug_line = 6;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
      pug_html = pug_html + '\u003Cimg src="..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg" alt="logo"\u002F\u003E\u003C\u002Fdiv\u003E';
      ;pug_debug_line = 7;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
      pug_html = pug_html + '\u003Cdiv class="main-nav"\u003E';
      ;pug_debug_line = 8;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
      pug_html = pug_html + '\u003Cul\u003E';
      ;pug_debug_line = 9;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
      if ((isAuth)) {
        ;pug_debug_line = 10;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
        ;pug_debug_line = 11;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003Ca href="\u002Ffeed"\u003E';
        ;pug_debug_line = 11;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + 'Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
      }
      else {
        ;pug_debug_line = 13;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
        ;pug_debug_line = 14;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003Ca href="\u002Flogin"\u003E';
        ;pug_debug_line = 14;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + 'Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
        ;pug_debug_line = 15;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
        ;pug_debug_line = 16;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003Ca href="\u002Fsignup"\u003E';
        ;pug_debug_line = 16;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + 'Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
      }
      pug_html = pug_html + '\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E';
      ;pug_debug_line = 17;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
      if ((isAuth)) {
        ;pug_debug_line = 18;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003Cbutton id="button-logout" type="button"\u003E';
        ;pug_debug_line = 18;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + 'Выйти из аккаунта\u003C\u002Fbutton\u003E';
        ;pug_debug_line = 19;pug_debug_filename = 'src\\components\\Navbar\\Navbar.pug';
        pug_html = pug_html + '\u003C!--+textButton(\'Выйти из аккаунта\', \'button-logout\')--\u003E';
      }
      pug_html = pug_html + '\u003C\u002Fdiv\u003E';
    };
    ;pug_debug_line = 4;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_mixins['navbar'](true);
    ;pug_debug_line = 6;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Cdiv class="tinder"\u003E';
    ;pug_debug_line = 7;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Cdiv class="tinder--cards"\u003E';
    ;pug_debug_line = 8;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    // iterate users
    ;(function(){
      var $$obj = users;
      if ('number' === typeof $$obj.length) {
        for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
          var user = $$obj[pug_index0];
          ;pug_debug_line = 9;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
          pug_mixins['card'](user.username, user.gender, user.age);
        }
      } else {
        var $$l = 0;
        for (var pug_index0 in $$obj) {
          $$l++;
          var user = $$obj[pug_index0];
          ;pug_debug_line = 9;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
          pug_mixins['card'](user.username, user.gender, user.age);
        }
      }
    }).call(this);

    pug_html = pug_html + '\u003C\u002Fdiv\u003E';
    ;pug_debug_line = 10;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Cdiv class="tinder--buttons"\u003E';
    ;pug_debug_line = 11;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Cbutton id="nope"\u003E';
    ;pug_debug_line = 12;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Ci class="fa fa-remove"\u003E';
    ;pug_debug_line = 13;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FX.svg" alt="X"\u002F\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E';
    ;pug_debug_line = 14;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Cbutton id="love"\u003E';
    ;pug_debug_line = 15;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Ci class="fa fa-heart"\u003E';
    ;pug_debug_line = 16;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
    pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FHeart.svg" alt="Heart"\u002F\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E';
  }.call(this, 'users' in locals_for_with ?
    locals_for_with.users :
    typeof users !== 'undefined' ? users : undefined));
  ;} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}