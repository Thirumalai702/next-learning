import React from 'react'

const page = ({params}:{
    params :{
        dynamic:string,
        
    }
}) => {
  return (
   <>
   <h1>dynamic {params.dynamic}</h1>
   </>
  )
}

export default page