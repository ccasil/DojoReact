import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer: 100
        }
    }

    // componentDidMount(){
	// }

    beginTimer() {
        this.setState(prevState => ({
            timer: prevState.timer - 1
        }))
    }
    
    showHint() {
        // this.setState(prevState => ({
        //     count: prevState.count + 1
        // }));
    }
    render(){
        if(this.state.timer> 0){
            setTimeout(()=>{
                this.beginTimer();
            }, 1000)
        }
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
        return (
            <div>
                <p className='lead'>{this.state.timer}</p>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card" onClick={ () => this.showHint() } >
                        {/* <img src={testQuestion.topic.imageUrl} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">{testQuestion.topic.title}</h5>
                                <p className="card-text">{testQuestion.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;