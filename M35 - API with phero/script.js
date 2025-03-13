//for laoding categorier
function logCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCatagory(data.categories);
    });
}
// for loading Vedio
function loadVedioes(videoTitle="") {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${videoTitle}`)
    .then((res) => res.json())
    .then((data) => {
      displayVedioes(data.videos);
    });
}

function loadCategoryVedioes(id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then((data) => {
        
        buttonHandle();
        const clickedButton = document.getElementById(`${id}`).classList.add('active')
        
        displayVedioes(data.category);

        
    })
    


}

function loadVedioDetails(id){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${id}`)
    .then(res => res.json())
    .then((data)=>{
        showVedioDetails(data);
    })
    
}

 function buttonHandle(){

    const AllBtn = document.querySelectorAll(`#categatory-container .btn`);
    
    AllBtn.forEach(btn => {
        btn.classList.remove(`active`);
    })
    

}





function displayCatagory(categories) {
  const categatory_container = document.getElementById("categatory-container");
  for (let cat of categories) {
    const categatoryDiv = document.createElement("div");
    categatoryDiv.innerHTML = `
        <button class="btn hover:bg-red-500 hover:text-white" onclick = "loadCategoryVedioes(${cat.category_id})" id="${cat.category_id}">${cat.category}</button>
        `;
    categatory_container.appendChild(categatoryDiv);
  }
}

const displayVedioes = (vedioes) => {

    NoContent = document.getElementById('NoContent').classList.add('hidden');
    
  const vedio_container = document.getElementById("Vedio-Container");
  vedio_container.innerHTML = ``;

  if(vedioes.length == 0){

        vedio_container.innerHTML = `
        <div id="NoContent" class="text-center">

          <img src="./Icon.png" alt="" class="mx-auto ">
          <h1 class="text-4xl font-semibold">Opps Sorry !! There is no vedio here</h1>

        </div>
        `
        return;
  }

  vedioes.forEach((vedio) => {
    const vedioCard = document.createElement("div");
    vedioCard.innerHTML = `
        
               <div class="card bg-base-100 h-80 shadow-sm">
                  <figure>
                    <img
                      src="${vedio.thumbnail}" />
                  </figure>

                  <div class="card-body">
                    <div class="flex gap-5">
                     <div class="avatar">
                         <div class="w-12 rounded-full">
                             <img src="${vedio.authors[0].profile_picture}" />
                         </div>
                    </div>
                     <h2 class="card-title">${vedio.title}</h2>
                    </div>
                    <div id="View-details">

                     <h2>${vedio.authors[0].profile_name}</h2>
                     <h3>${vedio.others.views}</h3>

                    </div>
                  </div>
                  <div class="text-center mb-4">
                       <button onclick="loadVedioDetails('${vedio.video_id}')" class="btn btn-wide">Show Details</button>
                  </div>
                </div>


        `;

    vedio_container.append(vedioCard);
  });
};

function showVedioDetails(vedio){

    console.log(vedio);
    

    document.getElementById(`vedioDetails`).showModal();

    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = `
      <h1 class="text-xl font-semibold">${vedio.video.title}</h2>
      <p class="text-base">${vedio.video.description}</p>
    `



}
logCategories();


document.getElementById('SearchInput').addEventListener('keyup', (e)=>{

    const input = e.target.value;
    loadVedioes()
    
})














// loadVedioes();

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


// {
//     "status": true,
//     "message": "Successfully fetched the video with video id 'aaac'",
//     "video": {
//         "category_id": "1003",
//         "video_id": "aaac",
//         "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//         "title": "Laugh at My Pain",
//         "authors": [
//             {
//                 "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//                 "profile_name": "Kevin Hart",
//                 "verified": false
//             }
//         ],
//         "others": {
//             "views": "1.1K",
//             "posted_date": "13885"
//         },
//         "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
//     }
// }