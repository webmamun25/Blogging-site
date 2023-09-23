import React, { useEffect, useState } from 'react'
import './Item.css'
function Item({cart}) {
   

        let total=0;
        let quantity=0;
        for(const pd of cart){
            
            total=total+pd.readingtime*pd.quantity;
            quantity=quantity+pd.quantity
          
            
            
    
            
        }
       
        
    return (
        <div>
            <p className='spend-time'>
                <h4>Spend time:{total}</h4>
            </p>
            <div className='b-detail'>
            <h1> Bookmarked Blogs : {quantity}</h1>
            <div className="name">
            {
                cart.map(ct=>
                
                <p key={ct.id}>{ct.name}</p>
                
                )
            }
            </div>
            
            </div>
           
            
        </div>
    )
}

export default Item
