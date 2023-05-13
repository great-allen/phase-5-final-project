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
                        Order No: {order.order_no}
                        <br />
                        Order date: {order.payment_at.split('').slice(0,19).join('')}  Total Money: ${order.total_money}(AUD)
                        <br/>
                        Shipping: {order.address.address.toUpperCase() + ' ' + order.address.postcode} {'  '} Contact Name: {order.address.first_name.toUpperCase()+ ' ' + order.address.last_name.toUpperCase() }  Contact No: {order.address.phone_number}
                        <br/>
                        <br/>
                        Items:
                        <br/>
                        {order.order_items && order.order_items.map((item)=>{
                            return <ul key={item.id}>
                                    <li>
                                        Title: {item.title.toUpperCase()}({item.platform.toUpperCase()})  Price: ${item.price}(AUD)  Units: {item.amount}
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