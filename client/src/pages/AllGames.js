import React, {useEffect,useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GameCategoryList from '../GameCategoryList'
import SingleGameList from '../SingleGameList'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
const itemsPerPage = 15
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  })); 


function AllGames({products,setSelect,select,setSearchProducts,sortBy,setSortBy,setProducts,games}) {
    const [platforms,setPlatforms]=useState([])
    useEffect(()=>{
        fetch('/platforms').then(r=>r.json()).then(setPlatforms)
    },[])

    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = products&&products.slice(startIndex, endIndex);
const handleChange = (event, value) => {
  setPage(value);

window.scrollTo({ top: 0, behavior: 'smooth' });
};

const showSingleProduct=(product)=>{
    console.log(product);
}
    
  return (
    <Box sx={{ flexGrow: 1 , width:"90%",margin:"0 auto",paddingTop:4}}>
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Item style={{textAlign:"left",fontSize:15}}>
            {platforms&&platforms.map((platform)=>{
                return <GameCategoryList key={platform.id} platform={platform} setSelect={setSelect} setSearchProducts={setSearchProducts} setProducts={setProducts} games={games}/>
            })}
        </Item>
        
      </Grid>
      <Grid item xs={9} style={{position:"relative"}}>
        <Item>
      <Form style={{position:"absolute",right:5,top:-10}}>
        <Form.Select aria-label="Default select example" style={{marginLeft:"15px",width:"150px"}} value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
            <option value="">Sort</option>
                <option value="A-Z">A-Z</option>
                <option value="price (low-high)">price (low-high)</option>
                <option value="price (high-low)">price (high-low)</option>
            </Form.Select>
          </Form>
          </Item>
        <Item>
        
            <Box sx={{ flexGrow: 1 }}>
            {select ? (
                <p style={{ textAlign: 'left' }}>{select} : <ClearIcon style={{width:20,height:20}} onClick={()=>setSelect('')}/> </p>
                ) : ''}
                <Grid container spacing={1}>
                    {currentData.map((product) => (
                    <Grid item xs={4} key={product.id} onClick={()=>showSingleProduct(product)}>
                      {product.amount===0?<Item onClick={()=>alert("Sorry we are out of stock, will be back soon")}>
                        <SingleGameList product={product} />
                        </Item>:
                        <Link to={`/Game/${product.id}`}>
                        <Item>
                        <SingleGameList product={product} />
                        </Item>
                        </Link>}
                    </Grid>
                    
                    ))}
                    
                </Grid>
                
            </Box>
        </Item>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {products&&products.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            count={Math.ceil(products.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            size="large"
            sx={{marginBottom:"8px"}}
          />
        )}  
      </Stack>
      </Grid>
      
    </Grid>
  </Box>
  )
}

export default AllGames