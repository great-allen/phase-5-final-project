import React,{useState} from 'react'
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
import Form from 'react-bootstrap/Form';


const columns = [{
    id: 'title',
    label: 'title',
    minWidth: 70,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
    
    {
      id: 'platform',
      label: 'platform',
      minWidth: 50,
      align: 'left',
      format: (value) => value.toLocaleString('en-AU'),
    },
    {
      id: 'amount',
      label: 'amount',
      minWidth: 50,
      align: 'left',
      format: (value) => value.toFixed(0),
    },
    {
      id: 'release_date',
      label: 'release_date',
      minWidth: 50,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'uuid',
      label: 'uuid',
      minWidth: 70,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'price',
      label: 'price',
      minWidth: 50,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'msrp',
      label: 'msrp',
      minWidth: 50,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'category',
      label: 'category',
      minWidth: 70,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    
  ];


function GameLists({products,setEditGame,setIsEdit,handleEditGame,handleDeleteGame}) {
  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [search,setSearch]=useState('')
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
      
      const onEditGame=(game)=>{
          setIsEdit(true)
          setEditGame(game)
          handleEditGame(game)
          
          
      }

      const onDeleteGame=(game)=>{
        if (window.confirm("Are you sure you want to delete this item?")){
        fetch(`/products/${game.id}`,{
          method: "DELETE"
        }).then((r)=>{
          if(r.ok){
            r.json().then((game)=>handleDeleteGame(game))
          }else {
            r.json().then((err) => alert(err.errors));
          }
        })
      }
    }
    const gamesToDisplay = products&&products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    

  return (
    <div>
      <Form className="d-flex" style={{maxWidth:300,marginLeft:"80%",marginTop:8,marginBottom:8}} >
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
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
          
          {gamesToDisplay.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((product,index) => {
              return (
                
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                   
                  {columns.map((column) => {
                    const value = product[column.id];
                    return (

                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                      <Stack direction="row" spacing={2} style={{position:"relative"}}>
                      <EditOutlinedIcon sx={{ color: pink[300],display:"block" }} fontSize="medium" onClick={()=>onEditGame(product)}
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
                        <DeleteOutlinedIcon fontSize="medium" sx={{ color: green[300],display:"block" }} onClick={()=>onDeleteGame(product)}
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
      count={gamesToDisplay.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
    </div>
  )
}

export default GameLists

