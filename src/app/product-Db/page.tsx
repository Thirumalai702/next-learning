import { getProducts} from "@/prisma-db";
type Product={
    id:number;
    title:string;
    price:number;
    description:string | null;
}
export default async function ProductDbPage(){
    const produc:Product[]=await getProducts();
    return(
        <ul>
            {produc.map((product)=>(
                <li key={product.id}>
                    <h2>{product.title}</h2>
                </li>
            ))}
        </ul>
    )
}