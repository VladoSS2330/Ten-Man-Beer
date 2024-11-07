function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart__wrapper')
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    const cartTotal = document.querySelector('#cart-total');




    // перевірка чи є в кошику товар
    if(cartWrapper.children.length > 0){
        
        // видаляємо напис Кошик пустий,якщо в ньому є товар
        cartEmptyBadge.style.display ='none';
        orderForm.style.display = 'flex';
        cartTotal.style.display = 'flex'
    } else{

        //Додаємо напис якщо кошик пустий
        cartEmptyBadge.style.display = '';
        orderForm.style.display = 'none';
        cartTotal.style.display = 'none'
    }
};
