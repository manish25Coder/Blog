import React, { useState } from 'react'
//importing react quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

export default function EditPost() {

  const [title,setTitle] = useState('');
  const [category,setCategory] = useState('Uncategorized');
  const [description,setDescription] = useState('');
  const [thumbImage,setThumbImage] = useState('');

  //posts categoriess...
  const postCategories =['Education','Discovery', 'Agreculture', 'Entertainment', 'Music', 'Art', 'Business', 'Investment', 'Fashion', 'Weather', 'Sports', 'Science']

  //modules....
  const modules ={
    toolbar : [
      [{'header' : [1,2,3,4,5,false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'+1'},{'indent':'-1'},],
      ['link', 'image'],
      ['clean']
    ]
  }


  //Formats.....
  const formats =[
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
  <section className='editpost'>
     <div className="container form-container editpost-container">
        <h2> Edit Posts </h2>
        <form action='' className='form editpost-form'>
          <p className='form-message'>This is the invalid message</p>
          <input type='text' placeholder='Enter your title... ' name='title' value={title} onChange={e=>setTitle(e.target.value)} autoFocus />
          <select name='category' value={category} onChange={e=>setCategory(e.target.value)}>
            {
                postCategories.map(cat=> <option key={cat}>{cat}</option>)
            }
          </select>
             {/* React quill */}
            <ReactQuill modules={modules} formats={formats} value={description} onChange={e=>setDescription(e.target.value)} />
          <input type='file'  value={thumbImage} onChange={e=>setThumbImage(e.target.value)} accept='png,jpg,jpeg'/>
          <button type='submit' className='btn btn-primary'>Update</button>
        </form>
        
      </div>
  </section>
  )
}
