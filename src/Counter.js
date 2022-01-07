import './App.css';
import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'test name',
            count: 0
        }
    }
    updateCount() {
    	this.setState(prevState => ({
    		count: prevState.count + 1
    	}));
    }
    render(){
        return (
            <div className='container'>
                <h1>{this.state.name} {this.props.name} {this.state.count}</h1>
                <button
                    onClick={ () => this.updateCount() } >
                    Count
                </button>
            </div>
        )
    }
}

export default Counter;
