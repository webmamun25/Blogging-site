import React, { useState } from 'react'
import './Blog.css'
function Blog(props) {
    const handleclick=props.handleclick
    const {id,category,name,readingtime,personimage,img,personName,time}=props.blog
    
    const [active,setActive]=useState(false)
    return (
        <div className='blog-info'>
            <img src={img} alt="" />
          

          
            <div className="personal-info">
                <div className="person">
                    <img src={personimage} alt="" />
                    <div className='b-info'>
                        <p>{personName}</p>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="time">
                <span>{readingtime} min read </span>
                <span onClick={()=>{
                                    handleclick(props.blog)
                
                                    
                }}>
                
                    {
                        props.blog.quantity>1 ? <i className="fa-solid fa-bookmark"></i>:<i className="fa-regular fa-bookmark"></i> 
                    }

                    
                    
                

                </span>
                </div>
                
            </div>
            <h2>{name}</h2>
            <a href="#" onClick={()=>setActive(true)} style={{ color: !active ? "black" : "red" }}>mark as read</a>
        </div>
    )
}

export default Blog
