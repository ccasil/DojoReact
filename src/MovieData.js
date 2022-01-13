import React from 'react';
import axios from 'axios';
class MovieData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount(){
        axios.get().then((response) => (
            this.setState({data: response.data.results})
        ));
    }
    render(){
        return (
            <div className='container'>
            </div>
        )
    }
}

export default MovieData;
