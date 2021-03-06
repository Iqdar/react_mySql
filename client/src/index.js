import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudentsForm from './StudentsForm'


const routes = (
    <Router>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/update" component={StudentsForm}/>
        </Switch>
    </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
