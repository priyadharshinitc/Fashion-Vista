import React, { createContext, useEffect, useState } from 'react'
// import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [all_product, setAll_Product] = useState([])
    // console.log(cartItems)
    // 0: 0
    // 1: 0

    useEffect(() => {
        fetch("http://localhost:5000/allproducts")
        .then((response) => response.json())
        .then((data) => setAll_Product(data))

        if(localStorage.getItem("auth-token")) {
            fetch("http://localhost:5000/getcart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data))
        }
    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}))
        // console.log(cartItems)
        if(localStorage.getItem("auth-token")) {
            fetch("http://localhost:5000/addtocart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
        
        // setCartItems((prev) => {
        //     const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
        //     console.log("Updated Cart: ", updatedCart);
        //     return updatedCart;
        // });
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        // setCartItems((prev) => {
        //     const updatedCart = {...prev, [itemId]: (prev[itemId] || 0) - 1};
        //     console.log("Updated Cart: ", updatedCart);
        //     return updatedCart;
        // });

        if(localStorage.getItem("auth-token")) {
            fetch("http://localhost:5000/removefromcart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for(let item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider