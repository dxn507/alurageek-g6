import { servicesProducts } from "../services/product-services.js";
const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");


function createCard (name, price, image, id) {

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
     productContainer.appendChild(card);

     //
     const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", async () => {
        try {
            await servicesProducts.deleteProduct(id);
            card.remove(); // Remove card from the DOM
        } catch (err) {
            console.log("Error deleting product:", err);
        }
    });


     return card;
};


const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
      //  console.log(listProducts);
        listProducts.forEach (product => {
            productContainer.appendChild(
                createCard(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )
            )
            
        }); 
      

    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    
    servicesProducts.createProducts(name,price,image)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});


render();



