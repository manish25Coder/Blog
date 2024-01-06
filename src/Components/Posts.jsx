import React from 'react'
//Dummy posts Data......
import { DummyPosts } from '../Data/Data';

//userState...
import { useState } from 'react';
//components....
import PostItem from './PostItem';


export default function Posts() {
    const [posts,setPosts] = useState(DummyPosts)
  return (
    <section className='posts'>
      { posts.length > 0 ? <div className="container posts-container">
            {
                posts.map(({id, Image, authorOId, category, title, des},index)=><PostItem key={index} Image={Image} category={category} authorOId={authorOId} title={title} des={des} postId={id} />)
            }
        </div> : <h2 className='error-center'>No posts founds</h2>
        }
    </section>
  )
}
