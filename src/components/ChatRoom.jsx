// src/components/ChatRoom.jsx
import React from 'react';
import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';

const ChatRoom = ({ chatRoomId }) => {
    return (
        <div>
            <h2>Chat Room</h2>
            <MessageList chatRoomId={chatRoomId} />
            <MessageInput chatRoomId={chatRoomId} />
        </div>
    );
};

export default ChatRoom;

