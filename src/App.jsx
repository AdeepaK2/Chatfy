import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import './styles/global.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/chat/:id" component={ChatPage} />
                    <PrivateRoute path="/profile" component={ProfilePage} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;




