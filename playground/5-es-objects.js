const name = ' Aris ';
const age = 32;


const user = {
    name,
    age,
    location: 'Athens'
}

console.log(user)

//destructing 
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const {'label':productLabel, price = 4, rating}= product

// console.log(productLabel)
// console.log(price)
// console.log(rating)

const transaction = (type, {label, price}) => {
    console.log(type, label, price);
}

transaction('Order', product);