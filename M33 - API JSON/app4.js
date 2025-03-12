const handlePost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        DisplayPost(data);
    })

}

const DisplayPost =(posts)=>{

    const postContainer = document.getElementById(`postContainer`);
    
    for(const post of posts){
        
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <h1 class="card-inside">${post.title}</h1>
        <p>${post.body}</p>
        <button>Show More </button>
        `;

        postContainer.appendChild(div);
        
    }
}

handlePost();