import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import { LuMessageSquareText } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

function Help() {
  return (
    <>
      <div className='font-bold'>
        <h1 className='text-7xl font-bold ml-150 mt-10'>GET HELP</h1>
         <Box className='ml-135 mt-5'
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="What can we help you with?" variant="outlined" />
    </Box>
    <h1 className='text-3xl ml-40 mt-10'>Get a personalized experience.</h1>
    <Link to="/Sign"><button className='w-22 h-12 rounded-2xl mt-5 ml-40 bg-black text-white'>Sign In</button></Link>
    <h1 className='ml-40 mt-5'>Not a member yet?<Link className='ml-1  hover:text-gray-500' to="/Sign">Sign Up</Link></h1>
    </div >
       <h1 className='text-2xl ml-30 mt-5'>Quick Assists</h1>
       <p className='font-bold ml-30'>Answers to our most frequently asked questions are just one click away.</p>
       <div className='flex font-bold justify-around mt-10'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-black mt-5'>Returns & Exchanges</h1>
            <Link>What is Nike's return policy?</Link>
            <Link>How do I return or exchange my Nike order?</Link>
            <Link>Where is my refund?</Link>
            <Link>View all</Link>

            <h1 className='font-black mt-5'>Shopping</h1>
            <Link>How do I find the right size and fit?</Link>
            <Link>How can I get Nike's best deals?</Link>
            <Link>Does Nike offer product advice?</Link>
            <Link>View all</Link>
        </div>
        <div  className='flex flex-col gap-2'>
            <h1 className='font-black mt-5'>Shipping & Delivery</h1>
            <Link>What are Nike's shipping options?</Link>
            <Link>Can I buy online and pick up at a Nike store?</Link>
            <Link>How do I get free shipping on Nike orders?</Link>
            <Link>View all</Link>

            <h1 className='font-black mt-5'>Nike Membership & Apps</h1>
            <Link>What is Nike Membership?</Link>
            <Link>What is Nike SNKRS Pass?</Link>
            <Link>How can I join a SNKRS Draw?</Link>
            <Link>View all</Link>
        </div>
        <div  className='flex flex-col gap-2'>
            <h1 className='font-black mt-5'>Orders & Payment</h1>
            <Link>Where is my Nike order?</Link>
            <Link>Can I cancel or change my Nike order?</Link>
            <Link>What are Nike's payment options?</Link>
            <Link>View all</Link>

            <h1 className='font-black mt-5'>Company Info</h1>
            <Link>Do Nike shoes have a warranty?</Link>
            <Link>Can I recycle my Nike shoes?</Link>
            <Link>Does Nike offer grants or donations?</Link>
            <Link>View all</Link>
        </div>
       </div>
          <h1 className='font-bold text-2xl mt-10 ml-30'>Contact Us</h1>
  
      
      <div className='flex justify-around  font-bold mt-10 h-70'>
       
        <div>
        <LuMessageSquareText className='text-7xl'/> 
        <p className='mt-5'>Chat with Us</p>
        <p>Products & Orders</p>
        <p>4 am - 11 pm PT</p> 
        <p>7 days a week</p>
        </div>
        <div className='flex flex-col gap-2'>
          <IoPhonePortraitOutline className='text-7xl'/>
          <p className='mt-5'>Call Us</p>
          <p>1-800-806-6453</p>
          <p>4 am - 11 pm PT</p>
          <p>7 days a week</p>
        </div>
        <div className='flex flex-col gap-2'>
          <IoLocationOutline className='text-7xl'/>
          <Link to="https://www.nike.com/retail" className='mt-5'>Find a Store</Link>
        </div>
        
      </div>
    
    </>
  
  )
}

export default Help