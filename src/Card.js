import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0
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

    componentWillUnmount() {
    }
    
    showHint() {
        console.log('showhint');
        // this.setState(prevState => ({
        //     count: prevState.count + 1
        // }));
    }
    seeAnswer(correct) {
        if(correct){
            alert('correct')
        }
        alert('not correct')
    }
    render(){
        const testQuestion = {
            "questionId": 1,
            "description": "What player holds the career record for most stolen bases?",
            "hint": "This player stole a single season record of 130 bases in 1983 as a member of the Oakland Athetics",
            "topicId": 1,
            "topic": {
              "topicId": 1,
              "title": "Baseball",
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV_tsbT_kw10GstYSzppI60QKpc7_hRSzkHrRf3_IvYJZoPBqIg"
            },
            "answers": [
              {
                "answerId": 1,
                "value": "Rickey Henderson",
                "questionId": 1,
                "isCorrect": true
              },
              {
                "answerId": 2,
                "value": "Wade Boggs",
                "questionId": 1,
                "isCorrect": false
              },
              {
                "answerId": 3,
                "value": "Willie Mays Hayes",
                "questionId": 1,
                "isCorrect": false
              }
            ]
        };
        let answerss = testQuestion.answers
        console.log(answerss)
        let answersList = answerss.map((answers, index) => {
            return(
            <div className='col text-center' key={index}>
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
                        {/* <img src={testQuestion.topic.imageUrl} className="card-img-top" alt="..." /> */}
                            <div className="card-body" id="bodytext">
                                <h5 className="card-title">{testQuestion.topic.title}</h5>
                                <p className="card-text">{testQuestion.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    {answersList}
                </div>
            </div>
        )
    }
}

export default Card;
