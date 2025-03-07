const ColorButtons = document.querySelectorAll(".color-btn");

for(let i = 0; i < ColorButtons.length; i++){
    const clrBtn = ColorButtons[i];

    clrBtn.addEventListener('click' , function(event){
        
        for(let j=0; j < ColorButtons.length; j++){
            ColorButtons[j].classList.remove("border-yellow-800");
        }

        event.target.classList.add("border-yellow-800");
        

        //Changing Image
        const productImage = document.getElementById("image-container");
        const clr = event.target.id;
        productImage.src = `./images/${clr}.png`;
       
        
    })

  

}


//Size Button Customization
function WriteSizeCus(size){
    const Sizes = ['S' , 'M', 'L','XL'];

    for(let i=0; i<Sizes.length; i++){
        const button = document.getElementById(`Size-${Sizes[i]}`);
        const element = Sizes[i];

        if(size == element){
            button.classList.add(`border-purple-700`);
        }
        else{
            button.classList.remove(`border-purple-700`);
        }
        
    }
   
}


//Quantity Button
const quantityBtn = document.querySelectorAll(`.quantity-btn`);
for(let btn of quantityBtn){
    btn.addEventListener('click',function(event){

        const amount = event.target.innerText == "+" ? 1 : -1;
        
        let quantity = document.getElementById(`quantity`).innerText;
        quantity = parseInt(quantity);
        quantity +=amount;

        if(quantity>0){
            document.getElementById(`quantity`).innerText = quantity;
        }
        else document.getElementById(`quantity`).innerText = 0;

        
    })
}


//Add to card
const CartItems = [];

const AddToCardBtn = document.getElementById(`AddToCardBtn`);
AddToCardBtn.addEventListener('click',function(){

   
    let quantity = document.getElementById(`quantity`).innerText;

    if(parseInt(quantity) > 0){
    document.getElementById(`Checkout-container`).classList.remove(`hidden`);
    document.getElementById(`checkoutAmount`).innerText = quantity;


    //Finding cart listing items
    const SelectedColorButton = document.querySelector(`button.border-yellow-800.w-6`);
    const SelectedColor = SelectedColorButton.id;
    
    const SelectedImage = `./images/${SelectedColor}.png`;

    const SelectedSizeButton = document.querySelector(`button.size_btn.border-purple-700`);

    const SelectedSize = SelectedSizeButton.innerText.split(' ')[0];
    
    const SelectedPrice = parseInt(SelectedSizeButton.innerText.split(' ')[1].split('$')[1]);
    
    const SelectedQuantity = parseInt(document.getElementById(`quantity`).innerText);

    const TotalPrice = SelectedPrice * quantity;

    const Cart = {
        image : SelectedImage,
        Title : `Classy Modern Smart Watch`,
        color : SelectedColor,
        size  : SelectedSize,
        quantity : SelectedQuantity,
        price : quantity * SelectedPrice
    };
    CartItems.push(Cart);
    console.log(CartItems);
    

    }
    else{
        alert("Please add product...");
    }


})


//Modal
document.getElementById(`CheckoutBtn`).addEventListener('click',function(){

    

    const cartContainer = document.getElementById("cart-items");

    for(let i=0; i<CartItems.length; i++){

        const item = CartItems[i];

        const row = document.createElement(`tr`);
        row.classList.add(`border-b`);


        row.innerHTML = `
        <td class="py-2 px-4">
      <div class="flex items-center space-x-2">
        <img class="h-12 w-12 object-cover rounded-md" src="${item.image}" alt="">
        <span class="font-semibold">${item.title}</span>
      </div>
    </td>
    <td class="py-2 px-4">${item.color}</td>
    <td class="py-2 px-4">${item.size}</td>
    <td class="py-2 px-4">${item.quantity}</td>
    <td class="py-2 px-4">$${item.price}</td>
    `;

    console.log(row);
    

    cartContainer.appendChild(row);

    }

    document.getElementById(`cart-modal`).classList.remove(`hidden`);

});

document
  .getElementById("continue-shopping")
  .addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
  });