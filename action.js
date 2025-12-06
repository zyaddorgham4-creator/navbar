
let breakfast = document.getElementById('breakfast');

let soup =document.getElementById('soup');

let pasta = document.getElementById('pasta');

let pizza  =document.getElementById('pizza');

let burger =document.getElementById('burger');

let main_course = document.getElementById('main_course');

let show_all_breakfast  =document.getElementById('show_all_breakfast');

show_all_breakfast.addEventListener('click',function(){
    pasta.style.display ='none';
    burger.style.display ='none';
     pizza.style.display ='none';
    soup.style.display ='none';
    main_course.style.display = 'none';
    breakfast.style.display = '';

})

let show_all_soup = document.getElementById('show_all_soup');

show_all_soup.addEventListener('click',function(){
    pasta.style.display ='none';
     burger.style.display ='none';
    pizza.style.display ='none';
    breakfast.style.display ='none';
    main_course.style.display = 'none';
    soup.style.display ='';
   
})

let show_all_pasta = document.getElementById('show_all_pasta');

show_all_pasta.addEventListener('click',function(){
    pasta.style.display ='';
     burger.style.display ='none';
     pizza.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none';
     main_course.style.display = 'none';
})

let show_all = document.getElementById('show_all');

show_all.addEventListener('click',function(){
    pasta.style.display ='';
    breakfast.style.display ='';
    soup.style.display =''; 
    main_course.style.display = '';
     pizza.style.display ='';
      burger.style.display ='';

})

let show_main_course = document.getElementById('show_main_course');

show_main_course.addEventListener('click',function(){
      pasta.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none'; 
     pizza.style.display ='none';
      burger.style.display ='none';
    main_course.style.display = '';

})

let show_all_pizza = document.getElementById('show_all_pizza');

show_all_pizza.addEventListener('click',function(){
      pasta.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none'; 
    main_course.style.display = 'none';
     burger.style.display ='none';
     pizza.style.display ='';

})

let show_all_burger = document.getElementById('show_all_burger');

show_all_burger.addEventListener('click',function(){
    pasta.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none'; 
    main_course.style.display = 'none';
     pizza.style.display ='none';
     burger.style.display ='';

})


let input_search = document.getElementById('input_search');
input_search.onkeyup = function()
{
    
    if(input_search.value=="pizza"||input_search.value=="pizz"||input_search.value=="piz")
    {
    pasta.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none'; 
    main_course.style.display = 'none';
     burger.style.display ='none';
     pizza.style.display ='';

    }
    else if(input_search.value=="so"||input_search.value=="sou"||input_search.value=="soup")
    {
    pasta.style.display ='none';
     burger.style.display ='none';
    pizza.style.display ='none';
    breakfast.style.display ='none';
    main_course.style.display = 'none';
    soup.style.display ='';

    }else if(input_search.value=="pa"||input_search.value=="pas"||input_search.value=="pasta")
    {
    pasta.style.display ='';
     burger.style.display ='none';
     pizza.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none';
     main_course.style.display = 'none';

    }else if(input_search.value=="chicken"||input_search.value=="chi"||input_search.value=="ch")
        
    {
    pasta.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none'; 
     pizza.style.display ='none';
      burger.style.display ='none';
    main_course.style.display = '';

    }else if(input_search.value=="bu"||input_search.value=="bur"||input_search.value=="burger")
    {
    pasta.style.display ='none';
    breakfast.style.display ='none';
    soup.style.display ='none'; 
    main_course.style.display = 'none';
     pizza.style.display ='none';
     burger.style.display ='';
 
    }else{
    pasta.style.display ='';
    breakfast.style.display ='';
    soup.style.display =''; 
    main_course.style.display = '';
     pizza.style.display ='';
      burger.style.display ='';
     

    }
}


let cartItemsDiv = document.getElementById('cart-items')
let cart = [];

document.addEventListener('click',function(e){
    if(e.target.classList.contains('add-to-cart'))
    {
        let product = e.target.closest(".product");
        let name = product.dataset.name;
        let price = Number(product.dataset.price);
        let imgsrc = product.querySelector('img').src;
        let existing = cart.find(item=>item.name==name)
        if(existing)
        {
            existing.quantity++;
        }else{
            cart.push({name,price,img:imgsrc,quantity:1})
        }
        displayCart();
    }

    if(e.target.classList.contains('remove-btn'))
    {
        let name = e.target.dataset.name;
        removeFromCart(name);
        displayCart();
    }
})

function displayCart() {
  cartItemsDiv.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom:10px;">
        <img src="${item.img}" width="50" height="50" style="border-radius: 8px;">
        <div>
          <strong>${item.name}</strong><br>
          السعر: ${item.price} جنيه × ${item.quantity} = <b>${item.price * item.quantity}</b> جنيه
          <br>
          <button class="remove-btn" data-name="${item.name}" style="height:35px;width : 80px;background:red; color:white;border-raduis:10px; margin-top:5px;">حذف</button>
        </div>
      </div>
    `;
    cartItemsDiv.appendChild(div);
  });
}


function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  displayCart();
}
