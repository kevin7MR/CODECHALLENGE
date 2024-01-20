import { Grid, Container, Paper, Avatar, Typography, TextField, Button, Checkbox, Link ,Box} from "@mui/material"
import {FormControlLabel} from '@mui/material';
import {LoadingButton} from "@mui/lab"
import LockPersonIcon from '@mui/icons-material/LockPerson';
import {useFormik} from "formik";
import { initialValues,validationSchema } from "./LoginForm.from";
import {useRouter} from "next/router";
import {useAuth} from "../../hooks/useAuth";
import {Login} from "../../Api/services";

const authCrtl = new Login();


export  function LoginForm() {

  const router=useRouter();
  const {login, user} = useAuth();
  

  const formik = useFormik({
    initialValues: initialValues(),
     validationSchema:validationSchema(),
     validateOnChange: false,
     onSubmit: async(formValue) => {
       try{
        const response = await authCrtl.PostLog(formValue);
         console.log(response);
         if(response.data.token){
          login(response.data.token);
          router.push("/AccountPage/Account")
         }else{
          console.log(response);
         }
        
        
       }catch(error){
         console.error(error);
       }

     },
   
  });
 
  return (

       <Grid 
       container 
       component='main'
       sx={
        {
          backgroundColor:'white',
        }
       }
      >

         <Container 
           component={Paper}
           elevation={5}
           maxWidth='xs'
           fixed
           sx={{
            height:'50%',
            width: '25%',
            marginTop : '2%',
            marginBottom: '1.5%',
            flex:{xs:'100%', sm:'100%', md:'100%'}
          
            
            
         }}>
          
           <Box align='center' 
           sx={{
            marginTop:'5%',
            marginBottom: '5%',
           }}>

           <Avatar
            sx={{
                backgroundColor:'black',
              }}>
              <LockPersonIcon/>
           </Avatar>
           <Typography 
             component='h1'
              variant='h5'>
                  LogIn
            </Typography>

             <form onSubmit={formik.handleSubmit} >
             <TextField
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
              fullWidth
              autoFocus
              color='secondary'
              margin='normal'
              variant='outlined'
              label='username'
              name="email"
              
              sx={{
                    marginTop:'8%'
                }}
              />

             <TextField
             value={formik.values.password}
             onChange={formik.handleChange}
             error={formik.errors.password}
              fullWidth
              type="password"
              color='secondary'
              margin='normal'
              variant='outlined'
              label='password'
              name="password"
              required    
              /> 

             <LoadingButton
              loading={formik.isSubmitting}
              fullWidth
              type='submit'
               sx={{
                   marginTop:'5%',
                   background:'blue',
                   color: 'white'
                  }}>
                 Sign-In
               </LoadingButton>
               </form>
            
             
                  <FormControlLabel
                  control={<Checkbox defaultChecked />} 
                  label="Remeber me"
                   />

               </Box>
               
                    <Typography
                  
                     sx={{
                     marginTop:"3%"
                       }}>
                     <Link href="#"
                     color='#5BFF00'>
                        forgot password?

                     </Link>
                   </Typography>

                   <Typography
                   sx={{
                    marginBottom:'3%'
                   }}>
                     <Link href="#"
                      color='#5BFF00'>
                        dont have a account yet?

                     </Link>
                   </Typography>
                   
         </Container>
         
         <Box 
       sx={{
         backgroundImage:`url(https://i.pinimg.com/750x/d4/07/4b/d4074bd75dae7dc28b5370fddf6690ff.jpg)`,
         backgroundRepeat:"no-repeat",
         backgroundColor:"white",
         backgroundPosition:"Bottom",
         height:'48vh',
         width:"100%",
          }}
      />
       </Grid>
       
       
   

    
  )
}
