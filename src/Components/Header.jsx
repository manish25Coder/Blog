import React from 'react'
import { Link } from 'react-router-dom'

//imports react icons....
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export default function Header() {
  return (
    <nav>
        <div className='container nav-container'>
            <Link className='nav-logo' to={'/'}>
                <h3>B<span>log Sit</span>e</h3>
            </Link>

            <ul className="nav-menu">
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Link to={'/create'}>Create Posts</Link></li>
                <li><Link to={'/authors'}>Authors</Link></li>
                <li><Link to={'/logout'}>Logout</Link></li>
            </ul>

            <button className='nav-toggle-button'>
                <FaBars />
                <MdOutlineClose/>
            </button>
        </div>
    </nav>
  )
}
