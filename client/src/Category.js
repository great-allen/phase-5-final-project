import React,{useEffect,useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

 import { deepOrange } from '@mui/material/colors';
 import { Link } from "react-router-dom";


function Category({setSelect,setSearchProducts}) {
    const [platforms,setPlatforms]=useState([])
    useEffect(()=>{
        fetch('/platform_images').then(r=>r.json()).then(setPlatforms)
    },[])
    
    const handleClick=(item)=>{
      
      
      
      setSearchProducts('')
                  setSelect(item)
    }
    
  return (
    <div>
        <ImageList sx={{ width: 500, height: 600,marginLeft:2}}>
      <ImageListItem key="Subheader" cols={2} style={{marginLeft:-200}}>
        <ListSubheader component="div" style={{fontSize:20,color:deepOrange[500]}}>Choose your games:</ListSubheader>
      </ImageListItem>
      {platforms&&platforms.map((item) => (
        <ImageListItem key={item.id} style={{marginTop:-20}} >
          <Link to="/AllGames" >
            <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                style={{width:150,height:150,marginBottom:5}}
                onClick={()=>{
                  handleClick(item.title)
                  
                }}
            />
         </Link>
          {/* <Avatar alt={item.title} src={item.url} style={{ width: 150, height: 150 }}/> */}
          {/* <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          /> */}
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}

export default Category