import React,{useState,useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
function OrderHistory({user}) {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('/orders').then(r=>r.json()).then((data)=>{
            const userOrders=data && data.filter((order)=>{
                return order.user_id===user.id
            })
            setOrders(userOrders)
        })
    },[])
console.log(orders);
    
  return (
    <div>
        <h5 style={{marginLeft:5,marginBottom:8}}>welcome {user.username}, here are your order histories</h5>
        {orders && orders.map((order)=>{
            return <ListGroup key={order.id} style={{marginBottom:8}}>
                    <ListGroup.Item>
                        <div>
                            <span style={{color:"#BB2B50"}}>
                                Order No:
                            </span> {order.order_no}
                        </div>
                        <br />
                        <span style={{color:"#BB2B50"}}>Order date:</span>
                         {order.payment_at.split('').slice(0,10).join('')+','+''+order.payment_at.split('').slice(11,19).join('')}  <span style={{color:"#BB2B50"}}>Total Money:</span> ${order.total_money}(AUD)
                        <br/>
                        <span style={{color:"#BB2B50"}}>Shipping:</span>
                         {order.address.address.toUpperCase() + ' ' + order.address.postcode} {'  '} Contact Name: {order.address.first_name.toUpperCase()+ ' ' + order.address.last_name.toUpperCase() }  <span style={{color:"#BB2B50"}}>Contact No:</span> {order.address.phone_number}
                        <br/>
                        <br/>
                        <span style={{color:"#BB2B50"}}>Items:</span>
                        
                        <br/>
                        {order.order_items && order.order_items.map((item)=>{
                            return <ul key={item.id}>
                                    <li>
                                        <span style={{color:"#007A70"}}>Title: </span>
                                        {item.title.toUpperCase()}({item.platform.toUpperCase()})  <span style={{color:"#007A70"}}>Price:</span> ${item.price}(AUD)  <span style={{color:"#007A70"}}>Units:</span> {item.amount}
                                    </li>
                            </ul>
                        })}
                    </ListGroup.Item>
            </ListGroup>
        })}
    </div>
  )
}

export default OrderHistory