import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const s=Number(t.target.elements.delay.value),m=i.elements.state.value;new Promise((e,o)=>{setTimeout(()=>{m==="fulfilled"?e(s):o(s)},s)}).then(e=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{r.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=2-snackbar.js.map
