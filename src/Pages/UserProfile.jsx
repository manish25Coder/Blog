import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import profileImage from "../assets/a4.jpg"
import profileImage from "../assets/a4.jpg"
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export default function UserProfile() {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [currentPassword,setCurrentPassword] = useState();
  const [newPassword,setNewPassword] = useState();
  const [confirmNewPassword,setConfirmNewPassword] = useState();



  const [profileImag,setProfileImag] = useState('')

  return (
    <section className='profile'>
      <div className="container profilr-container">
        <Link to={"/myposts/id"}> My Posts</Link>
        <div className="profile-details">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={profileImage} alt='' />
            </div>
            {/* {profile Form} */}
            <form className='proflie-image-form'>
              <input type='file' name='profile-image' id='profile-image' accept='png,jpg,jpeg' onChange={e => setProfileImag(e.target.files[0])}/>
              <label htmlFor='profile-image'>
                <FaEdit/>
              </label>
            </form>
            {/* <button className="profile-image-button btn-primary btn-sm">
              <FaCheckCircle/>
            </button> */}
          </div>
          <h2>Beg joker</h2>
            {/* profile data */}
          <form action='' className='form profile-data-form'>
          <p className='form-message'>This is the invalid message</p>
          <input type='text' placeholder='Full name ' name='name' value={name} onChange={e => setName(e.target.value)} />
          <input type='email' placeholder='Email ' name='email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' placeholder=' Current Password' name='currentPassword' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
          <input type='password' placeholder='New Password  ' name='newPassword' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <input type='password' placeholder='Confirm Password  ' name='confirmPassword' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
          <button type='submit' className='btn btn-primary'>Update Profile</button>
        </form>
        </div>
      </div>
    </section>
  )
}
