import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Products() {
  return (
    <>
      <div className='display-1 text-center'>
        There are many types of Products.
        
    </div>
    <div className='row-4 text-center'>
      <Link className='btn btn-primary ms-5' to="health">Health product</Link>
      <Link className='btn btn-primary ms-5' to="it">It product</Link>
      <Link className='btn btn-primary ms-5' to="car">Car product</Link>
    </div>
    <Outlet/>
    </>
		
  )
}

export default Products