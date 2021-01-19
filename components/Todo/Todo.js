import React from 'react';
import './Todo.css'


const Todo = (props) => {
    // console.log(props)
    const {items} = props
    // console.log(items)

    const {deletme} = props



    const theItems = items.map(item => {

        return  ( 
            
           
        <div key={item.id}>
        <span className='name'>{item.name}</span>  
        <span className='age'>{item.age}</span>
        <button className='action icon' onClick={()=> deletme(item.id)}><span>&times;</span></button>
       
        </div>
       

        )
    })

        return (
           
            <div className='ListItems'>
            
                <div className=''>
                    <span className='name title'>Name</span>
                    <span className='age title'>Age</span>
                    <span className='action title'>Action</span>
                </div>
                {theItems.length ? theItems: <p>Please enter some info</p>}
            </div>
        

   
        )

   
    }


export default Todo;