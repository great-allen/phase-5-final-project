import React, { useState, useEffect } from 'react';
import { Link,useHistory } from "react-router-dom";
import { BsBagCheckFill } from 'react-icons/bs';
import { useSelector,useDispatch } from "react-redux";
import { resetCarts } from "../redux/cartReducer";
import { resetAddress } from "../redux/addressReducer";
import { runFireworks } from '../lib/utils';

const Success = ({userId,checkedAddress,allProducts}) => {
    const pickAddress = useSelector((state) => state.address.addresses);
    // console.log("success",allProducts);
   const [orders,setOrders]=useState([])
    // const [games,setGames]=useState([])
    // const [carts,setCarts]=useState([])
    const searchParams = new URLSearchParams(window.location.search);
    const paymentIntentId = searchParams.get('payment_intent');
    const history = useHistory();
    const [countdown, setCountdown] = useState(5);
    
    const dispatch=useDispatch()
      
    // const products = useSelector((state) => state.cart.products);
    
  const totalPrice = () => {
    let total = 0;
    console.log("allProducts",allProducts);
    allProducts && allProducts.forEach((item) => {
      total += item && item.quantity * parseFloat(item && item.price);
    });
    return total.toFixed(2);
  };
  const currentDate = new Date().toLocaleString().replace('T', ' ').substring(0, 19);;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/orders');
        const data = await response.json();
  
        const orderToUpdate = data && data.find((item) => {
          return item.payment_no === paymentIntentId;
        });
  
        if (orderToUpdate) {
          const updateResponse = await fetch(`/orders/${orderToUpdate.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              user_id:userId,
              total_money: totalPrice(),
              payment_at:currentDate,
              address_id: pickAddress[0].id,
              payment_no:paymentIntentId
            }),
          });
        } else {
          const createResponse = await fetch("/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              user_id:userId,
              total_money: totalPrice(),
              payment_at:currentDate,
              address_id: pickAddress[0].id,
              payment_no:paymentIntentId
            }),
          });
          const responseData = await createResponse.json();
          await handleData(responseData);
        }
  
        runFireworks();
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };
  
    fetchData();
  }, [allProducts]);
  
  const handleData = async (data) => {
    try {
      const response = await fetch("/shopping_cart");
      const products = await response.json();
      let productsToReturn = [];
      let requests = products && products.map(async (product) => {
        const response = await fetch("/order_items", {
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
        const responseData = await response.json();
        productsToReturn.push(responseData.productInfo);
      });
  
      await Promise.all(requests);
      console.log("productsToReturn", productsToReturn);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  
  useEffect(() => {
    const hasRun = localStorage.getItem('hasRun');
    if (!hasRun) {
      const fetchData = async () => {
        try {
          const cartResponse = await fetch('/shopping_carts');
          const cartData = await cartResponse.json();
  
          const productsResponse = await fetch('/products');
          const productsData = await productsResponse.json();
  
          const filteredProducts = productsData.filter(product => cartData.some(item => item.uuid === product.uuid));
          console.log("filteredProducts",filteredProducts);
  
          cartData.forEach(async cartItem => {
            const product = filteredProducts.filter((product)=>{
              return product.uuid===cartItem.uuid
            });
            if (product) {
              console.log("product",product[0].amount);
              
              const newQuantity = product[0].amount - cartItem.quantity;
              const response = await fetch(`/products/${product[0].id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: newQuantity })
              });
              const responseData = await response.json();
              localStorage.setItem('hasRun', true);
            }
          });
        } catch (error) {
          console.error(error);
          alert(error);
        }
      };
  
      fetchData();
    }
  }, []);
  

  


  // useEffect(() => {
  //   // console.log("firstProducts",allProducts);
  //   fetch('/orders')
  //     .then(r => r.json())
  //     .then((data) => {
  //       const orderToUpdate = data&&data.find((item) => {
  //         return item.payment_no === paymentIntentId;
  //       });
  
  //       if (orderToUpdate) {
  //         fetch(`/orders/${orderToUpdate.id}`, {
  //           method: "PATCH",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ 
  //             user_id:userId,
  //             total_money: totalPrice(),
  //             payment_at:currentDate,
  //             address_id: pickAddress[0].id,
  //             payment_no:paymentIntentId
  //           }),
  //         })
  //           .then((res) => res.json())
  //           .then((data)=>{
              
  //           }).catch(err=>alert(err));
  //       } else {
  //         // console.log("Products: ", allProducts);
  //         fetch("/orders", {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ 
  //             user_id:userId,
  //             total_money: totalPrice(),
  //             payment_at:currentDate,
  //             address_id: pickAddress[0].id,
  //             payment_no:paymentIntentId
  //           }),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             handleData(data)
  //           });
  //       }
        
  //     })
  //     runFireworks();
      
  //     // const intervalId = setInterval(() => {
  //     //   setCountdown(countdown => countdown - 1);
  //     // }, 1000);
      
  //     // return () => {
  //     //   clearInterval(intervalId);
        
  //     // }

  // }, [allProducts]);
  
  // const handleData = (data) => {
  //   // console.log("start iterate");
  //   fetch("/shopping_cart")
  //     .then((r) => r.json())
  //     .then((products) => {
  //       // console.log("thisProducts", products);
  //       let productsToReturn = [];
  //       let requests = products && products.map((product) => {
  //         return fetch("/order_items", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             title: product.title,
  //             amount: product.quantity,
  //             price: product.price,
  //             url: product.image_url,
  //             platform: product.platform,
  //             category: product.category,
  //             order_id: data.id,
  //           }),
  //         });
  //       });
  
  //       Promise.all(requests)
  //         .then((responses) => Promise.all(responses.map((r) => r.json())))
  //         .then((data) => {
  //           productsToReturn = data.map((item) => item.productInfo);
  //           // console.log("iterate finish");
          
  //         })
  //         .catch((err) => console.log(err));
  //     });
      
  // };
  
  // useEffect(() => {
  //   const hasRun = localStorage.getItem('hasRun');
  // if (!hasRun) {
  //   fetch('/shopping_carts')
  //     .then(r => r.json())
  //     .then((cartData) => {
  //       // setCarts(cartData)
  //       console.log("cartData",cartData);
  //       fetch('/products')
  //         .then(r => r.json())
  //         .then((productsData) => {
  //           // setGames(productsData)
  //           console.log("data",productsData);
  //           // Create a mapping of product UUIDs to their corresponding product objects
  //           // const productsMap = {};
  //           // productsData.forEach(product => {
  //           //   productsMap[product.uuid] = product;
  //           // });
  //           const filteredProducts = productsData.filter(product => cartData.some(item => item.uuid === product.uuid));
  //           console.log("filteredProducts",filteredProducts);
  //           // Iterate over each item in the shopping cart and update the corresponding product quantity
  //           cartData.forEach(cartItem => {
  //             const product = filteredProducts.filter((product)=>{
  //               return product.uuid===cartItem.uuid
  //             });
  //             if (product) {
  //               console.log("product",product[0].amount);
                
  //               const newQuantity = product[0].amount - cartItem.quantity;
  //               fetch(`/products/${product[0].id}`, {
  //                 method: 'PATCH',
  //                 headers: {
  //                   'Content-Type': 'application/json'
  //                 },
  //                 body: JSON.stringify({ amount: newQuantity })
  //               }).then(r=>r.json()).then(localStorage.setItem('hasRun', true))
  //             }
  //           })
  //         });
  //     });
  //   }
  // }, []);
  


  
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
  }, []);
  

// console.log(currentOrder[0]&&currentOrder[0].order_no);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Your order number is {currentOrder[0]&&currentOrder[0].order_no}</p>
        <p className="email-msg">Check your email inbox for the receipt.</p>
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