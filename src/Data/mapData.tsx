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


export const categories:Categories[]=[
    {name:'Mercedes',descrption:'mecerdes benz'},
    {name:'Toyota',descrption:'mecerdes benz'},
    {name:'Lexus',descrption:'mecerdes benz'},
    {name:'Honda',descrption:'mecerdes benz'}
]

export const featuredData:Car[] =[
{productId:1,  imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:"2021 Mercedes AMG E53",alt:'Benz',price:162000,discount:false},
{productId:2,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Toyota Venza LE',alt:'Toyota',price:34455,discount:false},
{productId:3,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2020 Lexus RX 350',alt:'Lexus',price:44150,discount:false},
{productId:4,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Honda Accord LX',alt:'Honda',price:27615,discount:false}

]

export const offersData:Car[]=[
    {productId:5,  imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:"2021 Mercedes AMG E53",alt:'Benz',price:162000,discount:3},
    {productId:6,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Toyota Venza LE',alt:'Toyota',price:34455,discount:4.5},
    {productId:7,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2020 Lexus RX 350',alt:'Lexus',price:44150,discount:6},
    {productId:8,imgSrc:'https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png',name:'2022 Honda Accord LX',alt:'Honda',price:27615,discount:5}

]