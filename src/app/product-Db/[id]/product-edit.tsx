"use client";

import { FormState } from "@/app/action/page";
import {  editProductt } from "@/app/action/page";
import { useActionState } from "react";
import{Product} from "@/app/product-Db/(useOptimisticHook)/page"

export default function EditProductPage({product}:{product:Product}){

    const initialState:FormState={
        errors:{},
    }
    const editProducttId=editProductt.bind(null,product.id)
  const[State,formAction,isPending] =useActionState(editProducttId,initialState)


  return (
    <form action={formAction} >
      <label className="text-white">
        Title
        <input
          type="text"
          name="title"
          defaultValue={product.title}
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          name="price"
         defaultValue={product.price}
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          name="description"
          defaultValue={product.description ?? ""} 
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