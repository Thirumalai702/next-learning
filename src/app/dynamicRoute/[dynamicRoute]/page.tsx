import React from 'react'

const page = ({params}:{params:{dynamicRoute:string}}) => {
  return (
    <h1>dynamic route {params.dynamicRoute} </h1>
  )
}

export default page