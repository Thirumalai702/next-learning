import React from 'react'

const page = ({params}:{
    params :{
       
        nested:string
    }
}) => {
  return (
   <>
   <h1>nested {params.nested}</h1>
   </>
  )
}

export default page