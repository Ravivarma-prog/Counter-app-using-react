import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
// import React from 'react';
import Counters from './components/counters';

class App extends Component {
  
  state = {
    counters : [
        {id : 1 , value : 1},
        {id : 2 , value : 2},
        {id : 3 , value : 2},
        {id : 4 , value : 0}
    ]
  };

  constructor(){
    super();
    console.log('App-constructor');
  }

  componentDidMount(){
    console.log('App-mounted')
  }
  
  handleAddItem = () => {
     const counters = [...this.state.counters];
     
     counters[counters.length] = {id : counters.length+1 , value : 0}

     this.setState({
       counters : counters
     });
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;

    this.setState({
      counters : counters
    });

  }

  handleDelete = (counterId) => {
    console.log("Delete event" , counterId);
    const counters = this.state.counters.filter(
        counter => counter.id !== counterId
    );

    this.setState({
        counters : counters
    });
  }

  handleReset = () => {
    const counters = this.state.counters.map(
        counter => {
            counter.value = 0;
            return counter;
        }
    );
    
    // console.log(counters);

    this.setState({
        counters : counters
    });
  }

  handleIncrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    this.setState({
        counters : counters
    });
  }
  
  render() { 
    console.log('App-rendered');
    return (
      <React.Fragment>
        <Navbar
          totalLength = {this.state.counters.filter(counter => counter.value > 0 ).length}  
        />
        <main className='container'>
          <Counters
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
            counters = {this.state.counters}
            onDecrement = {this.handleDecrement}
            onAddItem = {this.handleAddItem}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
