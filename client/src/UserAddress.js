import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addToAddress } from "./redux/addressReducer";
import { useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AddIcon from '@mui/icons-material/Add';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function UserAddress({ addresses,user,updateAddress,onDelete,checkedAddress,setCheckedAddress,onAddAddress}) {
  // const pickAddress = useSelector((state) => state.address.addresses);
  // console.log(pickAddress);
  const [openModal, setOpenModal] = useState(false);
  
  const onClose = () => setOpenModal(false);
  const dispatch = useDispatch();
  const tiny = useSizedIconButtonStyles({
        color: '#6894ff',
        // padding: '1rem',
        childSize: '1rem',
      });
  const [phoneNumber,setPhoneNumber]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [address,setAddress]=useState('')
  const [postcode,setPostcode]=useState('')
  const [editAddress,setEditAddress]=useState([])
  // const [checked,setChecked]=useState(false)
  // const [checkedAddress, setCheckedAddress] = useState(null);
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setFirstName('')
    setLastName('')
    setAddress('')
    setPhoneNumber('')
    setPostcode('')
    setOpenModal(true)
  };
  const handleOpen = (address) => {
    setOpen(true)
    setFirstName(address.first_name.toUpperCase())
    setLastName(address.last_name.toUpperCase())
    setAddress(address.address.toUpperCase())
    setPostcode(address.postcode)
    setPhoneNumber(address.phone_number)
    setEditAddress(address)
    
};
  const handleClose = () => setOpen(false);
  const handleCheckboxChange = (event, address) => {
    if (event.target.checked) {
      dispatch(addToAddress(address))
        // console.log(address);
      setCheckedAddress(address);
    } else {
      setCheckedAddress(null);
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    fetch(`/addresses/${editAddress.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name:firstName,
          last_name:lastName,
          address: address,
          postcode: postcode,
          phone_number:phoneNumber
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data)=>{
            setOpen(false)
            updateAddress(data)
          });
        } else {
          r.json().then((err) => alert(err.errors));
        }
      });
  }

  const handleDelete=(address)=>{
    if (window.confirm("Are you sure you want to delete this item?")){
      fetch(`/addresses/${address.id}`,{
        method: "DELETE"
      }).then((r)=>{
        if(r.ok){
          r.json().then((data)=>onDelete(data))
        }else {
          r.json().then((err) => alert(err.errors));
        }
      })
    }
  }

  const handleSubmitAddress=(e)=>{
    e.preventDefault();
    fetch("/addresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id:user.id,
        first_name:firstName,
        last_name:lastName,
        address: address,
        postcode: postcode,
        phone_number:phoneNumber
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data)=>{
          setOpenModal(false)
          onAddAddress(data)
        });
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }

  return (
    <>
    
    <h3>
    Recipient
    <Button onClick={onOpen}>
    <AddIcon />
    </Button>
    </h3>
    <Modal
        open={openModal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Form onSubmit={handleSubmitAddress}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Phone number</Form.Label>
                <Form.Control placeholder="0404 000 000" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <Row className="mb-3">
                
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Postcode</Form.Label>
                <Form.Control value={postcode} onChange={(e)=>setPostcode(e.target.value)}/>
                </Form.Group>
            </Row>
            {/* {editAddress && editAddress.is_default_address?("Default address")
            :
            
                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="set default address" value={checked} onChange={(e)=>setChecked(e.target.checked)}/>
                </Form.Group>
            } */}
            
            <Button variant="contained" color="primary" type="submit">
                SAVE
            </Button>
            </Form>
        </Box>
      </Modal>

    <ListGroup>
      {addresses &&
        addresses.map((address) => {
          return (
            <ListGroup.Item key={address.id}>
              <span>
                <Checkbox
                  inputProps={{ 'aria-label': 'Checkbox demo' }}
                  checked={checkedAddress === address}
                  onChange={(event) => handleCheckboxChange(event, address)}
                />
              </span>
              <span style={{ fontSize: 12 }}>
                {address.first_name.toUpperCase()} {address.last_name.toUpperCase()} {address.phone_number.toUpperCase()}{' '}
                {address.address.toUpperCase()} {address.postcode.toUpperCase()}
              </span>
              {' '}
              {' '}
              {/* <span>{address.set_as_default ? '(default address)' : ''}</span> */}
              <span>
                <IconButton classes={tiny} onClick={()=>handleOpen(address)}>
                    <Edit />
                </IconButton>
              </span>
              <span>
              <IconButton classes={tiny} onClick={()=>handleDelete(address)}>
                    <Delete />
              </IconButton>
              </span>
              
            </ListGroup.Item>
          );
        })}
    </ListGroup>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Phone number</Form.Label>
                <Form.Control placeholder="0404 000 000" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <Row className="mb-3">
                
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Postcode</Form.Label>
                <Form.Control value={postcode} onChange={(e)=>setPostcode(e.target.value)}/>
                </Form.Group>
            </Row>
            {/* {editAddress && editAddress.is_default_address?("Default address")
            :
            
                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="set default address" value={checked} onChange={(e)=>setChecked(e.target.checked)}/>
                </Form.Group>
            } */}
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Box>
      </Modal>
    </>
  );
}

export default UserAddress;
