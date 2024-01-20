import {AuthProvider, } from "../Contexts/AuthContext";
import {CartProvider} from "../Contexts/CartContext"
import '@/styles/globals.css'


export default function App(props) {
  const { Component, pageProps } = props;
  return (
     <AuthProvider>
       <CartProvider>
         <Component {...pageProps} />
       </CartProvider>
     </AuthProvider>  );
 
}
