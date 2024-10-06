const catagory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  const data = await response.json();
  displayCatagory(data.categories);
};


function convertTime(time){
    const hour = parseInt(time / 3600);
    let remainSec = parseInt(time % 3600);
    const minute = parseInt(remainSec / 60);
    remainSec = remainSec % 60;
    return `${hour} hour ${minute} minute ${remainSec} second`;
    
}

// display catagory

const displayCatagory = async (data) => {
  const categryContainer = document.getElementById("catagory");

  data.forEach((item) => {
    const btn = document.createElement("button");
    btn.classList = "btn m-2 border border-red-500";
    btn.innerText = item.category;
    categryContainer.appendChild(btn);
  });
};

catagory();

// video catagory

const getVideo = async () => {
 
        const response = await fetch(
            "https://openapi.programming-hero.com/api/phero-tube/videos"
          );
          const data = await response.json();
          displayVideo(data.videos);


};

// display video

const displayVideo = (video) => {
  const videoContainer = document.getElementById("video");
  
  video.forEach((videos) => {
    //   console.log(videos);
    const card = document.createElement("div");
    // console.log(video[5])
    console.log(videos.authors[0])
    card.classList = 'card card-compact bg-base-100  shadow-xl'
    card.innerHTML = `
             <figure class = "h-[200px] relative">
    <img class = w-full h-full object-cover
      src="${videos.thumbnail}"
      alt="Shoes" />
      ${videos.others.posted_date?.length == 0 ? "" : `<span class = "absolute bg-black text-white p-1 rounded right-2 bottom-2">
        ${convertTime(videos.others.posted_date)}
        </span>`}
  </figure>
  <div class=" px-0 py-2 ">
    <div class = "flex gap-5" >
        <img class = 'w-[50px] h-[50px] rounded-full object-cover' src =${videos.authors[0].profile_picture}/>
        </dib>
        
    <div>
        <h2 class = "font-bold" >${videos.title}</h2>
        <div class= "flex items-center gap-2" >
        <p>${videos.authors[0].profile_name}</p>
        ${videos.authors[0].verified === true? `<img class = "w-5" src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />` : ""}
        </div>
        <p>${videos.others.views} Views</p>
    </div>
    
  </div> 
        `;
        videoContainer.append(card)
  });


};

getVideo();


// {
//     "category_id": "1003",
//     "video_id": "aaaf",
//     "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
//     "title": "Sticks & Stones",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
//             "profile_name": "Dave Chappelle",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "113K",
//         "posted_date": ""
//     },
//     "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
// }