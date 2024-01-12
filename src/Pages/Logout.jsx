import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <section>
      <div className="error-center">
       <h2>Log Out</h2>
       <Link to={'/'} className='btn btn-primary'>Back To Home</Link>
      </div>
    </section>
  )
}
