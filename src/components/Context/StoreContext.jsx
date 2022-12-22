import { createContext, useState } from 'react'

//initializing create context Hook 
export const StoreContext = createContext();

//this is the function that contains the information that will be used in the others components.
export const StoreContextProvider = ({ children }) => {
    //  we created the states Here.
    const [products, setProducts] = useState([]);
    const [cart, addProductsToCart] = useState([]);

    return (
        //  we export the states here.
        <StoreContext.Provider
            value={{
                products, 
                setProducts,
                cart, 
                addProductsToCart
            }}>{children}
        </StoreContext.Provider>
    );
}