export interface SubTotal {
    productId: number,
    subTotal: number
}

export interface Product {
    id: number,
    name: string,
    originalCost?: string,
    cost: number,
    discount?: string,
    image: string,
    rating: string
}