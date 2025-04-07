import React from 'react'
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const page = ({params}:{
    params :{
        productId:string,
        reviewId:string
    }
}) => {
    const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
   <>
   <h1>product {params.productId} review {params.reviewId}</h1>
   </>
  )
}

export default page