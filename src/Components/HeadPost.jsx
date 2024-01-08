import React from 'react'

import headpostImage from '../assets/1.jpg'
import { Link } from 'react-router-dom'
//importing headpost data...
import { headPost } from '../Data/Data'

export default function HeadPost() {
  return (
    <article className='head-post'>
        {
            headPost.map(({id,Image,authorOId,title,des},index)=>{
                return(
                    <div key={index} className='container head-post-container'>
                        
                            <div className="post-content">
                                <Link to={`posts/${authorOId}`} >
                                    <h1>{title}</h1>
                                </Link>
                                <p>{des}</p> 
                        </div>
                        <div className="post-image">
                            <img src={Image} alt='' />
                            </div>
                    </div>
                );
            })
        }
        
    </article>
  )
}
