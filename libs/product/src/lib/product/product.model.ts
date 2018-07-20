export class Product {
    id: string;
    name: string;
    description: string;
    price: { sale: number, purchase: number };
    quantity: number;
    stock: { minimum: number, maximum: number }
    categories: string[];
    images: [{
        default: boolean,
        url: string,
    }];
    isFavorite: boolean;
    color: string;
    suppliers//: // criar modelo para tamanho fornecedor
    note: string;
    size: number; // criar modelo para tamanho
    active: boolean;
    constructor() {
    }

}
