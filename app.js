import React, { Component } from "react";
import Add from './components/Add/Add';
import Todo from './components/Todo/Todo';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row , Col, Button, Alert, Breadcrumb, Form} from 'react-bootstrap';


class App extends Component { 

    state = {
        items : [{ id:1 , name:'Wilys', age:'150', action:2},
                 { id:2 , name:'Coop', age:'10', action:3},
                 { id:3 , name:'Doop', age:'50', action:1}
                ]
            }

            // deletme= (id)=> {
            //     let items = this.state.items.filter(item => item.id !==id); 
            //     this.setState({items})
            // }


            deletme = (id) => {
                let items = this.state.items
                let i = items.findIndex(item=> item.id === id)
                items.splice(i,1);
                this.setState({items})
            }

            additem = (xitem) => {
            xitem.id = Math.floor(Math.random()*1000)
            xitem.action = Math.random()*10
            let items = this.state.items
            items.push(xitem);
            this.setState({items});
            console.log(items)
          }

          


render () {

          

    return (
        
        <div className="App container">
        <h1 className='text-center'> Contact List</h1>
       
       
        <div>
        <Todo items={this.state.items} deletme={this.deletme} />
        </div>
        <Add additem={this.additem}/>

        </div>
    )
    }}


    
export default App




