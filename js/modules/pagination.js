const paginate = (products) => {
    console.log('products:', products);

    // let productCount = 9;
    // let currentPage = 1;

    // const productContainer = document.querySelector('.beer-cards-js');
    // const pagination = document.querySelector('.js-pagination');
    // const btnPrevPagination = document.querySelector('.js-pagination-btn-prev');
    // const btnNextPagination = document.querySelector('.js-pagination-btn-next');

    // const renderProducts =(products, container, numberOfProducts, page) => {
    //     productContainer.innerHTML = "";

    //     const firstProductIndex = numberOfProducts * page - numberOfProducts;
    //     console.log('firstProductIndex: ', firstProductIndex);

    //     const lastProductIndex = firstProductIndex + numberOfProducts;
    //     console.log('lastProductIndex: ', lastProductIndex);

    //     const productsOnPage = products.slice(firstProductIndex, lastProductIndex);
    //     console.log('productsOnPage: ', productsOnPage);


    // };

    // const renderPagination = (products, numberOfProducts) => {

    //     const pagesCount = Math.ceil(products.lenght / numberOfProducts);
    //     console.log('pagesCount : ', pagesCount);

    //     const ul = document.querySelector('.js-pagination-list');

    //     for (let i=1; i <= pagesCount; i++){
    //         const li = renderBtn(i);
    //         ul.append(li);

    //     }

        
    //     pagination.classList.remove('hidden');

    // };

    // const renderBtn = (page) =>{
    //     const li = document.createElement('li');
    //     li.classList.add('pagination-item beer__card product');
    //     li.textContent = page;

    //     if(currentPage === page){
    //         li.classList.add('active');
    //     }
    //     return li;

    // };

    // renderProducts(products, productContainer, productCount, currentPage);
    // renderPagination(products, productCount);
};

export{
    paginate
};