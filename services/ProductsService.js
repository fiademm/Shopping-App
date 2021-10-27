const PRODUCTS = [
    {
        id: 100,
        name: 'Speed Bike',
        price: 220,
        image: require('../assets/products/bike1.jpg'),
        description: 'Just as the name implies, a very fast bike indeed.'
    },
    {
        id: 101,
        name: 'SweetHome Cupcake',
        price: 240,
        image: require('../assets/products/bike2.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 102,
        name: 'The Bike',
        price: 2,
        image: require('../assets/products/bike3.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 103,
        name: 'FastLane Speed Bike',
        price: 600,
        image: require('../assets/products/bike4.jpeg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}