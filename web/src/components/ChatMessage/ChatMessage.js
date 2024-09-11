import React from 'react';

import './ChatMessage.css';

export const ChatMessage = ({message}) => {
    <div className={
        `chat-message ${message.user === 'gpt' && 
        "chatgpt"}`}
    >
    <div className='chat-message-center'>
        <div className={
            `avatar ${message.user === 'gpt' && "chatgpt"}`
        }> 

        </div>
    </div>

    </div>
}