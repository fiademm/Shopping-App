const PRODUCTS = [
    {
        id: 100,
        name: 'Long Converse',
        price: 10.00,
        color: "Dark Blue",
        size: 41,
        image: require('../assets/ldblue.png'),
        description: 'Just as the name implies, a very fast bike indeed.'
    },
    {
        id: 101,
        name: 'Long Converse',
        price: 11.00,
        color: 'All Black',
        size: 42,
        image: require('../assets/lablack.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 102,
        name: 'Short Converse',
        price: 8.00,
        color: 'Yellow',
        size: 42,
        image: require('../assets/syellow.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 103,
        name: 'Long Converse',
        price: 10.00,
        color: 'White',
        size: 42,
        image: require('../assets/lwhite.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 104,
        name: 'Long Converse',
        price: 10.00,
        color: 'Dark Green',
        size: 41,
        image: require('../assets/ldgreen.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 105,
        name: 'Long Converse',
        price: 10.00,
        color: 'Black',
        size: 40,
        image: require('../assets/lblack41.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 106,
        name: 'Long Converse',
        price: 10.00,
        color: 'Red',
        size: 40,
        image: require('../assets/lred.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 107,
        name: 'Short Converse',
        price: 8.00,
        color: 'Red',
        size: 39,
        image: require('../assets/sred39.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 108,
        name: 'Long Converse Plain',
        price: 10.00,
        color: 'Black',
        size: 40.5,
        image: require('../assets/lpblack.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 109,
        name: 'Long Converse',
        price: 10.00,
        color: 'Black',
        size: 41,
        image: require('../assets/lblack.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 110,
        name: 'Long converse',
        price: 10.00,
        color: 'Sea Blue',
        size: 41,
        image: require('../assets/lblue.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 111,
        name: 'Short converse',
        price: 10.00,
        color: 'Sea Blue',
        size: 41,
        image: require('../assets/bwstar.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 112,
        name: 'Long converse',
        price: 10.00,
        color: 'Grey',
        size: 42,
        image: require('../assets/lgrey.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 113,
        name: 'Long converse',
        price: 10.00,
        color: 'Grey',
        size: 40,
        image: require('../assets/lyellow.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}