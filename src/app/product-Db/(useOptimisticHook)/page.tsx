import { getProducts} from "@/prisma-db";

import ProductDbPage from "./produtDetail";
export type Product={
    id:number;
    title:string;
    price:number;
    description:string | null;
}
export default async function ProductDb(){
    const product:Product[]=await getProducts();
    return(
       <ProductDbPage product={product}/>
    )
}