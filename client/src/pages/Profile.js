import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { pink } from '@mui/material/colors';

function Profile({ user,fetchUsers }) {
  const [username,setUsername]=useState(user.username)
  const [email,setEmail]=useState(user.email)
  const [showChangeSuccess,setShowChangeSuccess]=useState(false)
const handleSubmit = (e) => {
  e.preventDefault()
  fetch(`/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
    }),
  })
    .then((r) => {
      if (r.ok) {
        return r.json(); // Return the parsed JSON response
      } else {
        throw new Error("Failed to save changes");
      }
    })
    .then((data) => {
      setShowChangeSuccess(true);
      fetchUsers(data); // Pass the parsed JSON response to fetchUsers
    })
    .catch((error) => {
      alert(error.message);
    });
};




  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 600,  margin: 'auto', marginTop:5 }}>
        <h3>My Profile</h3>
        <div style={{border:"2px solid lightGrey",height: 400,}}>
          <Form style={{width:550,margin:"auto",marginTop:12}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
          {showChangeSuccess?
          <div style={{border:"1px solid black",width:550,height:30, margin:"auto",marginTop:16,position:"relative"}}>
            <div style={{width:28,height:30,border:"2px solid blue",backgroundColor:"blue"}}>

            </div>
            <DoneOutlinedIcon sx={{ color: pink[500] }} style={{position:"absolute",marginTop:-28}}/>
            <span style={{color:"blue",position:"absolute",marginTop:-28,marginLeft:40}}>
            Your changes have been saved
            </span>
          </div>:''}
        </div>
      </div>
    </div>
  );
}

export default Profile;
