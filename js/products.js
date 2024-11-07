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
        ibu: ['IBU:12']
    },
    {
        dataid: '02',
        id: 'beercard2',
        name: 'BERRY BLOOD: lingonberry and orange',
        price: '116 uan',
        photo: ['img/beer2.png'],
        sore: 'Sore Fruited Gose',
        alcohol: 'ALC. 4.6%',
        og: 'OG: 16%',
        ibu: 'IBU:12'
    },
    {   
        dataid: '03',
        id: "beercard1" ,
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    
];


export default products;