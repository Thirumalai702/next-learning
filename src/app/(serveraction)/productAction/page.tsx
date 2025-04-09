
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
export default function AddProductPage(){
async function CreateProduct(formData:FormData) {
 "use server"

 const title=formData.get("title") as string;
 const price=formData.get("price") as string;
 const description=formData.get("description") as string;
 await addProduct(title,parseInt(price),description)
 redirect("/product-Db");
  };

  return (
    <form action={CreateProduct} >
      <label className="text-white">
        Title
        <input
          type="text"
          
          name="title"
         
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
         
          name="price"
         
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          
          name="description"
         
        />
      </label>
      <button
        type="submit"
      >
       add product
      </button>
    </form>
  );
}