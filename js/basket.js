document.addEventListener('DOMContentLoaded', function() {
    const basketWrapper = document.querySelector('.basket-wrapper');
    const storedItems = JSON.parse(localStorage.getItem('cartItems'));

    localStorage.clear();
    if (storedItems) {
        storedItems.forEach(productInfo => {
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-body">
                    <div class="cart-image">
                        <img class="cart-images" src="${productInfo.imgSrc}" alt="Images-beer">
                    </div>
                    <div class="cart-text">
                        <h4 class="cart-subtitle beer-name">${productInfo.title}</h4>   
                    </div>
                    <div class="cart-prices">
                        <p class="price cart-price">${productInfo.price}</p>
                    </div>
                    <div class="quantity-container counter-wrapper">
                        <button class="quantity-btn" data-action="minus" id="decrease">-</button>
                        <div class="quantity" data-counter="" id="quantity-value">${productInfo.quantity}</div>
                        <button class="quantity-btn" data-action="plus" id="increase">+</button>
                    </div>
                    <div class="cart-close-btn">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 7.67371L22.3263 5L15 12.3263L7.67371 5L5 7.67371L12.3263 15L5 22.3263L7.67371 25L15 17.6737L22.3263 25L25 22.3263L17.6737 15L25 7.67371Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>`;
            basketWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        });
    }

    // Після додавання товарів можна викликати функції для оновлення статусу та розрахунку ціни
    
    
    calcCartPrice();
    toggleBasketStatus();
    

    
});
// додаємо прослушку на всю сторінку
window.addEventListener('click', function (event) {

    // Видалення товару при натисканні на кнопку закриття
    if (event.target.closest('.cart-close-btn')) {
        // Знаходимо найближчий елемент товару
        const cartItem = event.target.closest('.cart-item');
        if (cartItem) {
            cartItem.remove(); // Видаляємо товар 

            // Відображення статусу кошика пуста / повна
            toggleBasketStatus(); // Викликаємо toggleBasketStatus замість toggleCartStatus
            calcCartPrice(); // Оновлюємо загальну суму замовлення
        }
    }

    let counter;

    // Перевірка, чи клік був по кнопкам "мінус" або "плюс"
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Знаходимо наш лічильник
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Знаходимо div з числом лічильника
        counter = counterWrapper.querySelector('[data-counter]');
    }

    // Перевірка, чи елемент, по якому був клік, є кнопкою "плюс"
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Перевірка, чи елемент, по якому був клік, є кнопкою "мінус"
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
        // Перевірка на товар, який знаходиться в кошику
        else if (event.target.closest('.basket-wrapper') && parseInt(counter.innerText) === 1) {
            // Видаляємо товар з кошика
            event.target.closest('.cart-item').remove();

            // Відображення статусу кошика пуста / повна
            toggleBasketStatus(); 

            // Розрахунок суми замовлення
            calcCartPrice();
        }
    }

    // Перевірка клік на "+" чи на "-" в кошику
    if (event.target.hasAttribute('data-action') && event.target.closest('.basket-wrapper')) {
        calcCartPrice();
    }
});
document.querySelector('.btn-primary').addEventListener('click', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку кнопки
    const basketWrapper = document.querySelector('.basket-wrapper');
    // Збираємо всі товари з кошика
    const itemsInCard = [];
    basketWrapper.querySelectorAll('.cart-item').forEach(item => {
        const itemInfo = {
            id: item.dataset.id,
            imgSrc: item.querySelector('.cart-images').getAttribute('src'),
            title: item.querySelector('.beer-name').innerText,
            number: item.querySelector('.quantity').innerText,
            info: item.querySelector('.beer-info'),
            price: item.querySelector('.cart-price').innerText,
            quantity: item.querySelector('[data-counter]').innerText,
        };
        itemsInCard.push(itemInfo);
    });
    //відображаєм статус кошика пуста / повна
   

    // calcCartPrice();

    // Зберігаємо товари в localStorage
    localStorage.setItem('cardItems', JSON.stringify(itemsInCard));

    // toggleBasketStatus();
    
    // Перенаправляємо на сторінку кошика
    window.location.href = 'checkout.html';
});


