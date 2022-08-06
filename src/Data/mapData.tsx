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
discount:boolean|number
}

export interface Cart{
    productId:number;
    qty:number;
}


export const categories:Categories[]=[
    {name:'Mercedes',descrption:'Mecerdes benz Sedans, SUVs and Coupes are all available with awesome prices and discounts.They are the perfect blend of luxury and hardiness '},
    {name:'Toyota',descrption:'Amazing discounts on Toyota sedans, high perfomance, fuel efficiency and hardiness are all you can expect from purchasing one of out Toyota vehicles '},
    {name:'Lexus',descrption:'Often referred to as the luxury brand of toyota, latest lexus cars are available here with stunning looks to rival the Mercedes and hardiness comparable to Toyota '},
    {name:'Honda',descrption:'Sleek interior and exterior design totally defines the Honda vehicle, you can get these sleek vehicles and mouth watering prices here. '}
]

export const carData:Car[] =[
{productId:1,  imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:"2021 Mercedes AMG E53",alt:'Benz',price:162000,discount:false},
{productId:2,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Toyota Venza LE',alt:'Toyota',price:34455,discount:false},
{productId:3,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2020 Lexus RX 350',alt:'Lexus',price:44150,discount:false},
{productId:4,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Honda Accord LX',alt:'Honda',price:27615,discount:false},
{productId:5,  imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:"2021 Mercedes AMG E53",alt:'Benz',price:162000,discount:false},
{productId:6,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Toyota Venza LE',alt:'Toyota',price:34455,discount:false},
{productId:7,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2020 Lexus RX 350',alt:'Lexus',price:44150,discount:false},
{productId:8,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Honda Accord LX',alt:'Honda',price:27615,discount:false},
    {productId:9,  imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:"2021 Mercedes AMG E53",alt:'Benz',price:162000,discount:3},
    {productId:10,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Toyota Venza LE',alt:'Toyota',price:34455,discount:4.5},
    {productId:11,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2020 Lexus RX 350',alt:'Lexus',price:44150,discount:6},
    {productId:12,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Honda Accord LX',alt:'Honda',price:27615,discount:5}

]
