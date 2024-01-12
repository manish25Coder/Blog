import React from 'react'
import { DummyPosts} from "../Data/Data";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [posts,setPosts] = useState(DummyPosts)
  return (
    <section className='dashboard'>
      
      { posts.length > 0 ? <div className="container dashboard-container">
            {
                posts.map(({id, Image, authorOId, category, title, des},index)=>{
                  return <article key={index} className='deashbord-post'>
                    <div className="dashboard-post-info">
                      <div className="dashboard-post-image">
                        <img src={Image} alt='' />
                      </div>
                      <h5>{title}</h5>
                    </div>
                    <div className="dashboard-post-action">
                      <Link to={`/posts/${authorOId}`} className='btn-V btn btn-sm'>View</Link>
                      <Link to={`/posts/${authorOId}/edit`} className='btn btn-sm btn-primary'>Edit</Link>
                      <Link to={`/posts/${authorOId}/delete`} className='btn btn-sm btn-danger'>Delete</Link>
                    </div>
                  </article>
                })
            }
        </div> : <h2 className='error-center'>yet You not posted</h2>
        }
      
    </section>
  )
}
