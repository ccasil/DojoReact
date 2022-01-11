import React from 'react';
import moment from 'moment-timezone';

class Time extends React.Component {
    constructor(props){
        super(props);
        this.cards = []
        this.state = {
            value: "America/Los_Angeles",
            data: this.cards
        };
        this.handleChange = this.handleChange.bind(this);
        this.addClock = this.addClock.bind(this);
    }

    componentDidMount() {
        // TIPS:
        // list of available timezones, as an array of strings
        console.log(moment.tz.names());
        // formatted time, taking a string for timezone
        console.log(moment().tz("America/Los_Angeles").format("h:mm:ss A"));
    }

    addClock(event) {
        event.preventDefault();
        // console.log(this.state.value);
        let time = moment().tz(this.state.value).format("h:mm:ss A")
        let item = 
        <div className='col-6'>
            <div className='border p-2'>
                <p className='lead m-1 fw-bold'>{this.state.value}</p>
                <p>{time}</p>
            </div>
        </div>
        this.cards.push(item)
        this.setState({
            data: this.cards
         });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        let countryList = moment.tz.names().map((country, index) => {
            return <option key={index}>{country}</option>
        }) 
        return(
        <div className='container'>
            <h1 className='h1'>World Clocks</h1>
            <div className='row g-1'>
                <div className='col-4'>
                    <form onSubmit={this.addClock}>
                        <input type="submit" value="Add Clock" />
                        <select className="form-select mt-3" value={this.state.value} onChange={this.handleChange}>
                            {countryList}
                        </select>
                    </form>
                </div>
                <div className='col-8'>
                    <div className='row g-2' id='clocks'>
                        {this.cards}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Time;