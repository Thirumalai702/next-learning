"use client"
import { useOptimistic } from "react";
import { deleteProductt } from "../../action/page";

export type Product={
    id:number;
    title:string;
    price:number;
    description:string | null;
}
export default  function ProductDbPage({product}:{product:Product[]}){
   const[optimisticProduct,setOptimisticProduct] =useOptimistic(product,(currentProduct,productId)=>{
        return currentProduct.filter((produ)=>produ.id!=productId)
     })
     const removeProduct=async(productId:number)=>{
        setOptimisticProduct(productId);
        deleteProductt(productId);
     }
    return(
        <ul>
            {optimisticProduct.map((produc)=>(
                <li key={produc.id}>
                    <h2>{produc.title}</h2>
                    <form action={removeProduct.bind(null,produc.id)}>
                    <button type="submit" >delete</button>
                    </form>
                </li>
                
            ))}
        </ul>
    )
}