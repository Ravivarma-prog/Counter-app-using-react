import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    render() { 
        console.log('Counters-rendered')
        const {onReset , counters , onDelete , onIncrement , onDecrement , onAddItem} = this.props;

        return (
            <div>
                {/* Here we use counter components */}
                {/* <Counter />
                <Counter />
                <Counter />
                <Counter /> */}

                <button 
                    className='btn btn-sm btn-primary m-2'
                    onClick={onReset}>
                    Reset
                </button>

                <button
                    className='btn btn-sm btn-primary m-2'
                    onClick={onAddItem}>
                    Add Item
                </button>

                {counters.map(counter => 
                    <Counter 
                        key = {counter.id} 
                        counter = {counter}
                        onDelete = {onDelete}
                        onIncrement = {onIncrement}
                        onDecrement = {onDecrement}>

                        <h4>Counter #{counter.id}</h4>
                    </Counter>)}

            </div>
        );
    }
}
 
export default Counters;