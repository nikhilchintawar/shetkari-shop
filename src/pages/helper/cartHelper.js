const addItemToCart = (item, next) => {
    let cart = [];
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        console.log(cart)
        cart.push({
            ...item,
            count: 1
        })
        localStorage.setItem("cart", JSON.stringify(cart))
        next();
    }
}

const loadCart = () => {
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"))
        }
    }
};

const removeItemFromCart = (productId) => {
    let cart = []
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }

        cart.map((product, index) => {
            if (product._id === productId) {
                return cart.splice(index, 1)
            } else{
                return "not able to remove"
            }
        })
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
}

const cartEmpty = next => {
    if (typeof window !== undefined) {
        localStorage.removeItem("cart")
        next()
    }
}


export {
    addItemToCart,
    removeItemFromCart,
    loadCart,
    cartEmpty
}