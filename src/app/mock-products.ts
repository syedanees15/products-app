export interface Product {
    id?: string;
    name?: string;
    price?: number;
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Asana'
    },
    {
        id: '2',
        name: 'Segment'
    },
    {
        id: '3',
        name: 'Google Cloud'
    },
    {
        id: '4',
        name: 'Azure'
    },
    {
        id: '5',
        name: 'Xero'
    }
]