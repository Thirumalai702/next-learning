"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/productDb/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, description }),
      });
      if (response.ok) {
        router.push("/product-Db");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
         
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className="text-white">
        Description
        <textarea
         
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button
        type="submit"
        
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}