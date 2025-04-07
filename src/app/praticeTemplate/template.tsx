'use client'
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const[input,setInput]=useState("")
    return (
      
      <>
            <input value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
           <h1>Pratice Template Header</h1>
           <Link href="/praticeTemplate/page1"> page 1</Link>
           <Link href="/praticeTemplate/page2"> page 2</Link>
          {children}
          <h1>Pratice Template Footer</h1>
      
          </>
    );
  }
  