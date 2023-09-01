import React, { useState } from 'react'

import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import styled from '@emotion/styled'
import '../App.css';

import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'


const Container = styled(FormGroup)`
    width: 50%;
    margin: 0 auto 0 auto;
    padding: 20px;
    border-radius : 15px;
    & > div{
      margin-top: 20px;
    }
    background: #fff;
`

const defaultValue = {
  name:"",
  username:"",
  email:"",
  phone:"",
  address:"",
}


export default function AddUser() {

  const [user, setUser] = useState(defaultValue)

  const navigate = useNavigate()

  const onValueChange = (e) => {
      console.log(e.target.name, e.target.value)
      setUser({ ...user, [e.target.name]: e.target.value })
      console.log(user)
  }

  const addUserDetails = async() => {
      await addUser(user)
      navigate('/allUser')
  }

  return (
    <div className="adduser_body">
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' required/>
      </FormControl>

      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='username' required/>
      </FormControl>

      <FormControl>
        <InputLabel>E-mail</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email' required/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone' required/>
      </FormControl>

      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='address' required/>
      </FormControl>

      <FormControl>
        <Button type="submit" variant="contained" onClick={()=> addUserDetails()}>Add User</Button>
      </FormControl>
      
    </Container>
    </div>
  )
}






// import React, { useState, useEffect } from 'react'
// import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
// import styled from '@emotion/styled'
// import { addUser } from '../service/api'
// import { useNavigate } from 'react-router-dom'

// const Container = styled(FormGroup)`
//   width: 50%;
//   margin: 3% auto 0 auto;
//   & > div {
//     margin-top: 20px;
//   }
// `

// const defaultValue = {
//   name: "",
//   username: "",
//   email: "",
//   phone: "",
// }

// export default function AddUser() {
//   const [user, setUser] = useState(defaultValue)
//   const [isFormValid, setIsFormValid] = useState(false) // state to track form validity

//   const navigate = useNavigate()

//   useEffect(() => {
//     // Check if all fields have valid values
//     const isValid =
//       user.name.trim() !== "" &&
//       user.username.trim() !== "" &&
//       user.email.trim() !== "" &&
//       user.phone.trim() !== ""

//     setIsFormValid(isValid)
//   }, [user])

//   const onValueChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value })
//   }

//   const addUserDetails = async () => {
//     await addUser(user)
//     navigate('/allUser')
//   }

//   return (
//     <Container>
//       <Typography variant="h4">Add User</Typography>
//       <FormControl>
//         <InputLabel>First Name</InputLabel>
//         <Input onChange={onValueChange} name='name' required />
//       </FormControl>

//       <FormControl>
//         <InputLabel>Last Name</InputLabel>
//         <Input onChange={onValueChange} name='username' required />
//       </FormControl>

//       <FormControl>
//         <InputLabel>E-mail</InputLabel>
//         <Input onChange={onValueChange} name='email' required />
//       </FormControl>

//       <FormControl>
//         <InputLabel>Phone</InputLabel>
//         <Input onChange={onValueChange} name='phone' required />
//       </FormControl>

//       <FormControl>
//         <Button
//           type="submit"
//           variant="contained"
//           onClick={addUserDetails}
//           disabled={!isFormValid} // Disable the button if form is not valid
//         >
//           Add User
//         </Button>
//       </FormControl>
//     </Container>
//   )
// }
