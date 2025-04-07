import React from 'react'

const page = ({params}:{
    params :{
        dynamic:string,
        nested:string
    }
}) => {
  return (
   <>
   <h1>dynamic {params.dynamic} nested {params.nested}</h1>
   </>
  )
}

export default page