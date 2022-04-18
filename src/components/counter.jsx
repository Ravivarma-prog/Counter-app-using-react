import React, { Component } from 'react';


class Counter extends Component {

    state = {
        value : this.props.value,
        tags : [{id:1 , tag:'tag1'},{id:2 , tag:'tag2'},{id:3 , tag : 'tag1'}]
    };

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

    handleIncrement = () => {
        
        this.setState({
            value : this.state.value+1
        });
        console.log(this.props);
    }


    render() { 
        
        // console.log(this);

        return (
            <div>
                {/* {this.props.children} */}
                <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                   onClick = {this.handleIncrement}
                // onClick = {this.handleIncrement.bind(this)}
                // onClick = {() => this.handleIncrement()}
                   className='btn btn-secondary btn-sm'>Increment
                </button>
                
                {/* {this.renderTags()} */}
            </div>
        );
    };

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {value}  = this.state;
        return value === 0 ? 'Zero' : value ;
    }
}
 
export default Counter;