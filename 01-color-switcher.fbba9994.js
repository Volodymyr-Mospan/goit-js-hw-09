const t={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStop.setAttribute("disabled",""),t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled",""),t.btnStop.removeAttribute("disabled"),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",""),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.fbba9994.js.map
