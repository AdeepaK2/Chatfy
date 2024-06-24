// src/components/SignUp.js
import React, { useState } from 'react';
import { auth, firestore } from '../services/firebase';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            await firestore.collection('users').doc(userCredential.user.uid).set({
                username,
                email,
            });
            history.push('/chat');
        } catch (error) {
            console.error("Error signing up: ", error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;

