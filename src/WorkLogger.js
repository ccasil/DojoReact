import React from 'react';

class WorkLogger extends React.Component {
    constructor(props) {
        super(props);
        this.personaltasks = []
        this.worktasks = []
        this.state = {
            project: '',
            desc: '',
            min: '',
            personaldata: this.personaltasks,
            workdata: this.worktasks,
            count: 0,
            personaltotaltime: 0,
            worktotaltime: 0,
            error: ''
        };
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    // we can use es6 arrow functions to "bind" the callback method
    onInputChange = (event) => {
        this.setState({
            project: event.target.project,
            desc: event.target.desc,
            min: event.target.min,
        });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            error: '',
        });
        console.log(this.state.project, this.state.desc, this.state.min);
        console.log(this.personaltasks);
        if(this.state.project && this.state.desc.length >= 5 && this.state.min > 0 && this.state.min < 240){
            let item = 
            <li key={this.state.count} className=''>
                <span className='fw-bold'>{this.state.min}</span> {this.state.desc}
            </li>
            let minute = this.state.min
            if(this.state.project === 'Personal'){
                this.personaltasks.push(item)
                this.setState({
                    project: '',
                    desc: '',
                    min: '',
                    personaldata: this.personaltasks,
                    personaltotaltime: parseInt(this.state.personaltotaltime) + parseInt(minute),
                    count: this.state.count + 1
                });
            }
            
            if(this.state.project === 'Work'){
                this.worktasks.push(item)
                this.setState({
                    project: '',
                    desc: '',
                    min: '',
                    workdata: this.worktasks,
                    worktotaltime: parseInt(this.state.worktotaltime) + parseInt(minute),
                    count: this.state.count + 1
                });
            }
        } else {
            this.setState({
                error: 'Description should be at least 5 characters and minutes should be between 0 and 240',
            });
        }
    }
    handleProjectChange(event) {
        this.setState({project: event.target.value});
    }
    handleDescChange(event) {
        this.setState({desc: event.target.value});
    }
    handleMinChange(event) {
        this.setState({min: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Project</label>
                    <div className="col-sm-10">
                        <select className="form-select" value={this.state.project} onChange={this.handleProjectChange}>
                            <option></option>
                            <option>Work</option>
                            <option>Personal</option>
                        </select>
                    </div>
                </div>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputdesc" value={this.state.desc}  onChange={this.handleDescChange}/>
                    </div>
                </div>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Minutes</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputmin" value={this.state.min}  onChange={this.handleMinChange}/>
                    </div>
                </div>
                <button>Add</button>
                <hr />
                <p>{this.state.error}</p>
                <div className='row g-3' id='clocks'>
                    <div className='col'>
                        <div className='border p-3'>
                        <p className='m-0 float-end'>{this.state.personaltotaltime}</p>
                        <h2>Personal</h2>
                        <ul className='list-unstyled m-0'>
                            {this.personaltasks}
                        </ul>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='border p-3'>
                        <p className='m-0 float-end'>{this.state.worktotaltime}</p>
                        <h2>Work</h2>
                        <ul className='list-unstyled m-0'>
                            {this.worktasks}
                        </ul>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default WorkLogger;
