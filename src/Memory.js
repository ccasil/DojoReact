import React from 'react';
import App from './App';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.squares = []
        this.state = {
            seconds: 3,
            data: this.squares
        }
    }

    componentDidMount(){
        let answers2 = ['green', 'green', 'red', 'red', 'yellow', 'yellow', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray']
        for (let i = answers2.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers2[i], answers2[j]] = [answers2[j], answers2[i]];
        }
        for(var i = 0; i < 12; i++){
            let item = 
            <div key={i} className='col-3 border p-0'>
                <div className={'square ' + answers2[i]}>

                </div>
            </div>
        this.squares.push(item)
        this.setState({
            data: this.squares
         });
        }
	}

    startTime() {
        setInterval(() => {
            if(this.state.seconds > 0){
                this.setState({
                    seconds: this.state.seconds - 1
                });
            } else {
                this.guessMode();
            }
        }, 1000);
    }

    guessMode() {
        
    }
    render(){
        return(
            <div className='container'>
                <h1 className='h1'>Memory Game</h1>
                <div className='row'>
                    {this.state.data}
                </div>
                <button className='mt-3' onClick={ () => this.startTime() } >
                    Start Game
                </button>
                <p>{this.state.seconds}</p>
            </div>
        )
    }
}

export default Card;
