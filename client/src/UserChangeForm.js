import React,{useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '@mui/material/Button';
function UserChangeForm({editUser,updateUser}) {
    const [username,setUsername]=useState(editUser.username)
    const [email,setEmail]=useState(editUser.email)
    const [isAdmin,setIsAdmin]=useState(editUser.is_admin)

    const onUpdateUser=(e)=>{
        e.preventDefault()
        console.log(isAdmin);
        fetch(`/users/${editUser.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username,
                                email:email,
                                is_admin: isAdmin}),
          })
            .then((r) => {
              if (r.ok) {
                r.json().then(data=>updateUser(data));
              } else {
                r.json().then((err) => alert(err.errors));
              }
            })
            .catch((error) => console.log(error));
    }

  return (
    <div style={{ width: '90%', overflow: 'hidden',margin:"0 auto" }}>
        <Form style={{marginTop:"7px"}} onSubmit={onUpdateUser}>
            <Row>
            <Col sm={2} >
                  <InputGroup>
                  <InputGroup.Text>username:</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroupUsername"
                      type="text"
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col sm={4} >
                  <InputGroup>
                  <InputGroup.Text>email:</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroupUsername"
                      type="text"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col sm={3}>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="admin"
                    checked={isAdmin}
                    onChange={(e)=>setIsAdmin(e.target.checked)}
                />
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="not admin"
                    checked={!isAdmin}
                    onChange={(e)=>setIsAdmin(!e.target.checked)}
                />
                </Col>
                <Col sm={3} >
                <Button variant="outlined" type="submit">UPDATE</Button>

                </Col>
            </Row>
        </Form>    
    </div>
  )
}

export default UserChangeForm