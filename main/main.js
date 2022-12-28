const menu = [
    {
      id: 1,
      title: "Java Script",
      category: "js",
      price: 40.99,
      img: "./images/js1.jpeg",
      desc: `What is Javascript ? `,
    },
    {
      id: 2,
      title: "HTML",
      category: "html",
      price: 13.99,
      img: "./images/html1.jpeg",
      desc: `Basics of HTML`,
    },
    {
      id: 3,
      title: "HTML elements",
      category: "html",
      price: 6.99,
      img: "./images/html2.jpeg",
      desc: `HTML elements and tags`,
    },
    {
      id: 4,
      title: "CSS",
      category: "css",
      price: 50.99,
      img: "./images/css1.jpeg",
      desc: `CSS Selectors `,
    },
    {
      id: 5,
      title: "Java Script",
      category: "js",
      price: 22.99,
      img: "./images/js2.jpeg",
      desc: `Variables and Data Type of Javascript `,
    },
    {
      id: 6,
      title: "Javascript Objects",
      category: "js",
      price: 18.99,
      img: "./images/js3.jpeg",
      desc: `Javascript Operators and Conditions`,
    },
    {
        id: 7,
        title: "HTML Attributes",
        category: "html",
        price: 8.99,
        img: "./images/html3.jpeg",
        desc: `HTML Attributes And Values `,
      },
      {
        id: 8,
        title: "CSS Properties",
        category: "css",
        price: 12.99,
        img: "./images/css2.jpeg",
        desc: `Important CSS Properties`,
      },
      {
        id: 9,
        title: "Javascript Arrays",
        category: "js",
        price: 16.99,
        img: "./images/js4.jpeg",
        desc: `Javascript Objects And Arrays`,
      },
      {
        id: 10,
        title: "CSS style",
        category: "css",
        price: 22.99,
        img: "./images/css3.jpeg",
        desc: `CSS Animations and Styling`,
      },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {

for(var i=0; i< 3;i++){

    var x= Math.floor(Math.random() * menu.length);

/*console.log(x); 
console.log(menu[x]);*/

sectionCenter.innerHTML = `<article class="menu-item">
<img src=${menu[x].img} alt=${menu[x].title} class="photo" />
<div class="item-info">
  <header>
    <h4>${menu[x].title}</h4>
    
  </header>
  <p class="item-text">
    ${menu[x].desc}
  </p>
</div>
</article>
<article class="menu-item">
<img src=${menu[x-1].img} alt=${menu[x-1].title} class="photo" />
<div class="item-info">
  <header>
    <h4>${menu[x-1].title}</h4>
    
  </header>
  <p class="item-text">
    ${menu[x-1].desc}
  </p>
  <br><br><br>
</div>
</article>`; 
}
});