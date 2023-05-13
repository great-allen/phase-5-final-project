import React,{useEffect,useState} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { pink } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import UserChangeForm from './UserChangeForm'
import Form from 'react-bootstrap/Form';
const columns = [
  {
    id: 'id',
    label: 'ID',
    minWidth: 70,
    align: 'left',
    format: (value) => value.toFixed(0),
  },
  {
  id: 'username',
  label: 'username',
  minWidth: 70,
  align: 'left',
  format: (value) => value.toLocaleString('en-US'),
},
  
  {
    id: 'email',
    label: 'email',
    minWidth: 70,
    align: 'left',
    format: (value) => value.toLocaleString('en-AU'),
  },
  {
    id: 'is_admin',
    label: 'Admin?',
    minWidth: 70,
    align: 'left',
    format: (value) => value.toLocaleString('en-AU'),
  }
  
  
];

function Users() {
  const [search,setSearch]=useState('')
  const [allUsers,setAllUsers]=useState([])
  const [isEdit,setIsEdit]=useState(false)
  const [editUser,setEditUser]=useState(null)
  useEffect(()=>{
    fetch('/users').then(r=>r.json()).then(data=>setAllUsers(data))
  },[])

  const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
  
      const onEditUser=(user)=>{
        
        setIsEdit(true)
        setEditUser(user)
        
      } 
      
      const onDeleteUser=(deleteUser)=>{
        const deleteUsers=allUsers.filter((user)=>{
          return user.id !==deleteUser.id
        })
        setAllUsers(deleteUsers)
      }

      const updateUser=(newUser)=>{
        const updatedUsers=allUsers.map((user)=>{
          return user.id===newUser.id? newUser:user
        })
        setAllUsers(updatedUsers)
        setIsEdit(false)
      }
      
      
      const usersToDisplay = allUsers.filter((user) => {
        return user.username.toLowerCase().includes(search.toLowerCase());
      });
      
  return (
    <div>
      <Form className="d-flex" style={{maxWidth:300,marginLeft:"80%",marginRight:"4.5%",marginTop:8,marginBottom:8}} >
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
      {isEdit?(<UserChangeForm editUser={editUser} updateUser={updateUser} />):''}
      <Paper sx={{ width: '90%', overflow: 'hidden',margin:"0 auto" }}>
    <TableContainer sx={{ maxHeight: 550 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead >
          <TableRow>
            {columns.map((column) => (
              <TableCell
              
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth,color:"#7776BC",fontSize:"15px" }}
              >
                {column.label}
              </TableCell>
            ))}
        
          </TableRow>
        </TableHead>
        <TableBody>
          
          {usersToDisplay.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user,index) => {
              return (
                
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                   
                  {columns.map((column) => {
                    const value = user[column.id];
                    return (

                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'is_admin' ? (
                                user.is_admin?"YES" : "NO"
                            ) : (
                                column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value
                            )}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                      <Stack direction="row" spacing={2} style={{position:"relative"}}>
                      <EditOutlinedIcon sx={{ color: pink[300],display:"block" }} fontSize="medium" onClick={()=>onEditUser(user)}
                       />
                        {/* <div style={{transition: "opacity 0.3s ease-in-out",
                                      position: 'absolute',
                                      top: 'calc(100% + 10px)',
                                      left: 0,
                                      backgroundColor: 'white',
                                      border: '1px solid gray',
                                      borderRadius: '5px',
                                      fontSize:"medium",
                                      zIndex:1 }}>
                          {product.showEditDes?"Edit":''}
                        </div> */}
                        <DeleteOutlinedIcon fontSize="medium" sx={{ color: green[300],display:"block" }} onClick={()=>onDeleteUser(user)}
                         />
                         {/* <div style={{transition: "opacity 0.3s ease-in-out",
                                      position: 'absolute',
                                      top: 'calc(100% + 10px)',
                                      right: 0,
                                      backgroundColor: 'white',
                                      border: '1px solid gray',
                                      borderRadius: '5px',
                                      fontSize:"medium",
                                      zIndex:1 }}>
                          {product.showDeleteDes?"Delete":''}
                        </div> */}
                        {/* <EditOutlinedIcon sx={{ color: pink[300] }} fontSize="small" onClick={()=>onEditJob(job)}/>
                        <DeleteOutlinedIcon fontSize="small" sx={{ color: green[300] }} onClick={()=>onDelete(job)}/> */}
                      </Stack>
                    </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={usersToDisplay.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
    </div>
  )
}

export default Users