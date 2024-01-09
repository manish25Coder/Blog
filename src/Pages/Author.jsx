import React from 'react'
import { useState } from 'react'
//Author data....
import { DummyAuthor } from '../Data/Data'
import { Link } from 'react-router-dom'

export default function Author() {
  const [author,setAuthor] = useState(DummyAuthor)
  return (
    <section className='author'> 
   
   {author.lenght > 0 ? <h2 className='error-center'>No user founded</h2>  : <div className="container author-container"> 
        {
          author.map(({id, Image, name, posts},index)=>{
            return <Link to={`/posts/user/${id}`} key={index} className='author-avatar'>
              <div className="author-image">
                <img src={Image} alt='' />
              </div>
              <div className="author-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
        </div> }
    </section>
  )
}
