'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router=useRouter();
  return (
  <>
     <button onClick={()=>router.push("useRouterHook/page1")}>page 1</button>
     <button onClick={()=>router.replace("useRouterHook/page2")}>page 2</button>
  </>
  )
}

export default page