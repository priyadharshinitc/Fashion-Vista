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
        const fetchData = async () => {
            try {
                // Fetch all products
                // let response = await fetch("http://localhost:5000/allproducts")
                let response = await fetch("https://fashion-vista-i2q8.onrender.com/allproducts");
                let data = await response.json();
                setAll_Product(data);
    
                // Fetch cart items if auth-token exists
                if (localStorage.getItem("auth-token")) {
                    // let cartResponse = await fetch("http://localhost:5000/getcart", {
                    let cartResponse = await fetch("https://fashion-vista-i2q8.onrender.com/getcart", {
                        method: "POST",
                        headers: {
                            Accept: "application/form-data",
                            "auth-token": `${localStorage.getItem("auth-token")}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({})
                    });
                    let cartData = await cartResponse.json();
                    setCartItems(cartData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}))
        // console.log(cartItems)
        if(localStorage.getItem("auth-token")) {
            // fetch("http://localhost:5000/addtocart", {
            fetch("https://fashion-vista-i2q8.onrender.com/addtocart", {
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
        setCartItems((prev) => {
            if(prev[itemId] > 0) {
                return {...prev, [itemId]: prev[itemId] - 1}
            }
            return prev
        })
        // setCartItems((prev) => {
        //     const updatedCart = {...prev, [itemId]: (prev[itemId] || 0) - 1};
        //     console.log("Updated Cart: ", updatedCart);
        //     return updatedCart;
        // });

        if(localStorage.getItem("auth-token")) {
            // fetch("http://localhost:5000/removefromcart", {
            fetch("https://fashion-vista-i2q8.onrender.com/removefromcart", {
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
