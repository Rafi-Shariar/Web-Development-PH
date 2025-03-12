function logCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => {
        displayCatagory(data.categories);
    })
    
}


function displayCatagory(categories){

    const categatory_container = document.getElementById('categatory-container');

    for(let cat of categories){

        const categatoryDiv = document.createElement('div');
        categatoryDiv.innerHTML = `
        <button class="btn hover:bg-red-500 hover:text-white">${cat.category}</button>
        `
        categatory_container.appendChild(categatoryDiv);

    }
}
logCategories();
