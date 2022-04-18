import React, { Component } from 'react';


class Counter extends Component {

    // state = {
    //     value : this.props.counter.value,
    //     tags : [{id:1 , tag:'tag1'},{id:2 , tag:'tag2'},{id:3 , tag : 'tag1'}]
    // };

    // styles = {
    //     fontSize : 30,
    //     fontWeight : 'bold'
    // };



    renderTags(){
        if(this.state.tags.length === 0)
        {
            return <p>There are no tags</p>
        }
        else{
            return (
                <ul>
                    {this.state.tags.map(tag => <li key = {tag.id}>{tag.tag}</li>)}
                </ul>
            );
        }
    }

    //Event binding
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    componentDidUpdate(prevProps , prevState){
        console.log('Counter-updated');
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnmount()
    {
        console.log('Counter - Unmount');
    }

    render() { 
        
        console.log('Counter-rendered')
        // console.log(this);s

        return (
            <div>
                {/* {this.props.children} */}
                <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                   onClick = {() => this.props.onIncrement(this.props.counter)}
                // onClick = {this.handleIncrement.bind(this)}
                // onClick = {() => this.handleIncrement()}
                   className='btn btn-secondary btn-sm'>+
                </button>

                <button
                    onClick={()=>this.props.onDecrement(this.props.counter)}
                    className='btn btn-secondary btn-sm m-2'
                    disabled = {this.getButtonState()}>
                        -
                </button>

                <button 
                   className='btn btn-danger btn-sm m-2'
                   onClick={() => this.props.onDelete(this.props.counter.id)}>
                    Delete
                </button>
                
                {/* {this.renderTags()} */}
            </div>
        );
    };

    getButtonState(){
        return this.props.counter.value === 0 ? true : false;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {value}  = this.props.counter;
        return value === 0 ? 'Zero' : value ;
    }
}
 
export default Counter;