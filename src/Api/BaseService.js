import axios from "axios"
import {forEach} from "lodash"
import { authFetch , ENV } from "@/utils";
import jwtDecode from "jwt-decode";

/////// classe astp
export class BaseServices{
    constructor(basePath, endPoint){
        this.basePath = basePath;
        this.endPoint=endPoint;
        this.urlFilter=[];
        this.url=this.basePath+'/'+this.endPoint
    }

    //////////POST/////////////
    async PostLog(fromData){
        try{
          const params = {
             method:"POST",
             url: this.url,
             data: fromData,
             headers: {
                "Content-Type": "application/json",
            },
        
          }
         let response= await axios(params)
           return response;
        } catch (error){
            console.log('BaseService',error.message)
            return error.message;
        }
    }
/////////Get ///////////////////
    async GetAll(fromData){
        try{
          
          const params = {
             method:"GET",
             url: this.url,
             data: fromData,
             headers: {
                "Content-Type": "application/json",
            },
          }
          
          
         let response= await axios(params)
           return response;
        } catch (error){
            console.log('BaseService',error.message)
            return error.message;
        }
    }
   
    async GetUser(){
        try {
            const url = this.url;
            
            const response = await authFetch(url);
            const result = await response.json();
    
            if(response.status !==200) throw result;
    
            return result;
          } catch (error) {
            throw error;
          }
     }

     GetCart(){
      const response = localStorage.getItem(ENV.CART);
       
      if(!response){
        return [];
      }else{
        return JSON.parse(response)
      }
      
     }
    
   

////////////// Set////////////////////////
SetCart(productId){
  const products = this.GetCart();
  const objIndex = products.findIndex((product)=> product.id === productId);

  if(objIndex < 0){
      products.push({id:productId, quantity:1 });
  }else{
      const product = products[objIndex];
      products[objIndex].quantity= product.quantity + 1;

  }
  localStorage.setItem(ENV.CART, JSON.stringify(products));
}



}



