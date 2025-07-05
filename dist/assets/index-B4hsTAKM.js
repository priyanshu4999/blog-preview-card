(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const t={name:"Greg Hooper",tag:"Learning",pub:"Published 21 Dec 2023",title:"HTML & CSS foundations",paragraph:`These languages are the backbone 
    of every website, defining structure, content, and presentation.`};function c(){const i=document.createElement("main");return i.id="app",i.innerHTML=`
    <div id="-main-card" class="-border -flex-col -card">
        <img class="-bordershape" id="-abstract-art" src="/assets/images/illustration-article.svg" alt = "-Abstract image-" />
        <div id="-learning" class="-mini-card -bordershape -margin-vertical">${t.tag}</div>
        <p>${t.pub}</p>
        <h1>${t.title}</h1>
        <p>${t.paragraph}</p>
        <div id="-profile" class="-flex-row -profile">
            <img id="-face" src="/assets/images/image-avatar.webp" style="height : 80%"  />
            <h3 class="-margin-horizontal" >${t.name}</h3>
        </div>
     </div>
    
    `,i}document.body.appendChild(c());
