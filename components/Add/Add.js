import React, { Component} from 'react';
import './Add.css'


class Add extends Component { 

    state = {
       name:'',
       age:''
            }

myChangeHandler = (e) => {this.setState({[e.target.name]:e.target.value});console.log(this.state)}
mySubmitHandler = (e) => {e.preventDefault(); 
                        if ((this.state.name && this.state.age) === ''){
                            return false
                        } else { 
                        this.props.additem(this.state)
                      
                        this.setState({
                            name:'',
                            age:''
                        })
                    }}



    render () {
            
        return ( 
      
            <form className='ListItem' onSubmit={this.mySubmitHandler} >
         
           
                <input type="text" placeholder='Enter a name...' name="name" 
                onChange={this.myChangeHandler}
                value={this.state.name}
                />

                <input type="number" placeholder='Enter a number...' name="age" 
                onChange={this.myChangeHandler}
                value={this.state.age}
                />
                
                <input type="submit"/>
                      </form>

           


         );
    } }
 
export default Add;

// myChangeHandler = (e) => {
//     let nam = e.target.name;
//     let val = e.target.value;
//     this.setState({[nam]: val});
//     console.log(this.state)
//   } works fine also

//  you  can use 'e.target.name.value'  instead of (this.state.name && this.state.age) but would not be robust as it
// alows numbers to be entered.