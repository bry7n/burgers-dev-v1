const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMap = document.querySelector(".map-items")
const reduceButton = document.querySelector(".reduce-button")
const filterButton = document.querySelector(".filter-button")

function formatCurrency(value){
    const newValue = value.toLocaleString("pt-br",{
    style: "currency", currency: "BRL"
})

    return newValue
}

function mapAllItems(){
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)

    
}


function showAll(productsArray) {
    let myLi = " "
  productsArray.forEach((product) => {
    myLi += `
              <li>
                  <img  alt="burger1" src="${product.src}">
                  <p>${product.name}</p>
                  <p class="item-price">R$ ${formatCurrency(product.price)}</p>
              </li>
          
          `;
  });

  list.innerHTML = myLi;
}

function newList(){

    const filterJustVegan = menuOptions.filter ((items) => items.vegan === true)
    showAll(filterJustVegan)
}



function totalValueProducts(){
    const totalValue = menuOptions.reduce((acc, curr) =>  acc + curr.price || acc + newPrices , 0)


    list.innerHTML = `
        <li>
        <p>O Valor total dos itens é: R$ ${formatCurrency (totalValue)}</p>
        </li>
    `
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));

buttonMap.addEventListener("click", mapAllItems);

reduceButton.addEventListener("click", totalValueProducts)

filterButton.addEventListener("click", newList)
