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
        console.log(amount);
        
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

const AddToCardBtn = document.getElementById(`AddToCardBtn`);
AddToCardBtn.addEventListener('click',function(){

   

    let quantity = document.getElementById(`quantity`).innerText;

    if(parseInt(quantity) > 0){
    document.getElementById(`Checkout-container`).classList.remove(`hidden`);
    document.getElementById(`checkoutAmount`).innerText = quantity;
    }
    else{
        alert("Please add product...");
    }


})