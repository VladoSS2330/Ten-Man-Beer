function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart__wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');


    let totalPrice = 0;
    
    cartItems.forEach(function (item){
        
        // знаходимо кількість товару 
       const amountEl = item.querySelector('[data-counter]');


        // знаходимо ціну товару 
       const priceEl = item.querySelector('.cart-price');

        // знаходимо ціну одного товару
       const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
       
       totalPrice += currentPrice;
    })

    //задаємо кінечну суму замовлення
    totalPriceEl.innerText = totalPrice;
}