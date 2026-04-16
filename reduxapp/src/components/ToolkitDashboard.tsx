import axios from "axios";
import { useEffect } from "react";

 
 
import './dashboard.css'
 
import { useDispatch, useSelector } from "react-redux";
 
import type { RootState } from "../rtk/mystore";
import { setProducts } from "../rtk/productslice";
 
type Product = {
  id: number;
  url: string;
  name: string;
  description: string;
  alt: string;
  category: string;
  price: number;
};

export default function ToolkitDashboard()
{
 
 
   const dispatch = useDispatch();
const products = useSelector((state: RootState) => state.productsarr.products);

     useEffect( ()=>{

   axios.get<Product[]>("http://localhost:3001/products")
            .then(
                (res)=>
                        {
                       dispatch(setProducts(res.data))
                        }
            )
            .catch(
                (err)=>
                {
                    console.log("error found " + err)
                }
            )
     },[])

    return(
    <div>
        <h1> Dashboard</h1>

    
        
        
        <section className="clssection">
 {
    products.map( (product:Product)=>
    <div key={product.id} className="clsproduct">
        <img src={product.url} alt={product.alt} className="clsimage"/>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
    </div>
    )
 }  
</section>

      
    </div>
    )
}