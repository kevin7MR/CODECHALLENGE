import React from 'react';
import Link from 'next/link';
import {map, set} from "lodash"
import { Grid , Container, Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import { PaginationMui } from '../Pagination/Pagination';

export  function GridCatalog(props) {
    const{products}=props;
    const [loading, setLoading]=useState(false);
    const {addCart} = useCart();
    

      
   

    const addCartWrapper = (productsId) =>{
      setLoading(true);
      addCart(productsId);

      setTimeout(()=>{
        setLoading(false);
      },500);
    };

  return (
    <Container >
       <Grid
        display={'flex'}
        flexWrap={'wrap'}
        
       sx={{
      marginTop:5,  
      padding:5,   
      
    }}
    >
     {map(products,(product,index)=>(
        <Link key={index} href={"/"}>
        <Card
        
        sx={{
           margin:1,
           padding:1,
            }}>
      <CardMedia
        component="img"
        height="140"
        image={product.main_model?.image?.url}
      />
      <CardContent>
        <Typography
         gutterBottom
          variant=''
           component="div"
           sx={{
            height:30
           }}>
           {product.name}
        </Typography>
       
      </CardContent>
      <CardActions>
      <IconButton
       color="primary"
       aria-label="add to shopping cart"
       onClick={()=>{addCartWrapper(product.id)}}
       loading={loading}
       >
        <AddShoppingCartIcon />
      </IconButton>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          
           
        </Link>
      ))}
      
    </Grid> 
    <PaginationMui pageSize={0} totalPages={0}/>
    </Container>
   
  )
}
