interface Categories{
    name:string;
    descrption:string;

}
 export interface Car{
    productId:number
imgSrc:string;
name:string;
alt:string
price:number
discount:boolean|number;
qty:number
}



export const categories:Categories[]=[
    {name:'Mercedes',descrption:'Mecerdes benz inclding Sedans, SUVs and Coupes are all available with awesome prices and discounts. They are the perfect blend of luxury and hardiness. '},
    {name:'Toyota',descrption:'Amazing discounts on Toyota sedans, high perfomance, fuel efficiency and hardiness are all you can expect from purchasing one of our Toyota vehicles. '},
    {name:'Lexus',descrption:'Often referred to as the luxury brand of toyota, latest lexus cars are available here with stunning looks to rival the Mercedes and hardiness comparable to Toyota. '},
    {name:'Honda',descrption:'Sleek interior and exterior design totally defines the Honda vehicle, you can get these sleek vehicles and mouth watering prices here. '}
]

export const carData:Car[] =[
{productId:1,  imgSrc:require('../Cars/amg-e53.jpg'),name:"2021 Mercedes AMG E53",alt:'Benz',price:162000,discount:false,qty:1},
{productId:2,imgSrc:require('../Cars/2022-venza.jpg'),name:'2019 Toyota Highlander',alt:'Toyota',price:34455,discount:false,qty:1},
{productId:3,imgSrc:require('../Cars/2020-rx350.jpg'),name:'2020 Lexus RX 350',alt:'Lexus',price:44150,discount:false,qty:1},
{productId:4,imgSrc:require('../Cars/2021_Honda_Accord.jpg'),name:'2021 Honda Accord LX',alt:'Honda',price:27615,discount:false,qty:1},
{productId:5,  imgSrc:require('../Cars/2018-c300.jpg'),name:"2018 Mercedes Benz C300 ",alt:'Benz',price:16000,discount:false,qty:1},
{productId:6,imgSrc:require('../Cars/corrola-2019.jpg'),name:'2019 Toyota Corrolla',alt:'Toyota',price:14455,discount:false,qty:1},
{productId:7,imgSrc:require('../Cars/ml-350.jpg'),name:'2019 Mercedes Benz ML 350',alt:'Benz',price:40500,discount:2,qty:1},
{productId:8,imgSrc:require('../Cars/es350.jpg'),name:' 2019 Lexus es350',alt:'Lexus',price:41875,discount:4,qty:1},
{productId:9,  imgSrc:require('../Cars/2017-mercedes-benz-c300-cabriolet.jpg'),name:"2017 Mercedes C300 cabriolet ",alt:'Benz',price:22000,discount:3,qty:1},
{productId:10,imgSrc:require('../Cars/2018-camry.jpg'),name:'2018 Toyota Camry LE',alt:'Toyota',price:17500,discount:4.5,qty:1},
{productId:11,imgSrc:require('../Cars/gx460.jpg'),name:'2015 Lexus GX 460',alt:'Lexus',price:44150,discount:6,qty:1},
{productId:12,imgSrc:require('../Cars/honda-civic.jpg'),name:'2021 Honda Civic',alt:'Honda',price:27615,discount:5,qty:1}

]
