const cartWrapper = document.querySelector('.cart__wrapper');


// Функція для лічильника біля кошику
function updateCartCount() {
    const cartCountElement = document.querySelector('.card-count');
    let itemCount = 0;

    // Підсумовуємо всі лічильники товарів у кошику
    cartWrapper.querySelectorAll('.cart-item [data-counter]').forEach(counter => {
        itemCount += parseInt(counter.innerText);
    });

    // Оновлюємо лічильник біля кошика
    cartCountElement.textContent = itemCount;
}


// Відслідковуємо натискання на сторінці
window.addEventListener('click', function(event){
    // Перевіряємо чи був клік при натисканні саме на кнопку Додати в кошик
    if(event.target.hasAttribute('data-cart')){

        // знаходимо картку з товаром,в середині якої був клік по кнопці

       const card = event.target.closest('.beer__card-id')
       
        // збираємо данні з товара і записуємо їх в єдинний обєкт productInfo

        const productInfo = {
            id: card.dataset.id,
            imgSrc:card.querySelector('.product-image').getAttribute('src'),
            title:card.querySelector('.beer-name').innerText,
            sore:card.querySelector('.sore').innerText,
            info:card.querySelector('.beer-info').innerText,
            litre:card.querySelector('.beer-litre').innerText,
            price:card.querySelector('.price').innerText,
            // counter: card.querySelector('[data-counter').innerText,
        };
        //Перевіряєм чи є товар вже в кошику
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        


        // якщо товар є в кошику
        
        if (itemInCart) {
            // Якщо товар вже є, збільшуємо його лічильник і виходимо з функції
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + 1;
            // додаємо розрахунок суми
            
            calcCartPrice();
            updateCartCount();
            return; // Виходимо, щоб не додавати нову картку
            
        } 
        

    

    //зібранні данні
    const cartItemHTML =` <div class="cart-item" data-id="${productInfo.id}">
                                <div class="cart-body">
                                    <div class="cart-image">
                                        <img class="cart-images" src="${productInfo.imgSrc}" alt="Images-beer">
                                    </div>
                                    <div class="cart-text">
                                        <h4 class="cart-subtitle beer-name">
                                           ${productInfo.title}
                                        </h4>
                                        <div class="beer-desc cart-desc">
                                            <p class="sore">
                                            ${productInfo.sore}
                                            </p> 
                                            <div class="beer-info">
                                            ${productInfo.info}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart-prices">
                                        <p class="price cart-price">
                                        ${productInfo.price}
                                        </p>
                                    </div>
                                    <div class="quantity-container counter-wrapper">
                                            <button class="quantity-btn" data-action="minus" id="decrease">-</button>
                                            <div class="quantity" data-counter="" id="quantity-value">1</div>
                                            <button class="quantity-btn" data-action="plus" id="increase">+</button>
                                        </div>
                                    
                                    <div class="cart-close-btn">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 7.67371L22.3263 5L15 12.3263L7.67371 5L5 7.67371L12.3263 15L5 22.3263L7.67371 25L15 17.6737L22.3263 25L25 22.3263L17.6737 15L25 7.67371Z" fill="white" />
                                            </svg>
                                    </div>
                                </div>
                            </div>
    
    `;

    //відображення товару в кошику
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        
    //відображаєм статус кошика пуста / повна
    toggleCartStatus();
    calcCartPrice();
    updateCartCount();
}
});
document.querySelector('.btn-primary').addEventListener('click', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку кнопки
    
    // Збираємо всі товари з кошика
    const itemsInCart = [];
    cartWrapper.querySelectorAll('.cart-item').forEach(item => {
        const itemInfo = {
            id: item.dataset.id,
            imgSrc: item.querySelector('.cart-images').getAttribute('src'),
            title: item.querySelector('.beer-name').innerText,
            sore: item.querySelector('.sore').innerText,
            info: item.querySelector('.beer-info').innerText,
            price: item.querySelector('.cart-price').innerText,
            quantity: item.querySelector('[data-counter]').innerText,
        };
        itemsInCart.push(itemInfo);
    });
    //відображаєм статус кошика пуста / повна
   

    calcCartPrice();
    updateCartCount();

    // Зберігаємо товари в localStorage
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart));

    // toggleBasketStatus();
    
    // Перенаправляємо на сторінку кошика
    window.location.href = 'basket.html';
});
