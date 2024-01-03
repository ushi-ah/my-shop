
export enum Colors {
    RED = 'red',
    BLACK = 'black',
    GRAY = 'gray',
    WHITE = "white",
    GOLD = 'gold',
    BLUE = 'blue',
}

export interface ProductCard {
    id: number;
    description: string;
    price: number;
    image: string;
    style: string;
    color: Colors;

}

export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    id?: number;
    description?: string;
    price?: number;
    image?: string;
    style?: string;
    color?: Colors;    
    quantity: number;
}