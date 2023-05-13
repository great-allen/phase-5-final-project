import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Category from '../Category'






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  
  borderRadius:'15px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Home({products,setSelect,setSearchProducts}) {
  const uniqueProducts = products && products.reduce((accumulator, product) => {
    const existingProduct = accumulator.find(p => p.title === product.title);
    if (!existingProduct) {
      accumulator.push(product);
    }
    return accumulator;
  }, []);
  
  console.log(uniqueProducts);
  const popularGamesImages=uniqueProducts.filter((product)=>{
    return product.is_popular===true
  }).map((product)=>{
    return product.images
  }).flat().filter((image)=>{
    return image.title==="banner"
  }).slice(0,5)

  return (
    <Box sx={{ flexGrow: 1 ,paddingTop:7}}>
      <Grid container spacing={3}>
      <Grid item xs={4}>
          <Item>
          <Category setSelect={setSelect} setSearchProducts={setSearchProducts} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <Box sx={{ flexGrow: 1,marginRight:1 }} >
      <Carousel fade style={{margin:"0 auto"}}>
    { popularGamesImages&& popularGamesImages.map((game)=>

      <Carousel.Item key={game.id}> 
        <img
            style={{  height: 600 }}
          className="d-block w-100"
          src={game.url} 
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    
    
    
  )  
  }

  </Carousel>
  
  </Box>
          </Item>
        </Grid>
    
  
  </Grid>
  </Box>
  )
}

export default Home



