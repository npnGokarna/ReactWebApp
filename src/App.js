import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons:[
            {id: 'id1', name: 'Goku', age: 25},
            {id: 'id2', name: 'Asim', age: 26},
            {id: 'id3', name: 'Ishwor', age: 26}
        ],
        showPerson: false
    }

    switchNameHandler = (newName) => {
        this.setState({persons:[
            {id: 'id1', name: newName, age: 25},
            {id: 'id2', name:"AsimNpn", age:26},
            {id: 'id3', name: 'Ishwor', age: 26}
        ]}, ()=>{
            console.log("Clicked");
        });

    }

    changeNameHandler = (event, id) =>{

        const perIndex = this.state.persons.findIndex( (p) => {
            return p.id === id;
        });

        const perItem = { ...this.state.persons[perIndex]};

        perItem.name = event.target.value;
        const personsTemp = [...this.state.persons];
        personsTemp[perIndex] = perItem;

        this.setState({persons:personsTemp});
    }

    toggleNameHandler = () =>{
       let doesShow = this.state.showPerson;
       this.setState({showPerson: !(doesShow)});
    }

    deletePersonHandler = (pIndex) =>{
        const per = [...this.state.persons];
        per.splice(pIndex, 1);
        this.setState({persons: per});

    }

    render(){
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            border: '3px',
            padding: '8px',
            ':hover': {
                backgroundColor: 'darkgreen',
                color: 'white'
            }
        };

        const cssClasses = [];
        if(this.state.persons.length<=2){
            cssClasses.push('red');
        }
        if(this.state.persons.length<=1){
            cssClasses.push('bold');
        }

        let pers = null;

            if(this.state.showPerson){
                pers = this.state.persons.map( (person,index) =>
                <Person
                    name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    click = {()=>this.deletePersonHandler(index)}
                    //click = {()=> this.deletePersonHandler.bind(this, index)}
                    nameChange = {(event)=>this.changeNameHandler(event, person.id)}/>
                )
                buttonStyle.backgroundColor = 'red';
                buttonStyle[':hover'] =  {
                    backgroundColor: 'darkred',
                    color: 'white'
                };
        }

        return (
            <StyleRoot>
                <div className = "App">
                <p className = {cssClasses.join(' ')}>
                    Hello there!!
                </p>
                <button className="btn" style = {buttonStyle} onClick = {this.toggleNameHandler} >Toggle Persons</button>
                {pers}
                </div>
            </StyleRoot>
        );
    }

}

export default Radium(App);