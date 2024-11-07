const cartData = () => {
    const cart = document.querySelector('.js-cart');
    const productsList = document.querySelector('.js-product-list');

    const updateCartItemCount = () =>{
    };
     updateCartItemCount();

    const addProductToCart = () => {
        productsList.addEventListener('click', (event) => {
            if(event.target.classList.contains('js-buy-button')){
                console.log(1);
            }
        });
    };

    addProductToCart();
};

export{
    cartData
};