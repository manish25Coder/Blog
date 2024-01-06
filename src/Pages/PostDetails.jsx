import React from 'react'
//Components.....
import PostAuthor from '../Components/PostAuthor'
//Router link ......
import { Link } from 'react-router-dom'
//postDetails image....
import postDtailImage from '../assets/1.jpg'

export default function PostDetails() {
  return (
    <section>
      <div className="container postdetail-container">
        <div className="postdetail-top">
          <PostAuthor />
          
            <div className="postdetail-buttons">
              <Link to={'/posts/werwer/edit' } className='btn btn-sm btn-primary'>
                Edit
              </Link>
              <Link to={'/posts/werwer/delete' } className='btn btn-sm btn-danger'>
                Delete
              </Link>
            
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum possimus aspernatur quo.</h1>
        <div className="postdetail-image">
          <img src={postDtailImage} alt='' />
        </div>
        <div className="postdetail-para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus, distinctio blanditiis cum id dicta reprehenderit unde? Illo, aperiam! Facere culpa quis a, fugit itaque earum aspernatur ea quibusdam expedita delectus obcaecati reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus, distinctio blanditiis cum id dicta reprehenderit unde? Illo, aperiam! Facere culpa quis a, fugit itaque earum aspernatur ea quibusdam expedita delectus obcaecati reiciendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus, distinctio blanditiis cum id dicta reprehenderit unde? Illo, aperiam! Facere culpa quis a, fugit itaque earum aspernatur ea quibusdam expedita delectus obcaecati reiciendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus, distinctio blanditiis cum id dicta reprehenderit unde? Illo, aperiam! Facere culpa quis a, fugit itaque earum aspernatur ea quibusdam expedita delectus obcaecati reiciendis.
        </p>
        </div>
      </div>
    </section>
  )
}
