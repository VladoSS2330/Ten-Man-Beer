function toggleBasketStatus(){

    const basketWrapper = document.querySelector('.basket-wrapper');
    const BasketEmptyBadge = document.querySelector('[data-basket-empty]');
    const orderForm = document.querySelector('#order-form');
    const cartTotal = document.querySelector('#cart-total');




    // перевірка чи є в кошику товар
    if(basketWrapper.children.length > 0){
        
        // видаляємо напис Кошик пустий,якщо в ньому є товар
        BasketEmptyBadge.style.display ='none';
        orderForm.style.display = 'flex';
        cartTotal.style.display = 'flex'
    } else{

        //Додаємо напис якщо кошик пустий
        BasketEmptyBadge.style.display = 'flex';
        orderForm.style.display = 'none';
        cartTotal.style.display = 'none'
    }

    
};
