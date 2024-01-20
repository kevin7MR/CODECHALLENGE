import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Grid, Link, Container }from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useAuth} from "../../hooks/useAuth";
import {Products} from "../../Components/Home/Products"
import Icon from '@mui/material/Icon';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useCart } from '@/hooks/useCart';
import Badge from '@mui/material/Badge';



export  function Home() {

  const {total}= useCart();
  const {logout, token} = useAuth();
  if(!token){
    logout()
  }
  return (
 <Grid
    component='main'
    sx={
      {
        backgroundColor:'white',
        height:'100%',
      }
    }
  >
     <Box sx={{
       flexGrow: 1,
       
       }}>
      <AppBar position="static">
        <Toolbar
        sx={{
            background:'black',
        }}>
          
          <HomeIcon
           component="div"
           sx={{  flexGrow: 1 }} 
           />
          
            <IconButton color="inherit"   >
              <Badge badgeContent={total} color='error'> <ShoppingCartIcon/></Badge>
            </IconButton>
          
            <Button color="inherit"><a href='/AcessPage/Login'> Login</a></Button>
          <AccountCircleIcon
           sx={{
            color:'white',
           }
           }/>

           
           
            
           
        </Toolbar>
      </AppBar>
     </Box>

      <Container 
       
       sx={{
        margin:'1%'
        
        }}>
          <Icon>
            <LocalMallIcon/>
          </Icon>
      <Products />
      
      </Container>
  </Grid>
          
  )
}
