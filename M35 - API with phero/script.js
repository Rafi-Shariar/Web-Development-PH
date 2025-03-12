function logCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => {
        displayCatagory(data.categories);
    })
    
}


function displayCatagory(categories){

    for(const cat of categories){
        
        
    }

}
logCategories();
