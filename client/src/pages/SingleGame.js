import React,{useState} from 'react'
import { useParams } from "react-router-dom";

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import {Info,  InfoSubtitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';


import { createCarts } from "../redux/cartReducer";


function SingleGame({products,user,updateCart,}) {
    const dispatch = useDispatch();
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0,10));
    const [quantity,setQuantity]=useState(1)
    const cartProducts = useSelector((state) => state.cart.products);
    console.log(cartProducts);
    const [showFullFeature, setShowFullFeature] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const styles = useBlogTextInfoContentStyles();
    const params = parseInt(useParams().id);
    const product=products&&products.find((product)=>{
        return  product.id===params
      })
      let uuid=''
      let title=''
      let description=''
      let url=''
      let price=''
      
      let category=''
      let platform=''
      let releaseDate=''
      let feature=''
      let id=0
      if (product){
        
        id=product.id
        title=product.title
        description=product.description
        url = product.images && product.images.filter((item) => {
          return item.title === 'showcase';
        })[0] ? product.images && product.images.filter((item) => {
          return item.title === 'showcase';
        })[0].url:''
        
        
        price=product.price
        uuid=product.uuid
        category=product.category
        platform=product.platform
        releaseDate=product.release_date
        feature=product.feature
      }
      let displayedDescription = description.slice(0, 100)
      let displayedFeature = feature.slice(0, 100)

      const handleClick=(product)=>{
        console.log('product',product);
        const existingProduct=cartProducts && cartProducts.find((item)=>{
          return item.uuid===product.uuid
        })
        
        const cartData = {
          user_id:user.id,
          title: title,
          price: price,
          image_url: url,
          quantity: quantity,
          category: category,
          platform: platform,
          uuid: uuid
        }
        if(existingProduct){
          console.log('existingProduct',existingProduct);
          console.log(("quantity",quantity));
          fetch(`/shopping_carts/${existingProduct.id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: existingProduct.quantity + quantity
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then(updateCart);
            } else {
              r.json().then((err) => alert(err.errors));
            }
          })
        }
        else
        dispatch(createCarts(cartData))
        
        
      }
      
  return (
    <Box sx={{ width: '90%',margin:"0 auto",paddingTop:10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <Box maxWidth={345} >
            <CardContent style={{ width: 345, margin: "0 auto", maxHeight: showFullFeature ? 400 : "none", overflow: showFullFeature ? "scroll" : "hidden" }}>
                <TextInfoContent
                    useStyles={useBlogTextInfoContentStyles}
                    heading={<div style={{ fontSize: 20, fontFamily: 'Arial, sans-serif', marginBottom: 25 }}>Feature:</div>}
                    body={showFullFeature ? feature : displayedFeature}
                    
                />
                {!showFullFeature && <Button className={styles.button} onClick={() => setShowFullFeature(true)}>Read more</Button>}
            </CardContent>
        </Box>
          
        <Box maxWidth={345}>
            <CardContent style={{ width: 345, margin: "0 auto",  maxHeight: showFullDescription ? 200 : "none", overflow: showFullDescription ? "scroll" : "hidden", marginBottom: 25 }}>
                <TextInfoContent
                    useStyles={useBlogTextInfoContentStyles}
                    heading={<div style={{ fontSize: 20, fontFamily: 'Arial, sans-serif', marginBottom: 25 }}>Description:</div>}
                    body={showFullDescription ? description : displayedDescription}
                />
                {!showFullDescription && <Button className={styles.button} onClick={() => setShowFullDescription(true)}>Read more</Button>}
            </CardContent>
        </Box>


          
        </Grid>
        <Grid item xs={4}>
          
          <Card sx={{ maxWidth: 400,margin:"0 auto" }}>
            <CardMedia
                component="img"
                height="600"
                width="400"
                image={url}
                alt="Paella dish"
            />
          </Card> 
          
        </Grid>
        <Grid item xs={4}>
          
         <Box sx={{ maxWidth: 345,margin:"0 auto",textAlign: "left"  }}>
          <CardContent style={{marginLeft:-17}}>
        <TextInfoContent
          useStyles={useN01TextInfoContentStyles}
          heading={<div style={{fontSize:15}}>$ {price} </div>}
          overline={<div style={{fontSize:15}}>{title}</div>}
          
        />
        <Info useStyles={useNewsInfoStyles}>
            <InfoSubtitle>
                <span style={{ fontSize: 15 }}>Sku</span> |{" "}
                <span style={{ fontSize: 12 }}>{uuid}</span>
            </InfoSubtitle>
        </Info>
      </CardContent>
      <Divider style={{backgroundColor:"blue"}}/>
      <Divider style={{backgroundColor:"blue"}}/>
      
      <Grid container alignItems="center" style={{paddingTop:30}}>
          <Grid item xs style={{marginBottom:7}}>
            <Typography gutterBottom variant="h7" component="div">
              Category
            </Typography>
          </Grid>
          <Grid >
            <Typography gutterBottom variant="h7" component="div">
              {category}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs style={{marginBottom:7}}>
            <Typography gutterBottom variant="h7" component="div">
              Platform
            </Typography>
          </Grid>
          <Grid >
            <Typography gutterBottom variant="h7" component="div">
              {platform}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs >
            <Typography gutterBottom variant="h7" component="div">
              Release date
            </Typography>
          </Grid>
          <Grid >
            <Typography gutterBottom variant="h7" component="div">
              {releaseDate>currentDate?<div style={{color:"#EF3054"}}><p>PREORDER</p>
                                            <p style={{marginTop:-20}}>{releaseDate}</p>
                                       </div>:releaseDate}
                                       
            </Typography>
            
          </Grid>
          
          {/* {releaseDate>currentDate?<Button disabled style={{width:345,marginTop:20}} >Taking order from {releaseDate}</Button>:<Button variant="outlined" style={{width:345,marginTop:20}}>Add to cart</Button>} */}
         
        </Grid>
        <Divider style={{backgroundColor:"blue",marginTop:30}}/>
      
      {releaseDate>currentDate?<>
      
      <Button disabled style={{width:345,marginTop:30}} >Taking order from {releaseDate}</Button>
      </>
      :
      <>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:25 }}>
        <Button >
            <RemoveIcon style={{width:100,height:30,fontSize:"large"}} onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }/>
        </Button>
        {quantity}
        <Button>
            <AddIcon style={{width:100,height:30,fontSize:"large"}} onClick={() => setQuantity((prev) => prev + 1)}/>
        </Button>
      </Box>

      <Button variant="outlined" style={{width:345,marginTop:30}} onClick={() =>
                // dispatch(
                //   addToCart({
                //     id:id,
                //     title:title,
                //     images:url,
                //     price: price,
                //     platform:platform,
                //     category,category,
                //     quantity,
                //   })
                // )
                handleClick(product)
                  }>Add to cart</Button>
      </>}
          </Box> 
          
        </Grid>
        </Grid>
    </Box>
  )
}

export default SingleGame