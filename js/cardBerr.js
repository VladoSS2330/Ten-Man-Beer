
// Отримуємо ID товару з URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Масив товарів
const products = [
    {   
        dataid: '01',
        id: 'beercard1',
        name: 'BERRY BLOOD: tomato and pepper(PICO DE GALLO edition)',
        price: ['116 uan'],
        photo:[ "img/beer1.png"],
        sore: ['Sore Fruited Gose'],
        alcohol: ['ALC. 4%'],
        og: ['OG: 12,5%'],
        ibu: ['IBU:12'],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '02',
        id: 'beercard2',
        name: 'BERRY BLOOD: lingonberry and orange',
        price: '116 uan',
        photo: ['img/beer2.png'],
        sore: ['Sore Fruited Gose'],
        alcohol: ['ALC. 4.6%'],
        og: ['OG: 16%'],
        ibu: ['IBU:12'],
        style:[ "SOUR FRUITED GOSE"],
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '03',
        id: "beercard1" ,
        name: "BROWN PORTHER:HAZELNUT EDITION",
        price: "110 uan",
        photo: "img/beer4.png",
        sore:"Sore:Brown Porter",
        alcohol:"ALC. 5.7%",
        og:" OG: 16.5%",              
        ibu: "IBU:25",
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '04',
        id: "beercard2",
        name: "ten men ipa",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer5.png"
        ],
        sore:[
            "Sore:IPA WEST COAST",
        ],
        alcohol:[
            "ALC. 6%"
        ],
        og:[
            " OG: 15%"
        ],                      
        ibu:[
            "IBU:50"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '05',
        id: "beercard3",
        name: " NOT FOR BREAKFAST: black currant cheesecake",
        price: [
            "124 uan"
        ],
        photo: [
            "img/beer6.png"
        ],
        sore: [
            "Sore:Pastry Sour Fruited",
        ],
        alcohol:[
            "ALC:4.6%"
        ],
        og:[
            "OG:16%"
        ],
        ibu:[
            "IBU:16"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '06',
        id: "beercard4",
        name: "DRIVE&DIVE",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer7.png"
        ],
        sore:[
            "IPA East Coast",
        ],
        alcohol:[
            "ALC. 5.2%"
        ],
        og:[
            " OG: 5%"
        ],                      
        ibu:[
            "IBU:0"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '07',
        id: "beercard5",
        name: "MOLOKO STOUT",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer8.png"
        ],
        sore:[
            "Milk Stout",
        ],
        alcohol:[
            "ALC. 5.2%"
        ],
        og:[
            " OG: 18%"
        ],                      
        ibu:[
            "IBU:18"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '08',
        id: "beercard6",
        name: "ten men ipa",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer5.png"
        ],
        sore:[
            "Sore:IPA WEST COAST",
        ],
        alcohol:[
            "ALC. 6%"
        ],
        og:[
            " OG: 15%"
        ],                      
        ibu:[
            "IBU:50"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '09',
        id: "beercard7",
        name: "BROWN PORTHER:HAZELNUT EDITION",
        price: [
            "110 uan"
        ],
        photo: [
            "img/beer4.png"
        ],
        sore:[
            "Sore:Brown Porter",
        ],
        alcohol:[
            "ALC. 5.7%"
        ],
        og:[
            " OG: 16.5%"
        ],                      
        ibu:[
            "IBU:25"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '10',
        id: "beercard8",
        name: "ten men ipa",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer5.png"
        ],
        sore:[
            "Sore:IPA WEST COAST",
        ],
        alcohol:[
            "ALC. 6%"
        ],
        og:[
            " OG: 15%"
        ],                      
        ibu:[
            "IBU:50"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '11',
        id: "beercard9",
        name: " NOT FOR BREAKFAST: black currant cheesecake",
        price: [
            "124 uan"
        ],
        photo: [
            "img/beer6.png"
        ],
        sore: [
            "Sore:Pastry Sour Fruited",
        ],
        alcohol:[
            "ALC:4.6%"
        ],
        og:[
            "OG:16%"
        ],
        ibu:[
            "IBU:16"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '12',
        id: "beercard10",
        name: "DRIVE&DIVE",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer7.png"
        ],
        sore:[
            "IPA East Coast",
        ],
        alcohol:[
            "ALC. 5.2%"
        ],
        og:[
            " OG: 5%"
        ],                      
        ibu:[
            "IBU:0"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '13',
        id: "beercard11",
        name: "MOLOKO STOUT",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer8.png"
        ],
        sore:[
            "Milk Stout",
        ],
        alcohol:[
            "ALC. 5.2%"
        ],
        og:[
            " OG: 18%"
        ],                      
        ibu:[
            "IBU:18"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '14',
        id: "beercard12",
        name: "ten men ipa",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer5.png"
        ],
        sore:[
            "Sore:IPA WEST COAST",
        ],
        alcohol:[
            "ALC. 6%"
        ],
        og:[
            " OG: 15%"
        ],                      
        ibu:[
            "IBU:50"
        ], 
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."

    },
    {   
        dataid: '15',
        id: "beercard13",
        name: "BROWN PORTHER:HAZELNUT EDITION",
        price: [
            "110 uan"
        ],
        photo: [
            "img/beer4.png"
        ],
        sore:[
            "Sore:Brown Porter",
        ],
        alcohol:[
            "ALC. 5.7%"
        ],
        og:[
            " OG: 16.5%"
        ],                      
        ibu:[
            "IBU:25"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '16',
        id: "beercard14",
        name: "ten men ipa",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer5.png"
        ],
        sore:[
            "Sore:IPA WEST COAST",
        ],
        alcohol:[
            "ALC. 6%"
        ],
        og:[
            " OG: 15%"
        ],                      
        ibu:[
            "IBU:50"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '17',
        id: "beercard15",
        name: " NOT FOR BREAKFAST: black currant cheesecake",
        price: [
            "124 uan"
        ],
        photo: [
            "img/beer6.png"
        ],
        sore: [
            "Sore:Pastry Sour Fruited",
        ],
        alcohol:[
            "ALC:4.6%"
        ],
        og:[
            "OG:16%"
        ],
        ibu:[
            "IBU:16"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
    {   
        dataid: '18',
        id: "beercard16",
        name: "DRIVE&DIVE",
        price: [
            "109 uan"
        ],
        photo: [
            "img/beer7.png"
        ],
        sore:[
            "IPA East Coast",
        ],
        alcohol:[
            "ALC. 5.2%"
        ],
        og:[
            " OG: 5%"
        ],                      
        ibu:[
            "IBU:0"
        ],
        style: "SOUR FRUITED GOSE",
        description: "Напівтемне нефільтроване та непастеризоване пиво. Класична без додаткових добавок томатка...",
        ingredients: "Склад: вода, солод, томатна паста, перець, сіль, коріандр, хміль, дріжджі."
    },
];

// Знаходимо товар за ID
const product = products.find(p => p.dataid === productId);

if (product) {
    // Вставляємо дані товару в HTML
    document.querySelector('.product-image').src = product.photo;
    document.querySelector('.product-name').textContent = product.name;
    document.querySelector('.product-sore').textContent = product.sore;
    document.querySelector('.product-alcohol').textContent = product.alcohol;
    document.querySelector('.product-og').textContent = product.og;
    document.querySelector('.product-ibu').textContent = product.ibu;
    document.querySelector('.product-style').textContent = product.style;
    document.querySelector('.product-description').textContent = product.description;
    document.querySelector('.product-ingredients').textContent = product.ingredients;
    document.querySelector('.product-price').textContent = product.price;
} else {
    console.error('Product not found');
}
