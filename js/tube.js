const handleCategory = async () => {
    const response = await fetch ("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    console.log(data);
    const btnContainer = document.getElementById('btn-container');
    const dataCategory = data.data;
    console.log(dataCategory);

    dataCategory.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button  onclick="handleLoadCategory('${category.category_id}')" 
        class="btn px-8 normal-case hover:bg-[#FF1F3D]">${category.category}</button>
        `;
        btnContainer.appendChild(div);   
    });

    
};


const handleLoadCategory = async (categoryId) => {
    // console.log(categoryId);
     const response = await fetch(
     `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
     );

    const data = await response.json();
    console.log(data.data);
    const cardContainer = document.getElementById('card-container');


    const hiddenDiv = document.getElementById('hiddenDiv')
    if(data.data.length === 0){
        hiddenDiv.classList.remove('hidden')
    }
    else{
        hiddenDiv.classList.add('hidden')
    }


    cardContainer.innerHTML = "";
    data.data?.forEach((songs) => {

        // console.log(songs);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="  bg-base-100 mb-8 ">
            <figure>
            <img class="h-40 w-80 rounded-lg"
                src=${songs?.thumbnail}
                alt="Songs"
            />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-base">
                    <img class="rounded-full h-10 w-10"
                        src=${songs?.authors[0].profile_picture}
                    />
                    ${songs?.title}
                </h2>
                <div>
                  

                 <div class=" class="pl-16 flex  gap-4"">
                   <p class="pl-12 flex flex-left gap-2 text-sm" >
                     ${songs?.authors[0].profile_name} 
                     ${songs?.authors[0]?.verified?'':'<img class="h-5 w-5" src="./images/verified.png">'}
                  </p>
                    <p class="px-12">
                        ${songs.others?.views} views
                    </p>
           </div>
     </div>
        `;
        cardContainer.appendChild(div);

    })
    console.log(cardContainer);
}



handleCategory ();
handleLoadCategory(1000);