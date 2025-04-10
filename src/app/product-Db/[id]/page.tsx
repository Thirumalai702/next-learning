
import{Product} from "@/app/product-Db/(useOptimisticHook)/page"
import { getProduct } from "@/prisma-db";
import EditProductPage from "./product-edit";
import { notFound } from "next/navigation";


export default async function AddProductPage({params}:{params :{id:string}}){
 
    const {id}=params;
    const product:Product | null=await getProduct(parseInt(id))
    if(!product)
    {
     notFound();
    }
  return (
   <EditProductPage product={product}/>
  );
}