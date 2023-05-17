import React,{useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { removeItem,removeCarts,resetCarts } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { fetchCarts } from "../redux/cartReducer";
import Button from '@mui/material/Button';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import {
    Info,
    
    InfoSubtitle,
    InfoTitle,
  } from '@mui-treasury/components/info';
  import { useBeatsInfoStyles } from '@mui-treasury/styles/info/beats';
import { Divider } from '@mui/material';




function ShoppingCart({user}) {
  const dispatch = useDispatch();
  // const [products,setProducts]=useState([])
  // useEffect(() => {
  //   dispatch(fetchCarts());
  // }, [dispatch]);
  // useEffect(()=>{
  //   fetch("/shopping_cart").then(r=>r.json()).then(setProducts)
  // },[])
    const products = useSelector((state) => state.cart.products);
  
  console.log("shoppingCart",products);
  
  const totalPrice = () => {
    let total = 0;
    products && products.forEach((item) => {
      total += item && item.quantity * parseFloat(item && item.price);
    });
    return total.toFixed(2);
  };

  const onRemove=(product)=>{
    dispatch(removeCarts(product.id))
  }
  const onDelete=()=>{
    dispatch(resetCarts());
  }
  return (
    products && products[0] !== null && products.length > 0 ?
    (<Box sx={{ flexGrow: 1,width:"95%",margin:"0 auto" }}>
        <h2>Shopping cart</h2>
        
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
                                    <span style={{fontSize:15,position:"absolute", right:5}} onClick={() => onRemove(product)}>
                                        <Button variant="text" onClick={() => dispatch(removeItem(product.id))} style={{color: '#c4c4c4'}}>
                                            Remove <RemoveCircleOutlineIcon color="disabled" />
                                        </Button>
                                    </span>
                            </Typography>
                            <br />
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {product && product.category}
                            </Typography>
                            <Typography component="div" variant="h7" style={{marginTop:45}}>
                                    <span>Qty: {product &&product.quantity}</span>
                                    <span style={{marginLeft:50}}>Price: {(product && product.quantity * parseFloat(product && product.price)).toFixed(2)}</span>
                            </Typography>
                        </CardContent>
                        {/* </Box> */}
                    </Card>

          })}
        </Grid>
        <Grid item xs={4} style={{position:"relative"}}>
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
        </Grid>
        
      </Grid>
      <button className="reset" onClick={ onDelete}>
            Reset Cart
      </button>
    </Box>):(<Box><h2>Your cart is empty</h2></Box>)
    
  )
}

export default ShoppingCart