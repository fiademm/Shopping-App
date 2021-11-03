const PRODUCTS = [
    {
        id: 100,
        name: 'Long Converse',
        price: 10.00,
        color: "Dark Blue",
        size: 41,
        image: require('../assets/ldblue.png'),
        description: 'Long dark blue converse shoes'
    },
    {
        id: 101,
        name: 'Long Converse',
        price: 11.00,
        color: 'All Black',
        size: 42,
        image: require('../assets/lablack.png'),
        description: 'Long plain black converse shoes, no other color attached to it.'
    },
    {
        id: 102,
        name: 'Short Converse',
        price: 8.00,
        color: 'Yellow',
        size: 42,
        image: require('../assets/syellow.png'),
        description: 'Nice short yellow converse shoes.'
    },
    {
        id: 103,
        name: 'Long Converse',
        price: 10.00,
        color: 'White',
        size: 42,
        image: require('../assets/lwhite.png'),
        description: 'Long all white converse shoes, no black or any other colors.'
    },
    {
        id: 104,
        name: 'Long Converse',
        price: 10.00,
        color: 'Dark Green',
        size: 41,
        image: require('../assets/ldgreen.png'),
        description: 'Nice long dark green converse shoes.'
    },
    {
        id: 105,
        name: 'Long Converse',
        price: 10.00,
        color: 'Black',
        size: 40,
        image: require('../assets/lblack41.png'),
        description: 'Long black and white converse shoes.'
    },
    {
        id: 106,
        name: 'Long Converse',
        price: 10.00,
        color: 'Red',
        size: 40,
        image: require('../assets/lred.png'),
        description: 'Nice long red converse shoes'
    },
    {
        id: 107,
        name: 'Short Converse',
        price: 8.00,
        color: 'Red',
        size: 39,
        image: require('../assets/sred39.png'),
        description: 'Nice red low-top converse shoes.'
    },
    {
        id: 108,
        name: 'Long Converse',
        price: 10.00,
        color: 'Black',
        size: 40.5,
        image: require('../assets/lpblack.png'),
        description: 'Nice black high top converse shoes.'
    },
    {
        id: 109,
        name: 'Long Converse',
        price: 10.00,
        color: 'Black',
        size: 41,
        image: require('../assets/lblack.png'),
        description: 'Nice high top black and white converse shoes.'
    },
    {
        id: 110,
        name: 'Long converse',
        price: 10.00,
        color: 'Sea Blue',
        size: 41,
        image: require('../assets/lblue.png'),
        description: 'Nice sea blue high top converse shoes'
    },
    {
        id: 111,
        name: 'Short converse',
        price: 10.00,
        color: 'Black & White',
        size: 41,
        image: require('../assets/bwstar.png'),
        description: 'Nice balck and white starred low-top converse shoes'
    },
    {
        id: 112,
        name: 'Long converse',
        price: 10.00,
        color: 'Grey',
        size: 42,
        image: require('../assets/lgrey.png'),
        description: 'Nice long grey converse shoes'
    },
    {
        id: 113,
        name: 'Long converse',
        price: 10.00,
        color: 'Yellow',
        size: 40,
        image: require('../assets/lyellow.png'),
        description: 'Nice long yellow converse shoes.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}