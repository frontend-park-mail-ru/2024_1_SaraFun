export default function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (user) {
      ;pug_debug_line = 1;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"tinder--card\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-section\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002Fassets\u002Fimg\u002Fimage.svg\" alt=\"Image\" draggable=\"false\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-section-tinder\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = user.username) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Ctext-base\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "Пол: ";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = user.gender) ? "" : pug_interp)) + "\u003C\u002Ftext-base\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Ctext-base\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "Возраст: ";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = user.age) ? "" : pug_interp)) + "\u003C\u002Ftext-base\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "user" in locals_for_with ?
        locals_for_with.user :
        typeof user !== 'undefined' ? user : undefined));
    ;} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}