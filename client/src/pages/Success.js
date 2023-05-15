import React, { useState, useEffect } from 'react';
import { Link,useHistory } from "react-router-dom";
import { BsBagCheckFill } from 'react-icons/bs';
import { useSelector,useDispatch } from "react-redux";
import { resetCarts } from "../redux/cartReducer";
import { resetAddress } from "../redux/addressReducer";
import { runFireworks } from '../lib/utils';
import { fetchCarts } from "../redux/cartReducer";
const Success = ({userId}) => {
   
    const pickAddress = useSelector((state) => state.address.addresses);
    
   const [orders,setOrders]=useState([])
    
    const searchParams = new URLSearchParams(window.location.search);
    const paymentIntentId = searchParams.get('payment_intent');
    const history = useHistory();
    const [countdown, setCountdown] = useState(5);
   
    const dispatch=useDispatch()
    // const allProducts = useSelector((state) => state.cart.products);
    // const totalPrice = allProducts.reduce((acc, curr) => {
      
    //   const productPrice= curr&&curr.quantity * parseFloat(curr&&curr.price)
    //   return acc + productPrice;
    // }, 0);
    
  // const totalPrice = (allProducts) => {
  //   let total = 0;
  //   console.log("allProducts",allProducts);
  //   allProducts&&allProducts.forEach((item) => {
  //     total += item && item.quantity * parseFloat(item && item.price);
  //   });
  //   return total.toFixed(2);
  // };
  const currentDate = new Date().toLocaleString().replace('T', ' ').substring(0, 19);;
  

  useEffect(() => {
    
    fetch("/shopping_cart")
      .then((response) => response.json())
      .then((data) => {
        const totalPrice = data.reduce((acc, curr) => {
          const productPrice = curr && curr.quantity * parseFloat(curr && curr.price);
          return acc + productPrice;
        }, 0);
  
        const fetchData = async () => {
          try {
            const response = await fetch("/orders");
            const data = await response.json();
  
            if (!data || data.length === 0) {
              console.log("price", totalPrice);
              const createResponse = await fetch("/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  user_id: userId,
                  total_money: totalPrice,
                  payment_at: currentDate,
                  address_id: pickAddress[0].id,
                  payment_no: paymentIntentId,
                }),
              });
              const responseData = await createResponse.json();
              handleData(responseData);
            } else {
              const orderToUpdate = data.find((item) => {
                return item.payment_no === paymentIntentId;
              });
  
              if (!orderToUpdate) {
                const createResponse = await fetch("/orders", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    user_id: userId,
                    total_money: totalPrice,
                    payment_at: currentDate,
                    address_id: pickAddress[0].id,
                    payment_no: paymentIntentId,
                  }),
                });
                const responseData = await createResponse.json();
                handleData(responseData);
              }
            }
            runFireworks()
          } catch (error) {
            console.error(error);
            alert(error);
          }
        };
  
        fetchData();
      });
  }, []);
  
  
  
  const handleData = (data) => {
    // console.log("start iterate");
    fetch("/shopping_cart")
      .then((r) => r.json())
      .then((products) => {
        // console.log("thisProducts", products);
        let productsToReturn = [];
        let requests = products && products.map((product) => {
          return fetch("/order_items", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: product.title,
              amount: product.quantity,
              price: product.price,
              url: product.image_url,
              platform: product.platform,
              category: product.category,
              order_id: data.id,
            }),
          });
        });
  
        Promise.all(requests)
          .then((responses) => Promise.all(responses.map((r) => r.json())))
          .then((data) => {
            productsToReturn = data.map((item) => item.productInfo);
            // console.log("iterate finish");
          
          })
          .catch((err) => console.log(err));
      });
      
  };
  
  useEffect(() => {
    const hasRun = localStorage.getItem('hasRun');
  if (!hasRun) {
    fetch('/shopping_carts')
      .then(r => r.json())
      .then((cartData) => {
        // setCarts(cartData)
        console.log("cartData",cartData);
        fetch('/products')
          .then(r => r.json())
          .then((productsData) => {
           
            console.log("data",productsData);
            
            const filteredProducts = productsData.filter(product => cartData.some(item => item.uuid === product.uuid));
            console.log("filteredProducts",filteredProducts);
            // Iterate over each item in the shopping cart and update the corresponding product quantity
            cartData.forEach(cartItem => {
              const product = filteredProducts.filter((product)=>{
                return product.uuid===cartItem.uuid
              });
              if (product) {
                console.log("product",product[0].amount);
                
                const newQuantity = product[0].amount - cartItem.quantity;
                fetch(`/products/${product[0].id}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ amount: newQuantity })
                }).then(r=>r.json()).then(localStorage.setItem('hasRun', true))
              }
            })
          });
      });
    }
  }, []);
  


  
  useEffect(()=>{
    fetch("/orders").then(r=>r.json()).then(setOrders)
  },[orders])
  
  
  
  
  //  console.log(orders);
  const currentOrder=orders && orders.filter((order)=>{
    return order.payment_no===paymentIntentId
  })


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(countdown => countdown - 1);
    }, 1000);
  
    const timeoutId = setTimeout(() => {
      history.push('/');
      setOrders([])
      localStorage.clear();
      dispatch(resetCarts());
      dispatch(resetAddress());
    }, 5000);
  
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [dispatch,history]);
  

// console.log(currentOrder[0]&&currentOrder[0].order_no);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Your order number is {currentOrder[0]&&currentOrder[0].order_no}</p>
        {/* <p className="email-msg">Check your email inbox for the receipt.</p> */}
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link to="/">
          <button onClick={() => {
          localStorage.clear();
          dispatch(resetCarts());
          dispatch(resetAddress());
    }} type="button" width="300px" className="btn" style={{backgroundColor: "#f02d34",color: "#fff",width: "100%",
          maxWidth: "400px"}}>
            Continue Shopping
          </button>
        </Link>
        <p style={{margin:"0 auto"}}>Going back to homepage in {countdown}s</p>
      </div>
      
    </div>
  )
}

export default Success