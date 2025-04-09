"use client";

import { FormState } from "@/app/action/page";
import {  CreateProductt } from "@/app/action/page";
import { useActionState } from "react";


export default function AddProductPage(){

    const initialState:FormState={
        errors:{},
    }
  const[State,formAction,isPending] =useActionState(CreateProductt,initialState)


  return (
    <form action={formAction} >
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