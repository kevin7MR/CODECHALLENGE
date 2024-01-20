import { useState, useEffect, createContext } from "react";
import {addCart} from "../Api/services"
import {Count} from "../Api/Count"

 const cartCtlr = new addCart();
 const Counting= new Count();


export const CartContext = createContext();
export function CartProvider(props){
    const {children} = props;
    const [cart, setCart]=useState(null);
    const [total, setTotal]=useState(Counting.Count());
     

     useEffect(()=>{
     const response = cartCtlr.GetCart();
      setCart(response);
    },[] );

   const addCart=(productsId)=>{
   cartCtlr.SetCart(productsId)
   refreshTotalCart();
   }
   const refreshTotalCart=()=>{
    setTotal(Counting.Count());
    setCart(cartCtlr.GetCart())
   }
     

     const data = {
        cart,
        addCart,
        total,
        deleteItem:()=>{},
        deleteAllItems:()=>{},
        changeQuantityItem:()=>{},

    };

    return <CartContext.Provider value={data}>
                 {children}
           </CartContext.Provider>
}