import React from 'react';

class WorkLogger extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = []
        this.state = {
            project: '',
            desc: '',
            min: '',
            data: this.tasks,
            count: 0
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
            dsc: event.target.desc,
            min: event.target.min,
        });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.state.project && this.state.desc && this.state.min){
            let item = 
            <div key={this.state.count} className='col-6'>
                <div className='border p-2'>
                    <p className='lead m-1 fw-bold'>{this.state.project}</p>
                    <p>{this.state.min} {this.state.desc}</p>
                </div>
            </div>
            this.tasks.push(item)
            this.setState({
                project: '',
                desc: '',
                min: '',
                data: this.tasks,
                count: this.state.count + 1
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
                <div className='row g-2' id='clocks'>
                        {this.tasks}
                    </div>
            </form>
        )
    }
}

export default WorkLogger;
