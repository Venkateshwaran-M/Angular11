export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
export const products: Product[] = [
    {
    id:1,
    name: 'phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
    },
    {
        
        id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras' 
    },
    {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: 'It is a phone that comprimises all the needs from youth to old aged people'
    }
];
    
