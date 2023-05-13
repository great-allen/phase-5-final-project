import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
function GameCategoryList({platform,setSelect,setSearchProducts,setProducts,games}) {
    

    const handleClick=(title)=>{
      setProducts(games)
      setSearchProducts('')
        setSelect(title)
    }
    
  return (
    <div style={{marginLeft:10, marginTop:7}}>
        <Button variant="text"> 
        <ListGroup.Item  onClick={()=>handleClick(platform.title)}>{platform.title}</ListGroup.Item>
        </Button>
    </div>
  )
}

export default GameCategoryList