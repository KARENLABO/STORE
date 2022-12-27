const findIndexItemByTitle = (cart, productTitle) => cart.findIndex((product) => product.title === productTitle);

export const updateItemQuantityFromCart = (cart, item, quantity) => {
    const copyOfCart = cart;
    const index = findIndexItemByTitle(cart, item.title);

    if (index === -1) {
        return [...cart,{...item, quantity}];
    }

    copyOfCart[index]= {...copyOfCart[index], quantity: copyOfCart[index].quantity + quantity };
    return Array.from(copyOfCart);
}

export const removeProductFromCart = (cart, productTitle) => {
    return cart.filter((product) => product.title !== productTitle)
}