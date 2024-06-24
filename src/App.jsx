// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;





