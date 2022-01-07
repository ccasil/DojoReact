import React from 'react';
import './App.css';

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let users = ["eddy", "brendan", "goose", "eli", "marcos"];
        let userList = users.map((user, index) => {
            if(user == this.props.loggedIn){
                return <li key={index} className="logged-in">{user}</li>
            } else {
                return <li key={index}>{user}</li>
            }
        }) 
        return (
            <div className='container'>
                <h1>The List Component</h1>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }
}

export default List;