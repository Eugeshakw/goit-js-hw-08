function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function I(e){return c=e,u=setTimeout(S,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function S(){var e=p();if(h(e))return j(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function j(e){return u=void 0,v&&o?b(e):(o=r=void 0,a)}function O(){var e=p(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return I(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:j(p())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},I=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};const h={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')},S={},j=e(t)((()=>{S.email=h.emailInput.value.trim(),S.message=h.messageInput.value.trim(),b("feedback-form-state",S)}),500);h.form.addEventListener("input",j),document.addEventListener("DOMContentLoaded",(function(e){const t=I("feedback-form-state");t&&(h.emailInput.value=t.email,h.messageInput.value=t.message)})),h.form.addEventListener("submit",(function(e){e.preventDefault(),I("feedback-form-state"),localStorage.removeItem("feedback-form-state"),h.emailInput.value="",h.messageInput.value="",console.log(S)}));
//# sourceMappingURL=03-feedback.1adc57e2.js.map
