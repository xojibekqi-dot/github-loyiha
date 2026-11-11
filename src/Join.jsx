import React from 'react'
import {Link} from 'react-router-dom'
function Join() {
  return (
   <>
 
      <div className='flex justify-around'>
      <Link>Shop New Arrivals</Link>
      <Link>Members: Free Shipping on Orders $50+</Link>
      <Link className=''>Send a Gift Card</Link>
      </div>
       <div>
     
      <h1 className='text-6xl font-bold ml-140  mt-40'>IT'S BETTER AS </h1>
      <h1 className='text-6xl font-bold ml-150 '>A MEMBER</h1>
      <p className='font-bold ml-140 mt-5'>Move, Shop, Customize and Celebrate with the best of Nike.</p>
      <button className='bg-black text-white w-20 h-10 rounded-2xl ml-180 mt-10 cursor-pointer'>Sign Up</button>
    </div>
     <h1 className='text-2xl ml-15'>Member Benefits</h1>
    <div>
     <h1>SNKRS</h1><br />
     <h1></h1>
      
    </div>
   </>
  )
}

export default Join