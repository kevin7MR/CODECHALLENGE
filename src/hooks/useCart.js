import { useContext } from "react"; 
import { CartContext } from "../Contexts/CartContext";

export const useCart =() => useContext(CartContext);
