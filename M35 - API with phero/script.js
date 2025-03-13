//for laoding categorier
function logCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCatagory(data.categories);
    });
}
// for loading Vedio
function loadVedioes() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
      displayVedioes(data.videos);
    });
}

function displayCatagory(categories) {
  const categatory_container = document.getElementById("categatory-container");
  for (let cat of categories) {
    const categatoryDiv = document.createElement("div");
    categatoryDiv.innerHTML = `
        <button class="btn hover:bg-red-500 hover:text-white">${cat.category}</button>
        `;
    categatory_container.appendChild(categatoryDiv);
  }
}

const displayVedioes = (vedioes) => {
  const vedio_container = document.getElementById("Vedio-Container");
  vedioes.forEach((vedio) => {
    //creating element
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
                </div>


        `;

    vedio_container.append(vedioCard);
  });
};

logCategories();
loadVedioes();

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
