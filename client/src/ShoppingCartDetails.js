
import React from 'react'
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import {
    Info,
    
    InfoTitle,
  } from '@mui-treasury/components/info';
  import { useBeatsInfoStyles } from '@mui-treasury/styles/info/beats';



function ShoppingCartDetails({totalPrice}) {
    const products = useSelector((state) => state.cart.products);
    // const totalPrice = () => {
    //     let total = 0;
    //     products && products.forEach((item) => {
    //       total += item && item.quantity * parseFloat(item && item.price);
    //     });
    //     return total.toFixed(2);
    //   };
  return (
    // products && products[0] !== null && products.length > 0 ?
    <Box style={{marginTop:10}}>
        <h3>Cart items</h3>
      
          {products&&products.map((product)=>{
            return <Card sx={{ display: 'flex',marginBottom:5 }} key={product && product.id}>
                        <CardMedia
                            component="img"
                            sx={{ width: 101,margin:2,height:151 }}
                            image={product && product.image_url ? product.image_url : ""}
                            alt={product &&product.title}
                        />
                        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
                        <CardContent sx={{ flex: '1 0 auto',position:"relative" }}>
                            <Typography component="div" variant="h5">
                                    <span>{product && product.title}</span>
                                    <span style={{marginLeft:7,fontSize:15}}>({product && product.platform})</span>
                            </Typography>
                            <br />
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {product && product.category}
                            </Typography>
                            <Typography component="div" variant="h7" style={{marginTop:45}}>
                                    <span>Qty: {product &&product.quantity}</span>
                                    <span style={{marginLeft:50}}>Price: {product && product.quantity * parseFloat(product && product.price)}</span>
                            </Typography>
                        </CardContent>
                        {/* </Box> */}
                    </Card>
                    

          })}
            <Info useStyles={useBeatsInfoStyles} style={{position:"absolute",right:30,paddingBottom:20}}>
                <InfoTitle>Subtotal ({products.length} items)
                <span >$ {totalPrice()}</span>
                </InfoTitle>
                
                
                
            </Info>
            
            
            
        {/* <Grid item xs={4} style={{position:"relative"}}>
            <Divider/>
            <Info useStyles={useBeatsInfoStyles} style={{marginTop:15}}>
                <InfoTitle>Subtotal ({products.length} items)
                <span style={{position:"absolute",right:3}}>$ {totalPrice()}</span>
                </InfoTitle>
                <InfoSubtitle>
                    <Link to="/Checkout">
                        <Button variant="contained" disableElevation style={{width:"100%", marginTop:15}} >
                        PROCEED TO CHECKOUT 
                        </Button>
                    </Link>
                </InfoSubtitle>
                
            </Info>
        </Grid> */}
        
      
      
    </Box>
    
  )
}

export default ShoppingCartDetails