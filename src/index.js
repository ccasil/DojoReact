import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Counter from './Counter';
import List from './List';
import Card from './Card';
import InfoCard from './InfoCard';
import Time from './Time';

ReactDOM.render(
  <React.StrictMode>
    <div className='container mt-3'>
    {/* <App /> */}
    <Time />
    {/* <Counter name="none" />
    <List loggedIn="goose" /> */}
    {/* <InfoCard title="title ex" description="ex desc" imgPath="./src/" hint="this is the hint"/> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
