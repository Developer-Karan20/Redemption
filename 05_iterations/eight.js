// reduce : reduce ek array method hai, jo har ek element ke uper run karta hai..aur ek final value ko return karta hai. Iss mein 3 cheeze use hoti hai initial value, accumulator and current value. jo inital value hoti hai for function ke baad after comma di jaati hai. reduce usi ko first value treat karta hai...yaani first baar accumulator aur initial value same hoti hai. fir uske according aage ye method work karta hai. final output humesha depend karega initial value pe. 

const myNums = [1, 2, 3];

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0 );

console.log(myTotal);


//reduce method using arrow functions.

const myNums2 = [1, 2, 3];

const myTotal2 = myNums2.reduce( (acc2, currval2) => (acc2 + currval2), 0 );

console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 ); // item here denotes..each element in the array(here each object).

console.log(priceToPay);