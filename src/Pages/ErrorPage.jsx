import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <section>
      <div className="error-center">
       <h2>404</h2>
       <h3>Opps, This Page Not Found !</h3>
       <Link to={'/'} className='btn btn-primary'>Back To Home</Link>
      </div>
    </section>
  )
}
