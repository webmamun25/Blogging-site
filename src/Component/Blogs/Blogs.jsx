import React, { useEffect, useState } from 'react'
import './Blogs.css'
import Blog from '../Blog/Blog'
import Item from '../Item/Item'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'
function Blogs() {
    const [blogs,setBlogs]=useState([])
    const [cart,setCart]=useState([])
    const [toast,setToast]=useState(0)
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    useEffect(()=>{
        const storedCart=getShoppingCart()
        const savedcart=[]
        for( const id in storedCart){
            const addedblog=blogs.find(pd=>pd.id==id)
            if(addedblog){
                const quantity=storedCart[id]
                addedblog.quantity=quantity
                savedcart.push(addedblog)
                
            }


        }
        setCart(savedcart)
    },[blogs])
   
        const handleclick=(blog)=>{
            let newBlog=[]
            const exists=cart.find(pd=>pd.id===blog.id)
            if(!exists){
                blog.quantity=1
                newBlog=[...cart,blog]
            }
            else{
                exists.quantity=exists.quantity+1;
                const remaining=cart.filter(b=>b.id!=blog.id)
                newBlog=[...remaining,exists]

            }
           
           setCart(newBlog)
           setToast(toast+1)
           addToDb(blog.id)
           
            
          //   console.log(newBlog)
          }
   
    return (
        <> 
        <div className='blogs'>
        <div>
            {
                blogs.map(blog=><Blog key={blog.id} toast={toast} handleclick={handleclick} blog={blog}></Blog>)
            }
        </div>
        <div className='bookmark'>
            <Item cart={cart}></Item>
           
        </div>


    </div></>
       
    )
}

export default Blogs
