import React, {Component} from 'react';
import  Radium  from 'radium';
import './Person.css';


class Person extends Component{


    render(){
        let name = this.props.name;
        let age = this.props.age;
        let click = this.props.click;
        const styleNew = {
            '@media (min-width: 500px)':{
                width: '450px'
            }
        };
    return(
        <div className = "Person" style = {styleNew}>
        <p onClick = {click}> My name is {name} and I am {age} years old!! </p>
        <input type="text" onChange = {this.props.nameChange} value={name}></input>
        <br />
        {this.props.children}
        </div>
    );
  }
};

export default Radium(Person);