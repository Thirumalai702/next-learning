import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
      <h1>
        intercept main
      </h1>
      <Link href="/intercepting/secondintercept">Default</Link>
      </>
  )
}

export default page