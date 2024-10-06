

const catagory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    const data = await response.json()
    displayCatagory(data.categories)
}


// display catagory 

const displayCatagory = async (data) => {
    const categryContainer = document.getElementById("catagory");

    data.forEach(item => {
        const btn = document.createElement("button");
        btn.classList = "btn m-2 border border-red-500"
        btn.innerText = item.category;
        categryContainer.appendChild(btn)
        
    });


}

catagory()