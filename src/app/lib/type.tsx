export type Products = {
    slug ?: string;
    name : string;
    brand : string;
    description : string;
    rate : string;
    price : string;
    image : string;
    onclick ?:() => void ;
}