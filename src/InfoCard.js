import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shint: false
        }
    }
    showHint() {
        console.log('showhint', this.state.shint);
        this.setState({
            shint: !this.state.shint
        });
    }
    render(){
        return (
            <div className='mt-3'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card" onClick={ () => this.showHint() } >
                            <img src={this.props.imgPath} className="card-img-top" alt="..." />
                            <div className="card-body" id="bodytext">
                            { !this.state.shint &&
                            <div>
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                                </div>
                            }
                            { this.state.shint &&
                            <div>
                                <p className="card-text">{this.props.hint}</p>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;
