const t={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled",""),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled",""),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.aa3274ae.js.map
