const renderProductCard = (product) => {
    const li = document.createElement('li');
    li.classList.add('beer__card', 'product');

    li.innerHTML = `
                            <div class="beer__card-id" data-id="${product.dataid}">
                                <a id="${product.id}" data-card href="./card-beerTest.html?id=${product.dataid}" class="beer-images">
                                    <img class="product-image" src="${product.photo[0]}" alt="Images-beer">
                                    <h4 class="beer-name name">${product.name}</h4>
                                </a>
      
                                <div class="beer-text">
                                    <div class="beer-desc">
                                        <p class="sore">
                                            ${product.sore}
                                        </p> 
                                        <div class="beer-info">
                                            <p>
                                               ${product.alcohol}
                                            </p>
                                            <p>
                                                ${product.og}
                                            </p>
                                            <p>
                                                ${product.ibu}
                                            </p>
                                        </div>
                                        
                                    </div>
                                   <p class="beer-litre">
                                    0.5L
                                   </p>
                                </div>
                                <div class="beer__price">
                                    <p class="price">
                                        ${product.price}
                                    </p>
                                      <button data-cart class=" beer__add-btn  js-buy-button">
                                           В кошик
                                        </button>
                                </div>
                                </div>
                           
    `;

    return li;
}

const appendProductCard = (product, container) => {
    container.append(product);
};

const renderProductCards = (products, container) => {
    
    products.forEach((product) => {
        const card = renderProductCard(product);
        // console.log('card: ', card);
        appendProductCard(card, container);
    });
};

export {
    renderProductCards
};