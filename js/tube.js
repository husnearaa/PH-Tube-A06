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
    cardContainer.innerHTML = ""
    data.data?.forEach((songs) => {
        // console.log(songs);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
            <figure>
            <img
                src=${songs?.thumbnail}
                alt="Songs"
            />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    <div>
                        <div class="w-14 rounded-full">
                        <img
                            src=${songs?.authors[0].profile_picture}
                        />
                        </div>
                    </div>
                    ${songs?.title}
                </h2>
                <div>
                    <p class="pl-16 flex gap-4">
                        ${songs?.authors[0].profile_name} <img class="h-5 w-5" src= "./images/verified.png" ${songs?.authors[0]?.verified[true]}>
                    </p>
                </div>
                    <p class="px-16">
                        ${songs.others?.views}
                    </p>
           </div>
     </div>
        `;
        cardContainer.appendChild(div);

    })
    console.log(cardContainer);
}



handleCategory ();