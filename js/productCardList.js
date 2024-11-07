const cartWrapper = document.querySelector('.card-wrapper');

// Відслідковуємо натискання на сторінці
window.addEventListener('click', function(event) {
    // Перевіряємо, чи був клік по кнопці "Додати в кошик"
    if(event.target.hasAttribute('data-cart')) {
        // Знаходимо картку з товаром
        const card = event.target.closest('.card-item');

        // Збираємо дані товару
        const productInfo = {
            id: card.dataset.id || '01', // додай атрибут `data-id` до div.card-item або признач унікальний id
            imgSrc: card.querySelector('.product-image').getAttribute('src'),
            title: card.querySelector('.product-name').innerText,
            sore: card.querySelector('.product-sore').innerText,
            info: card.querySelector('.beer-info').innerText,
            litre: card.querySelector('.beer-litre').innerText,
            price: card.querySelector('.product-price').innerText,
            counter: card.querySelector('[data-counter]').innerText || '1',
        };

        // Перевіряємо, чи товар вже є в кошику
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            // Збільшуємо лічильник для товару, якщо він вже в кошику
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

            calcCartPrice();
            return; // Виходимо, щоб не додавати нову картку
        }

        // Якщо товар новий, додаємо його до кошика
        const cartItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-body">
                    <div class="cart-image">
                        <img class="cart-images" src="${productInfo.imgSrc}" alt="Product Image">
                    </div>
                    <div class="cart-text">
                        <h4 class="cart-subtitle beer-name">${productInfo.title}</h4>
                        <div class="beer-desc cart-desc">
                            <p class="sore">${productInfo.sore}</p>
                            <div class="beer-info">${productInfo.info}</div>
                        </div>
                    </div>
                    <div class="cart-prices">
                        <p class="price cart-price">${productInfo.price}</p>
                    </div>
                    <div class="quantity-container counter-wrapper">
                        <button class="quantity-btn" data-action="minus" id="decrease">-</button>
                        <div class="quantity" data-counter>${productInfo.counter}</div>
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

        // Відображення товару в кошику
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        // Оновлюємо статус кошика та розраховуємо загальну суму
        toggleCartStatus();
        calcCartPrice();
    }
});

// Оновлення кількості товару
document.querySelector('.beer__add-btn').addEventListener('click', function(event) {
    event.preventDefault();

    // Збираємо всі товари з кошика
    const itemsInCart = [];
    cartWrapper.querySelectorAll('.card-item').forEach(item => {
        const itemInfo = {
            id: item.dataset.id,
            imgSrc: item.querySelector('.product-image').getAttribute('src'),
            title: item.querySelector('.product-name').innerText,
            sore: item.querySelector('.sore').innerText,
            info: item.querySelector('.beer-info').innerText,
            price: item.querySelector('.price').innerText,
            quantity: item.querySelector('[data-counter]').innerText,
        };
        
        itemsInCart.push(itemInfo);
    });

    // Зберігаємо товари в localStorage та перенаправляємо на сторінку кошика
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart));
    window.location.href = 'basket.html';
});
