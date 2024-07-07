//Delete
const eliminarPruduct = (id) =>{
    return fetch("http://localhost:3000/products",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        }

    })
    .then((res) => res.json())
    .catch((err)=>err.condole.log(err));
}
///

function deleteCard (id) {

    const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML =`
                    <div class="img-container">
                        <img src="${image}" alt="${name}">
                    </div>

                    <div class="card-container--info">
                        <p>${name}</p>
                        <div class="card-container--value">
                            <p>$ ${price}</p>
                            <button class="eliminar delete-button" data-id="${id}">
                                <img src="img/eliminar.svg" alt="eliminar">
                            </button>

                        </div>
                    </div>`;
     productContainer.removeChild(card);
};
//
///

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    
    servicesProducts.createProducts(name,price,image)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});


//
const btnEliminar = document.querySelector(".products-container");

btnEliminar.addEventListener("click", eliminarCard);
        function eliminarCard () {
         alert("diste click en eliminar");
        };
