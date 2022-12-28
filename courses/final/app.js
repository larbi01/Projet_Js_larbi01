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
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img}  alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
            
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join(" ");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}



function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {

        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

const searchInput = document.getElementById('input');

input.addEventListener('keyup', function() {
  const input = searchInput.value ;
  const result = menu.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
  console.log(input);
  diplayMenuItems(result);
});


const rangeV = document.getElementById('range');
const error = document.getElementById('error_prix');
rangeV.addEventListener('click', function(){
  
  const rValue = rangeV.value ;
  console.log(rValue);
  const hold = document.getElementById('holder');
  hold.innerHTML = "value : " + rValue + "$";
  const menuRange = menu.filter(function (menuItem) {
    // console.log(menuItem.category);
    if (menuItem.price <= rValue) {
      error.style.display = 'none';
      return menuItem;
      
      }
    else if( rValue<6.99){
      error.style.display = 'block';
      error.innerHTML = 'Aucun Element avec ce prix' ;
    }
      })
    diplayMenuItems(menuRange);
  
})

    const slide = document.querySelector("slide");
    const output = document.querySelector("output");
    let valeur = document.getElementById('slide').Value;
    
    console.log(valeur);



