import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material'
import '../App.css'

import { getUsers, deleteUser} from '../service/api'
import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
    width: 90%;
    margin: 0 auto 0 auto;
    background: #fff;
`

const THead = styled(TableRow)`
    background :#474e5d;
    & > th{
      color:#fff;
      font-size: 20px;
      font-weight: bold;
    }
`

const TBody = styled(TableRow)`
    & > td{
      // font-size: 15px;
    }
`


export default function AllUsers() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    getAllUsers();  
  }, []);
  
  const getAllUsers = async() => {
    let response = await getUsers();
    // console.log(response);
    setUsers(response.data);
  }

  const deleteuser = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (

    <div className="alluser_body">
    <StyledTable>

        <TableHead>
          <THead>
            {/* <TableCell>Id</TableCell> */}
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Contact No.</TableCell>
            {/* <TableCell>Address</TableCell> */}
            <TableCell></TableCell>
          </THead>
        </TableHead>

        <TableBody>

            {
              users.map(user => (
                  <TBody key={user.userId}>

                    {/* <TableCell>{user.userId}</TableCell> */}
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    {/* <TableCell>{user.address}</TableCell> */}
                    <TableCell>
                        <Button variant='contained' style={{margin: 10}} component={Link} to={`/editUser/${user.userId}`}>Edit</Button>
                        <Button variant='contained' color='secondary' onClick={()=> deleteuser(user.userId)}>Delete</Button>
                    </TableCell>

                  </TBody>
              ))
            }

        </TableBody>

    </StyledTable>
    </div>
  )
}
