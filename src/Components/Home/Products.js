import {Products as ProductsCtrl} from "../../Api/services";
import { useEffect,useState } from "react";
import {GridCatalog} from "../Catalog/GridCatalog"
import { Pagination } from "../Pagination/Pagination";

const productCtlr= new ProductsCtrl();

export  function Products(props) {
  const {title, limit=5, categoty=null}= props;

  const[products, SetProductos]=useState(null);
   
  
  useEffect(() =>{
    (async ()=>{
        try {
            const response =await productCtlr.GetAll();

            if(response.data){
              SetProductos(response.data);
              
            }else{
              console.log(response);
            }
           
        } catch (error) {
            console.error(error);

        }
   
     } )();
 },[] );

    
  
  return (
    <div>
      <h2>{title}</h2>
      {products && <GridCatalog products={products} />}
    </div>
    
  )
}
