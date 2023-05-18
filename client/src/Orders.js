import React,{useEffect,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};





function Orders() {
  const [search,setSearch]=useState('')
  const [orders,setOrders]=useState([])
  const [open, setOpen] = useState(false);
  const [selects,setSelects]=useState([])
  
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("/orders")
      .then((r) => r.json())
      .then(setOrders);
  }, []);
const handleClick=(row)=>{
  setOpen(true)
  setSelects(row)
}
console.log(selects);

const ordersToDisplay = orders.filter((order) => {
  return order.order_no.toLowerCase().includes(search.toLowerCase());
});



  return (
    <>
    <Form className="d-flex" style={{maxWidth:300,marginLeft:"80%",marginRight:"2%",marginTop:8}} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            {/* <Button variant="outline-success" type="submit" >Search</Button> */}
          </Form>
    <TableContainer component={Paper} style={{maxHeight:1000,width:"95%",margin:"0 auto", marginTop: 10,overflow:"scroll" }}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full name</TableCell>
            <TableCell align="right">Order no</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Payment Ref</TableCell>
            
            <TableCell align="right">shipping</TableCell>
            <TableCell align="right">Items</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersToDisplay.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.address.first_name.toUpperCase() +' '+ row.address.last_name.toUpperCase()}
              </TableCell>
              <TableCell align="right">{row.order_no }</TableCell>
              <TableCell align="right">$ {row.total_money }</TableCell>
              <TableCell align="right">{row.payment_at.split('').slice(0,10).join('')+','+''+row.payment_at.split('').slice(11,19).join('')}</TableCell>
              <TableCell align="right">{row.payment_no}</TableCell>
              <TableCell align="right">{row.address.address.toUpperCase()  +' '+ row.address.postcode}</TableCell>
              <TableCell align="right"><button onClick={()=>handleClick(row)}>Click for info</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
            {
             selects.order_items && selects.order_items.map((item,index)=>{
                return <ListGroup key={item.id} style={{maxHeight:350, overflow:"scroll"}}>
                <ListGroup.Item >
                  <div>
                    <span style={{color:"#BB2B50"}}>Item {index+1}: {''}</span>
                   {item.title} ({item.platform})
                  </div>
                  <br/>
                  <span style={{color:"#2E945A"}}>
                 Unit: {''}
                 </span> 
                 <span style={{marginRight:5}}>
                 {item.amount},{' '}
                  </span> 
                  
                 <span style={{color:"#2E945A"}}>
                 Price: {''}
                 </span>
                 <span>
                  ${item.price}
                 </span>
                 
                </ListGroup.Item>
                </ListGroup>
              })
            }
        
        </Box>
      </Modal>
    </>
  );
  
}

export default Orders