// import React, { useState } from 'react'

import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import styled from '@emotion/styled'
import '../App.css';

import { editUser, getUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Container = styled(FormGroup)`
    width: 50%;
    margin: 3% auto 0 auto;
    & > div{
      margin-top: 20px;
    }
    background: #fff;
    padding: 20px;
    border-radius : 15px;

`

const defaultValue = {
  name:"",
  username:"",
  email:"",
  phone:"",
  address:"",
}


export default function EditUser() {

  const [user, setUser] = useState(defaultValue)

  const {id} = useParams();

  const navigate = useNavigate()

  useEffect(() => {
        loadUserDetails();
  }, [])


  const loadUserDetails = async() => {
        const response = await getUser(id);
        console.log(response.data)
        setUser(response.data[0])
  }
  

  const onValueChange = (e) => {
      console.log(e.target.name, e.target.value)
      setUser({ ...user, [e.target.name]: e.target.value })
      console.log(user)
  }

  const editUserDetails = async() => {
    await editUser(user, id)
    navigate('/allUser')
}


  return (
    <div className="edituser_body">
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={user.name} required/>
      </FormControl>

      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username} required/>
      </FormControl>

      <FormControl>
        <InputLabel>E-mail</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email} required/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone} required/>
      </FormControl>

      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='address' value={user.address} required/>
      </FormControl>

      <FormControl>
        <Button type="submit" variant="contained" onClick={()=> editUserDetails()}>Edit User</Button>
      </FormControl>
      
    </Container>
    </div>
  )
}
