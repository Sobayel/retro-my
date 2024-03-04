const loadNews = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await response.json();
    // console.log(data.posts);
    const allData = data.posts;
    const newsContainer = document.getElementById("news-container");
    allData.forEach((item)=>{
        // console.log(item)
        const div = document.createElement("div");
        div.classList.add("singleContent");
        div.innerHTML=`
                        <div class="flex">
                            <div class="indicator mr-3">
                                <span class="indicator-item badge ${item.isActive? "badge-success": "badge-warning"} "></span> 
                                <div class="grid w-14 h-14 rounded-full bg-base-300 place-items-center"><img class="rounded-2xl" src="${item.image}" alt=""></div>
                              </div>
                            <div>
                                <div class="flex gap-10 text-xl">
                                    <h5 class="text-[#12132D99] font-semibold">#${item.category}</h5>
                                    <p class="text-[#12132D99] font-semibold">Author:<span>${item.author.name}</span></p>
                                </div>
                                <div>
                                    <h2 class="font-bold text-2xl text-[#12132D]">
                                        ${item.title}
                                    </h2>
                                </div>
                                <div>
                                    <p class="text-[#12132D99]">${item.description}</p>
                                </div>
                                <div class="border-t-4 border-dashed mb-2 mt-2"></div>
                                <div class="flex justify-between">
                                    <div class="flex gap-6">
                                        <div class="flex gap-1">
                                            <img src="./images/Vector (2).png" alt="">
                                            <h3 class="text-2xl text-[#12132D99] ">${item.comment_count}</h3>
                                          </div>
                                          <div class="flex gap-1">
                                            <img src="./images/Group 16.png" alt="">
                                            <h3 class="text-2xl text-[#12132D99] ">${item.view_count}</h3>
                                          </div>
                                          <div class="flex gap-1">
                                            <img src="./images/Group 18.png" alt="">
                                            <h3 class="text-2xl text-[#12132D99] ">${item.posted_time}</h3>
                                          </div>
                                    </div>
                                    <div id="read">
                                        <button  onclick="clickHandle('${item.title}', ${item.view_count})"><img src="./images/Group 40106.png" alt=""></button>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
        newsContainer.appendChild(div);
    });
};

const handleSearch =() =>{
    const value = document.getElementById("search-box").value;
    if(value==""){
        (value);
    }else{
        alert("Please enter a valid category");
    }
};

// read increment
function clickHandle(title,count){
    const currentScore = document.getElementById('select-read');
    const currentScoreText = currentScore.innerText;
    const currentScoreTextInt = parseInt(currentScoreText);
    const currentNewScore = currentScoreTextInt + 1;
    currentScore.innerText = currentNewScore;

    const wrapper = document.getElementById('summery')
    const  content = document.createElement('div')
    content.innerHTML = ` <div class="flex justify-between font-semibold">
    <p id="showTitle" class="p text-xm text-[#12132D99]">${title}</p>
    <p id="showView" class="p text-[#12132D99]">${count}</p>
  </div>`
  wrapper.appendChild(content)
}



// latestNews section
const latestNews = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await response.json();
    // console.log(data);
    const latestData = data;
    const newsContainer = document.getElementById("latest-container");
    latestData.forEach((item)=>{
        // console.log(item)
        const div = document.createElement("div");
        div.classList.add("latestContent");
        div.innerHTML=`
        <div>
        <div class="px-10 pt-10">
            <img src="${item.cover_image}" alt="Shoes" class="rounded-xl" />
      </div>
          <div class="card-body">
              <div class="flex gap-2">
                  <img src="./images/Frame.png" alt="">
                  <p class="text-[#12132D99]">${item.author.posted_date ?? "No publish date"}</p>
              </div>
            <div>
              <h2 class="card-title font-semibold">${item.title}</h2>
            <p class="text-[#12132D99]">${item.description}</p>
            </div>
            <div class="card-actions flex gap-3">
              <div class="w-14 h-14">
                  <img class="rounded-full" src="${item.profile_image}" alt="">
              </div>
              <div>
                  <h3 class="font-semibold text-black">${item.author.name }</h3>
                  <p class="text-[#12132D99]">${item.author.designation ??"Unknown"}</p>
              </div>
            </div>
          </div>
    </div>            
        `;
        newsContainer.appendChild(div);
    });
};

latestNews();
loadNews();