function calcCardTotal() {
    const checkoutWrapper = document.querySelector('.checkout-wrapper');
    const cardItems = document.querySelectorAll('.checkout-cart');
    const totalPriceEl = document.querySelector('.total-price');


    let totalPrice = 0;
    
    cardItems.forEach(function (item){
        
        // знаходимо кількість товару 
       const amountEl = item.querySelector('.number-product');


        // знаходимо ціну товару 
       const priceEl = item.querySelector('.price');

        // знаходимо ціну одного товару
       const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
       
       totalPrice += currentPrice;
    })

    //задаємо кінечну суму замовлення
    totalPriceEl.innerText = totalPrice;
}
document.addEventListener('DOMContentLoaded', function() {
    const checkoutWrapper = document.querySelector('.checkout-wrapper');
    const storedItems = JSON.parse(localStorage.getItem('cardItems'));

    localStorage.clear();
    if (storedItems) {
        storedItems.forEach(productInfo => {
            const cartItemHTML = `<div class="checkout-cart" data-id="${productInfo.id}">
                <div class="checkout-cart-body">
                    <div class="checkout-cart-image">
                        <img class="checkout-cart-images" src="${productInfo.imgSrc}" alt="Images-beer">
                    </div>
                    <div class="checkout-cart-content">
                        <h4 class="checkout-cart-subtitle ">${productInfo.title}</h4>        
                        <div class="checkout-cart-info">
                            <p class="number-product">${productInfo.number} шт</p>
                            <p class="price">${productInfo.price}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            checkoutWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
           
                                           
                                        
                                
        });
    }

    calcCardTotal();
    

    
});
const cityRegionMap = {
    kyiv: ['Київська'],
    lviv: ['Львівська'],
    odessa: ['Одеська'],
    kharkiv: ['Харківська'],
    dnipro: ['Дніпровська']
};

const citySelect = document.getElementById('city');
const regionSelect = document.getElementById('region');

citySelect.addEventListener('change', function() {
    const selectedCity = citySelect.value;
    const regions = cityRegionMap[selectedCity] || [];
    regionSelect.innerHTML = '<option value="" disabled selected>Виберіть область</option>';

    regions.forEach(function(region) {
        const option = document.createElement('option');
        option.value = region.toLowerCase();
        option.textContent = region;
        regionSelect.appendChild(option);
    });
});
document.querySelector('.checkout__form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Замовлення прийнято. З вами зв\'яжуться, щоб його підтвердити.');
});
