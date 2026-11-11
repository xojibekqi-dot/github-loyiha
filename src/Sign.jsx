import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
function Sign() {
  return (
   <>
  <div className='flex ml-130'>
    <img className='w-13' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbju7Y4kOaZ-lV4rnPpNArdBtS150gZTy-7YAPCitQzA&s=10" alt="" />
    <img  className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjQAtYHAvPv-mU7Xv3tsd9OdFiZRsa_efNgEwrGEmQw&s=10" alt="" />
  </div>
  <div>
    <p className='text-3xl ml-130'>Enter your email to join us or sign <br /> in.</p>
     <Box className ='ml-128 ' 
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField  id="outlined-basic" label="Email*" variant="outlined" />
    </Box>
    <h1 className=' ml-130 mt-5 font-bold text-gray-500'>By continuing, I agree to Nike’s
       <Link className='ml-2'  to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=UZ&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df">Privacy Policy</Link><br />
        and <Link className='ml-2' to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=UZ&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df">Terms of Use.</Link>
       </h1>
      <Link><button className='font-bold text-white bg-black w-30 h-12 ml-210 mt-5 cursor-pointer hover:bg-gray-500 rounded-2xl'>Continue</button></Link>
  </div>
   </>
  )
}

export default Sign