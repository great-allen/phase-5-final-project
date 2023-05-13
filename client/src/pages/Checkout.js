import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import Box from '@mui/material/Box';

import UserAddress from '../UserAddress';
import ShoppingCartDetails from '../ShoppingCartDetails';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51N1J1DKel7nI8Ew4U8cJRV5tdo5NoK12twWzeJHdlOVNUKboTfXzZ1Ak6MfO3hno7XIS3ynUjSfK9HXWkgGTQU8I00ACm2dLn2");



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



function Checkout({user}) {
  const [products,setProducts]=useState([])
  const [clientSecret, setClientSecret] = useState("");
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

    
  useEffect(()=>{
    fetch('/shopping_carts').then(r=>r.json()).then(setProducts)
  },[])
    
    console.log("checkout",products);
    const [addresses,setAddresses]=useState([])
    const [open, setOpen] = useState(false);
    // const [order,setOrder]=useState([])
    const [checkedAddress, setCheckedAddress] = useState(null);
    
    const totalPrice = () => {
      let total = 0;
      products && products.forEach((item) => {
        total += item && item.quantity * parseFloat(item && item.price);
      });
      return total.toFixed(2);
    };
    const handleClose = () => setOpen(false);
    useEffect(()=>{
        fetch('/addresses').then(r=>r.json()).then(setAddresses)
    },[])
    // const userAddresses=addresses.filter((address)=>{
    //     return address.user_id===user.id
    // })
    
    // const defaultAddress=userAddresses.find((address)=>{
    //   return address.is_default_address===true
    // })
    const onAddAddress=(newAddress)=>{
      setAddresses([newAddress,...addresses])
    }
    const updateAddress=(data)=>{
      const updateAddresses=addresses.map((address)=>{
        return address.id===data.id? data:address
      })
      setAddresses(updateAddresses)
    }   

    const handlePayment=()=>{
      if (checkedAddress === null) {
        alert('Please select an recipient.');}
        else {
      setOpen(true)
      fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount:(totalPrice()*100).toFixed(0),
                                currency: "aud",
                                payment_method_types: ['card'],
                                receipt_email: user.email.toString(),
                                name:checkedAddress.first_name.toUpperCase() + checkedAddress.last_name.toUpperCase(),
                                line1:checkedAddress.address,
                                phone: checkedAddress.phone_number,
                                postal_code:checkedAddress.postcode,
                                description: user.username,
                                line2:checkedAddress.id
                              }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
    
  }
    
    const onDelete=(data)=>{
      // const deleteAddresses=addresses.filter((address)=>{
      //   return address.id !==data.id
      // })
      // setAddresses(deleteAddresses)
      fetch('/addresses').then(r=>r.json()).then(setAddresses)
    }
    
    

    
     return (
        <Box sx={{ flexGrow: 1,width:"95%",margin:"0 auto",marginTop:5 ,marginBottom:20,position:"relative"}}>
          
            
            
            {
              addresses.length===0? "Please add recipient details":
              <UserAddress addresses={addresses} user={user} updateAddress={updateAddress} onDelete={onDelete} checkedAddress={checkedAddress} setCheckedAddress={setCheckedAddress} onAddAddress={onAddAddress} />
            }
            <ShoppingCartDetails totalPrice={totalPrice}/>
            
            
            <Button variant="contained"  size="large" onClick={handlePayment} style={{position:"absolute",right:30,bottom:-120,fontSize:16,backgroundColor: '#0063cc',width:180,height:40,border: '1px solid',lineHeight: 1.5,borderColor: '#0063cc',
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(',')}}>Confirm and Pay</Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
        </Box>
      </Modal>
            
            
        </Box>
      )
  
  }
  


export default Checkout