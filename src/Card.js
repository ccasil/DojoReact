import React from 'react';
import App from './App';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shint: false,
            sanswer: false,
            minutes: 0,
            seconds: 0,
            answer: ''
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.startTime();
            if(this.state.seconds === 60){
                this.setState({
                    seconds: 0,
                    minutes: this.state.minutes + 1
                });
            }
        }, 1000);
	}

    startTime() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }
    
    showHint() {
        console.log('showhint', this.state.shint);
        this.setState({
            shint: !this.state.shint
        });
    }
    seeAnswer(correct) {
        this.setState({
            sanswer: !this.state.sanswer
        });
        console.log(correct);
        if(correct){
            this.setState({
                answer: 'correct'
            });
        } else {
            this.setState({
                answer: 'wrong'
            });
        }
    }
    reset() {
        this.setState({
            sanswer: !this.state.sanswer
        });
    }
    render(){
        let answerss = this.props.question.answers
        console.log(answerss)
        let answersList = answerss.map((answers, index) => {
            return(
            <div className='col text-center mb-3' key={index}>
                <button onClick={ () => this.seeAnswer(answers.isCorrect) }>
                    {answers.value}
                </button>
            </div>
            )
        }) 
        return (
            <div>
                <p className='lead'>{this.state.minutes}m {this.state.seconds}s</p>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card" onClick={ () => this.showHint() } >
                        {/* <img src={question..topic.imageUrl} className="card-img-top" alt="..." /> */}
                            <div className="card-body" id="bodytext">
                            { !this.state.shint &&
                            <div>
                                <h5 className="card-title">{this.props.question.topic.title}</h5>
                                <p className="card-text">{this.props.question.description}</p>
                                </div>
                            }
                            { this.state.shint &&
                            <div>
                                <p className="card-text">{this.props.question.hint}</p>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    { !this.state.sanswer &&
                    <div className='row mt-3'>
                        {answersList}
                    </div>
                    }
                    { this.state.sanswer &&
                        <div className='text-center'>
                            <p className="lead">{this.state.answer}</p>
                            <button onClick={ () => this.reset() } >reset</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Card;
