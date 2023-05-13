import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import GameLists from './GameLists';
// import Container from 'react-bootstrap/Container';
// import moment from 'moment';
import InputGroup from 'react-bootstrap/InputGroup';

function Games({products,handleAddNewGame,handleEditNewGame,handleDeleteGame}) {
    const [gamesPlatforms,setGamesPlatforms]=useState([])
    const [isEdit,setIsEdit]=useState(false)
    const [editGame,setEditGame]=useState([])
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState(0)
    const [msrp,setMsrp]=useState(0)
    const [platform,setPlatform]=useState('')
    const [amount,setAmount]=useState(0)
    const [date,setDate]=useState('')
    const [category,setCategory]=useState('category_id')
    // const [images,setImages]=useState('')
    const [isPopular,setIsPopular]=useState(false)
    const[isNewReleased,setIsNewReleased]=useState(false)
    const [isReleased,setIsReleased]=useState(true)
    const [status,setStatus]=useState('on')
    const [description,setDescription]=useState('')
    const [feature,setFeature]=useState('')

    useEffect(()=>{
        fetch('/platforms').then(r=>r.json()).then(setGamesPlatforms)
    },[])


    const addGame=(e)=>{
      e.preventDefault();
      fetch('/products',{
        method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category_id: category,
                title: title,
                status: status,
                amount: amount,
                msrp: msrp,
                price: price,
                description: description,
                platform: platform,
                release_date: date,
                is_popular:isPopular,
                is_new_released: isNewReleased,
                is_released: isReleased
            }),
          }
      ).then((r) => {
        //   setIsLoading(false);
          if (r.ok) {
            r.json().then(newGame=>{
                handleAddNewGame(newGame)
                setCategory('category_id')
                setTitle('')
                setStatus('on')
                setAmount(0)
                setMsrp(0)
                setPrice(0)
                setDescription('')
                setPlatform('')
                setDate('')
                setIsPopular(false)
                setIsNewReleased(false)
                setIsReleased(false)
                setFeature('')
            })
          } else {
            r.json().then((err) => alert(err.errors));
          }
        });
      
    }
    
    const handleEditGame=(game)=>{
      console.log(game);
      setTitle(game.title)
      setPrice(game.price)
      setMsrp(game.msrp)
      setPlatform(game.platform)
      setDate(game.release_date)
      setAmount(game.amount)
      setCategory(game.category_id)
      setIsNewReleased(game.is_new_released)
      setIsPopular(game.is_popular)
      setIsReleased(game.is_released)
      setDescription(game.description)
      setStatus(game.status)
      setFeature(game.feature)
    }

    const onUpdateGame=(e)=>{
      e.preventDefault()
      fetch(`/products/${editGame.id}`,{
        method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category_id: category,
                title: title,
                status: status,
                amount: amount,
                msrp: msrp,
                price: price,
                description: description,
                platform: platform,
                release_date: date,
                is_popular:isPopular,
                is_new_released: isNewReleased,
                is_released: isReleased,
                feature: feature
            }),
          }
      ).then((r) => {
        //   setIsLoading(false);
          if (r.ok) {
            r.json().then(newGame=>{
                handleEditNewGame(newGame)
                setCategory('category_id')
                setTitle('')
                setStatus('on')
                setAmount(0)
                setMsrp(0)
                setPrice(0)
                setDescription('')
                setFeature('')
                setPlatform('')
                setDate('')
                setIsPopular(false)
                setIsNewReleased(false)
                setIsReleased(false)
                setIsEdit(false)
            })
          } else {
            r.json().then((err) => alert(err.errors));
          }
        });
    }

    
  return (
    <>
    {
        isEdit?
        <>
        <Form style={{paddingTop:12,width:"99%",margin:"0 auto" }} onSubmit={onUpdateGame} >
    <Row>
      <Col sm={2} >
          <InputGroup>
          {/* <InputGroup.Text>Start at:</InputGroup.Text> */}
            <Form.Control
              id="inlineFormInputGroupUsername"
              type="text"
              name='title'
              placeholder='title'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
        
          </InputGroup>
        </Col>
    <Col  sm={2}>
          <InputGroup>
          <InputGroup.Text >Price:</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroupUsername"
              type="number"
              step="0.01"
              placeholder='price'
              name='price'
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
            
          </InputGroup>
        </Col>
        <Col sm={2} >
          <InputGroup>
          <InputGroup.Text >MSRP:</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroupUsername"
              type="number"
              step="0.01"
              placeholder='msrp'
              name='msrp'
              value={msrp}
              onChange={(e)=>setMsrp(e.target.value)}
            />
            
          </InputGroup>
        </Col>
     
      <Col sm={2} >
      <Form.Select  aria-label="Default select example" name='platform' value={platform} onChange={(e)=>setPlatform(e.target.value)} >
    <option value=" ">Select platform</option>
    {gamesPlatforms&&gamesPlatforms.map((platform)=>( 
               <option key={platform.id} value={platform.title}>{platform.title}</option>
              
             
            ))
           }
    </Form.Select>
        </Col>
      <Col sm={2}>
        <InputGroup>
      <InputGroup.Text >Amount:</InputGroup.Text>
      <Form.Control type="number" placeholder="Amount" name='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
      </InputGroup>
    </Col>
    <Col sm={2}>
    <InputGroup>
        <InputGroup.Text >Release date:</InputGroup.Text>
        <Form.Control type="date" name='date' value={date} onChange={(e)=>setDate(e.target.value)} />
        </InputGroup>
      </Col>
    {/* <Col>
    <Form.Select  aria-label="Default select example" name='category' value={category} onChange={(e)=>setCategory(e.target.value)} >
    <option value="0">Select category</option>
      <option value="1">Real-time strategy(RTS)</option>
      <option value="2">Shooters(FPS and TPS)</option>
      <option value="3">Multiplayer online battle arena(MOBA)</option>
      <option value="4">Role-playing(RPG, ARPG, and More)</option>
      <option value="6">sports</option>
      <option value="7">Strategy</option>
      <option value="8">Action-adventure</option>
      <option value="9">Survival and horror</option>
      <option value="10">racing</option>
      <option value="11">music</option>
    </Form.Select>
    </Col> */}
    </Row>
  
  <Row style={{marginTop:"7px"}}>
  <Col>
    <Form.Select  aria-label="Default select example" name='category' value={category} onChange={(e)=>setCategory(e.target.value)} >
    <option value="0">Select category</option>
      <option value="1">Real-time strategy(RTS)</option>
      <option value="2">Shooters(FPS and TPS)</option>
      <option value="3">Multiplayer online battle arena(MOBA)</option>
      <option value="4">Role-playing(RPG, ARPG, and More)</option>
      <option value="5">sports</option>
      <option value="6">Strategy</option>
      <option value="7">Action-adventure</option>
      <option value="8">Survival and horror</option>
      <option value="9">racing</option>
      <option value="10">music</option>
    </Form.Select>
    </Col>
  {/* <Col>
  <InputGroup>
          
          <Form.Control
            id="inlineFormInputGroupUsername"
            type="text"
            placeholder='images'
            name='images'
            value={images}
            onChange={(e)=>setImages(e.target.value)}
          />
        </InputGroup>

    </Col> */}
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>is_popular</InputGroup.Text>
    <Form.Select name='isPopular' value={isPopular} onChange={(e)=>setIsPopular(e.target.value)} >
        <option value="false">false</option>
        <option value="true">true</option>
    </Form.Select> 
    </InputGroup> 
    </Col>
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>is_new_released</InputGroup.Text>
    <Form.Select name='isNewReleased' value={isNewReleased} onChange={(e)=>setIsNewReleased(e.target.value)} >
        <option value="false">false</option>
        <option value="true">true</option>
    </Form.Select>  
    </InputGroup>
    </Col>
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>is_released</InputGroup.Text>
    <Form.Select name='isReleased' value={isReleased} onChange={(e)=>setIsReleased(e.target.value)} >
        <option value="false">false</option>
        <option value="true">true</option>
    </Form.Select> 
    </InputGroup> 
    </Col>
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>status</InputGroup.Text>
    <Form.Select name='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option value="on">on</option>
        <option value="off">off</option>
    </Form.Select> 
    </InputGroup> 
    </Col>
  </Row>
  <Row>
    <Col  >
      <InputGroup.Text style={{marginBottom:5,marginTop:5}}>Feature</InputGroup.Text>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} name='feature' value={feature} onChange={(e)=>setFeature(e.target.value)} />
        </Form.Group>
    </Col>
  </Row>
  <Row >
        <Col  >
    <InputGroup.Text style={{marginBottom:5,marginTop:5}}>Description</InputGroup.Text>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} name='description' value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
    </Col>
            <Col xs="auto" >
              <Button type="submit" className="mb-2" variant="outline-success" style={{height:50, marginTop: 75}} >
                Update game
              </Button>
            </Col>
      </Row>
    </Form>
    </>
    :
    <>
    <Form style={{paddingTop:12,width:"99%",margin:"0 auto" }} onSubmit={addGame} >
    <Row>
      <Col sm={2} >
          <InputGroup>
          {/* <InputGroup.Text>Start at:</InputGroup.Text> */}
            <Form.Control
              id="inlineFormInputGroupUsername"
              type="text"
              name='title'
              placeholder='title'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
        
          </InputGroup>
        </Col>
    <Col  sm={2}>
          <InputGroup>
          <InputGroup.Text >Price:</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroupUsername"
              type="number"
              step="0.01"
              placeholder='price'
              name='price'
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
            
          </InputGroup>
        </Col>
        <Col sm={2} >
          <InputGroup>
          <InputGroup.Text >MSRP:</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroupUsername"
              type="number"
              step="0.01"
              placeholder='msrp'
              name='msrp'
              value={msrp}
              onChange={(e)=>setMsrp(e.target.value)}
            />
            
          </InputGroup>
        </Col>
     
      <Col sm={2} >
      <Form.Select  aria-label="Default select example" name='platform' value={platform} onChange={(e)=>setPlatform(e.target.value)} >
    <option value=" ">Select platform</option>
    {gamesPlatforms&&gamesPlatforms.map((platform)=>( 
               <option key={platform.id} value={platform.title}>{platform.title}</option>
              
             
            ))
           }
    </Form.Select>
        </Col>
      <Col sm={2}>
        <InputGroup>
      <InputGroup.Text >Amount:</InputGroup.Text>
      <Form.Control type="number" placeholder="Amount" name='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
      </InputGroup>
    </Col>
    <Col sm={2}>
    <InputGroup>
        <InputGroup.Text >Release date:</InputGroup.Text>
        <Form.Control type="date" name='date' value={date} onChange={(e)=>setDate(e.target.value)} />
        </InputGroup>
      </Col>
    {/* <Col>
    <Form.Select  aria-label="Default select example" name='category' value={category} onChange={(e)=>setCategory(e.target.value)} >
    <option value="0">Select category</option>
      <option value="1">Real-time strategy(RTS)</option>
      <option value="2">Shooters(FPS and TPS)</option>
      <option value="3">Multiplayer online battle arena(MOBA)</option>
      <option value="4">Role-playing(RPG, ARPG, and More)</option>
      <option value="6">sports</option>
      <option value="7">Strategy</option>
      <option value="8">Action-adventure</option>
      <option value="9">Survival and horror</option>
      <option value="10">racing</option>
      <option value="11">music</option>
    </Form.Select>
    </Col> */}
    </Row>
  
  <Row style={{marginTop:"7px"}}>
  <Col>
    <Form.Select  aria-label="Default select example" name='category' value={category} onChange={(e)=>setCategory(e.target.value)} >
    <option value="0">Select category</option>
      <option value="1">Real-time strategy(RTS)</option>
      <option value="2">Shooters(FPS and TPS)</option>
      <option value="3">Multiplayer online battle arena(MOBA)</option>
      <option value="4">Role-playing(RPG, ARPG, and More)</option>
      <option value="5">sports</option>
      <option value="6">Strategy</option>
      <option value="7">Action-adventure</option>
      <option value="8">Survival and horror</option>
      <option value="9">racing</option>
      <option value="10">music</option>
    </Form.Select>
    </Col>
  {/* <Col>
  <InputGroup>
          
          <Form.Control
            id="inlineFormInputGroupUsername"
            type="text"
            placeholder='images'
            name='images'
            value={images}
            onChange={(e)=>setImages(e.target.value)}
          />
        </InputGroup>

    </Col> */}
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>is_popular</InputGroup.Text>
    <Form.Select name='isPopular' value={isPopular} onChange={(e)=>setIsPopular(e.target.value)} >
        <option value="false">false</option>
        <option value="true">true</option>
    </Form.Select> 
    </InputGroup> 
    </Col>
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>is_new_released</InputGroup.Text>
    <Form.Select name='isNewReleased' value={isNewReleased} onChange={(e)=>setIsNewReleased(e.target.value)} >
        <option value="false">false</option>
        <option value="true">true</option>
    </Form.Select>  
    </InputGroup>
    </Col>
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>is_released</InputGroup.Text>
    <Form.Select name='isReleased' value={isReleased} onChange={(e)=>setIsReleased(e.target.value)} >
        <option value="false">false</option>
        <option value="true">true</option>
    </Form.Select> 
    </InputGroup> 
    </Col>
    <Col xs="auto" >
    <InputGroup>
    <InputGroup.Text>status</InputGroup.Text>
    <Form.Select name='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option value="on">on</option>
        <option value="off">off</option>
    </Form.Select> 
    </InputGroup> 
    </Col>
  </Row>
  <Row>
  <Col  >
      <InputGroup.Text style={{marginBottom:5,marginTop:5}}>Feature</InputGroup.Text>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} name='feature' value={feature} onChange={(e)=>setFeature(e.target.value)} />
        </Form.Group>
    </Col>
  </Row>
  <Row >
        <Col  >
    <InputGroup.Text style={{marginBottom:5,marginTop:5}}>Description</InputGroup.Text>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} name='description' value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
    </Col>
        <Col xs="auto" >
          <Button type="submit" className="mb-2" variant="outline-success" style={{height:50, marginTop: 75}} >
            Add game
          </Button>
        </Col>
  </Row>
</Form>
</>
      }
      <GameLists products={products} handleEditGame={handleEditGame} setEditGame={setEditGame} setIsEdit={setIsEdit} handleDeleteGame={handleDeleteGame} />
      </>
  )
}

export default Games