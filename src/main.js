import './style.css'

const blog = {
    name : "Greg Hooper",
    tag : "Learning",
    pub : "Published 21 Dec 2023",
    title : "HTML & CSS foundations",
    paragraph : `These languages are the backbone 
    of every website, defining structure, content, and presentation.`, 
} 


function createAppElement(){
    const app = document.createElement('main');


    app.id = 'app';

    app.innerHTML = `
    <div id="-main-card" class="-border -flex-col -card">
        <img class="-bordershape" id="-abstract-art" src="/assets/images/illustration-article.svg" alt = "-Abstract image-" />
        <div id="-learning" class="-mini-card -bordershape -margin-vertical">${blog.tag}</div>
        <p>${blog.pub}</p>
        <h1>${blog.title}</h1>
        <p>${blog.paragraph}</p>
        <div id="-profile" class="-flex-row -profile">
            <img id="-face" src="/assets/images/image-avatar.webp" style="height : 80%"  />
            <h3 class="-margin-horizontal" >${blog.name}</h3>
        </div>
     </div>
    
    `;

    return app;


}

document.body.appendChild(createAppElement())