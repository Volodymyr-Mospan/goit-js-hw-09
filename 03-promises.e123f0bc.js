!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("iU1Pc"),u={form:document.querySelector(".form"),firstDelay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btn:document.querySelector('button[type="submit"]')};function a(e,t){return new Promise((function(n,o){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}))}u.form.addEventListener("submit",(function(t){t.preventDefault(),u.btn.setAttribute("disabled",""),setTimeout((function(){var t=Number(u.firstDelay.value),n=1;a(n,t).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}));var o=setInterval((function(){n+=1,t+=Number(u.step.value),a(n,t).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n===Number(u.amount.value)&&(clearInterval(o),u.btn.removeAttribute("disabled"))}),u.step.value)}),u.firstDelay.value)}))}();
//# sourceMappingURL=03-promises.e123f0bc.js.map