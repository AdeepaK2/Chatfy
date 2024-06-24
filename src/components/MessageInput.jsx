// src/components/MessageInput.js
import React, { useState } from 'react';
import { firestore, auth } from '../services/firebase';

const MessageInput = ({ chatRoomId }) => {
    const [message, setMessage] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await firestore.collection('chatRooms').doc(chatRoomId).collection('messages').add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });

        setMessage('');
    };

    return (
        <form onSubmit={sendMessage}>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;
