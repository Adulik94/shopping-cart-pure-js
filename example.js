import {getFromBackEnd} from './util/http.js' 

const container = document.getElementById("container");
let carts = document.getElementById("cart");

const cart = [];

getFromBackEnd().then((res) => {
    let items = '';
    res.forEach(item => {            
      items += `
        <div class="gallery">
          <span class="text-center">${item.title}</span>
          <img src="${item.img}"/>
          <span class="text-center">${item.price}$</span>
          <button class="addToCart(${item.id})" id="${item.id}">Add to card</button>
        </div>
      `;
    })
    
    container.innerHTML = items;

   const allItems =document.getElementsByClassName("cart")
   for(let i= 0; i<allItems;i++){
     const phone =allItems[i]
     allItems.onclick= function(all){
       const currentElemId = all.target.dataset.id
       if(cart.includes(currentElemId)){
         return alert("Have in Cart")
       }else{
         cart.push(currentElemId)
       }
       cart.innerHTML =`<span>${cart.length}</span>`
     }
   }
 })
