const cart = document.querySelector('.js-cart');
const overplay = document.querySelector('.overplay');
const openCartButton = document.querySelector('.js-cart-btn');
const closeCartElements = document.querySelectorAll('.js-close-cart');


const openCart = () =>{
    openCartButton.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        cart.classList.add('active');
        overplay.classList.add('active');
    });
};
const closeCart = () => {
    closeCartElements.forEach((item) => {
        item.addEventListener('click', () => {
            document.body.style.overflow = '';
            cart.classList.remove('active');
            overplay.classList.remove('active');
        });
    });
    
};

export{
    openCart,
    closeCart
};