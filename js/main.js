
// додаємо прослушку на всю сторінку 
window.addEventListener('click', function (event){

    if (event.target.closest('.cart-close-btn')) {
        // Знаходимо найближчий елемент товару
        const cartItem = event.target.closest('.cart-item');
        if (cartItem) {
          cartItem.remove(); // Видаляємо товар 
          updateCartCount();
          calcCartPrice();
          //відображаєм статус кошика пуста / повна
          toggleCartStatus();
         
          calcCartPrice();
        }
      }
    let counter;

    // перевірка чи клік був по кнопкам мінус або плюс
    if(event.target.dataset.action === 'plus' ||event.target.dataset.action === 'minus' ){
        // знаходим наш лічильник
        const counterWrapper = event.target.closest('.counter-wrapper');
            
            
        // знаходим дів с числом лічильника
        counter = counterWrapper.querySelector('[data-counter]');
        
    };
    
   
    
    //Перевірка чи елемент по якому був клілк був плюсом
    if(event.target.dataset.action === 'plus'){
      counter.innerText = ++counter.innerText;
      updateCartCount();
      
    }

    //Перевірка чи елемент по якому був клілк був мінусом
    if(event.target.dataset.action === 'minus'){
         
        
       if (parseInt(counter.innerText) > 1 ){
            counter.innerText = --counter.innerText;
            updateCartCount();
        }
        // Перевірка на товар якій знаходиться в кошику
        else if(event.target.closest('.cart__wrapper') && parseInt(counter.innerText) === 1 ){
            //  Видаляємо товар з кошика
            event.target.closest('.cart-item').remove();
            updateCartCount();

            //відображаєм статус кошика пуста / повна
            toggleCartStatus();


            // розрахунок суми замовлення
            calcCartPrice();
         }

       
    }
    

    //перевірка клік на + чи на - в кошику
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart__wrapper')){
      calcCartPrice()
      
    }
});




