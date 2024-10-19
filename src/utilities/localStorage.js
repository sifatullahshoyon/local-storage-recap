
const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    };
    return [];
};

const saveCartToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart' , cartStringified);
};


const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save cart to the local Storage
    saveCartToLocalStorage(cart);
};

const removeFromLocalStorage = id => {
    const cart = getStoredCart();
    // Removing Every Id
    const remaining = cart?.filter(idx => idx !== id);
    saveCartToLocalStorage(remaining);
};


export {addToLocalStorage , getStoredCart , removeFromLocalStorage};