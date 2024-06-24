// src/components/ChatRoomList.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../services/firebase';
import { Link } from 'react-router-dom';

const ChatRoomList = () => {
    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        const fetchChatRooms = async () => {
            const chatRoomsCollection = await firestore.collection('chatRooms').get();
            setChatRooms(chatRoomsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchChatRooms();
    }, []);

    return (
        <div>
            <h2>Chat Rooms</h2>
            <ul>
                {chatRooms.map(room => (
                    <li key={room.id}>
                        <Link to={`/chat/${room.id}`}>{room.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRoomList;
