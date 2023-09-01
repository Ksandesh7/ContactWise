import React from 'react'
import '../App.css'
import { AppBar,Toolbar, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
    background: #111111;
    position: sticky;
    top:0;
`

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

export default function NavBar() {
  return (
    // <Header position='static'>
    //     <Toolbar>
            
    //         <Tabs to="/">Contact Manager</Tabs>
    //         <Tabs to="/allUser" activeClassName="active-link">All Users</Tabs>
    //         <Tabs to="/addUser" activeClassName="active-link">Add Users</Tabs>

    //     </Toolbar>
    // </Header>
    <>
    {/* <Header position='static'> */}
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark start-bar " >
      <div class="container-fluid">
        <a class="navbar-brand">ContactWise</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/allUser">All Users</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/addUser">Add Users</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
    {/* </Header> */}
    </>
  )
}
