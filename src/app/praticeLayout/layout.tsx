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
      <html lang="en">
        <body >
            <input value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
           <h1>Pratice layout Header</h1>
           <Link href="/praticeLayout/page1"> page 1</Link>
           <Link href="/praticeLayout/page2"> page 2</Link>
          {children}
          <h1>Pratice layout Footer</h1>
        </body>
      </html>
    );
  }
  