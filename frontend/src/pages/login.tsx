import { Box, Typography, Button } from '@mui/material'
import { RiLoginBoxLine } from "react-icons/ri";

import React from 'react'
import CustomisedInput from '../components/shared/CustomisedInput';

import { toast } from 'react-hot-toast'
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const auth = useAuth();


 const handleSubmit = async(event:React.FormEvent<HTMLFormElement> )=>{
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get('password') as string;
      try {
        toast.loading("Signing In Pal" , {id})//left off here. 3:13:19
        await auth?.login(email,password);
      } catch (error) {
        
      }
      
    }





  return ( <Box width={'100%'} height={'100%'} display={"flex"} flex={1}>
      <Box padding={8} marginTop={8} display={{md:'flex', small:'none', xs:'none'}}> 
        <img src="airobot.png" alt="Robot"  style={{width:"400px"}}/>
      </Box>
      <Box display={'flex'} flex={{xs:1,md:0.5,}} justifyContent={'center'} alignItems={'center'} padding={2} ml={'auto'} mt={16}>
        <form onSubmit={handleSubmit} style={{margin:'auto' , padding:'30px', boxShadow:"10px 10px 20px #000", borderRadius:'10px', border:"none"}}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>

          <Typography variant='h4' textAlign={"center"} padding={2} fontWeight={600}> Login </Typography>
          
          
          
          <CustomisedInput type='email' name='email' label='Email' />
          
          
          <CustomisedInput type='password' name='password' label='Password' />
        
          <Button type='submit' sx={{px:2,py:1,mt:2,width:"400px",borderRadius:2,bgcolor:"#00fffc", ":hover":{bgcolor:"white",color:"black"}}} endIcon={<RiLoginBoxLine />}>Login</Button>
        </Box>
        </form>

      </Box>

  </Box>
  );//component from material UI


}

export default Login