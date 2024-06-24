// src/pages/ChatPage.jsx
import React from 'react';
import ChatRoom from '../components/ChatRoom.jsx';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
    const { id } = useParams();
    return (
        <div>
            <ChatRoom chatRoomId={id} />
        </div>
    );
};

export default ChatPage;
