import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav>
      <ul>
        <Link to='/'>
          <li>
            Home
          </li>
        </Link>
        <Link to='/create'>
          <li>
            Create
          </li>
        </Link>
        <Link to='/Public'>
          <li>
            Public Notes
          </li>
        </Link>
        <Link to='/forum'>
          <li>
            Forum
          </li>
        </Link>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default NavBar