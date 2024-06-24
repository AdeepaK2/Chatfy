// src/components/MessageList.js
import React, { useEffect, useState } from 'react';
import { firestore } from '../services/firebase';

const MessageList = ({ chatRoomId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore
            .collection('chatRooms')
            .doc(chatRoomId)
            .collection('messages')
            .orderBy('createdAt')
            .onSnapshot((snapshot) => {
                const messagesData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMessages(messagesData);
            });

        return unsubscribe;
    }, [chatRoomId]);

    return (
        <div>
            {messages.map((msg) => (
                <div key={msg.id}>
                    <img src={msg.photoURL} alt="User Avatar" />
                    <p>{msg.text}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
