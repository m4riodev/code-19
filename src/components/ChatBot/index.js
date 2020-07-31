import React from "react";
import Iframe from 'react-iframe'

function ChatBot() {
    return (
        <Iframe 
            url="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=b4af4308-4fca-4b2c-916a-99f2fccd7a7c&serviceInstanceID=6ae1850c-b9d7-4cf3-83d4-95a4fb5bf79a"
            width="100%"
            height="500px"
            display="initial"
            position="relative"
            scrolling="no"
            frameBorder="0"
        />
    );
}

export default ChatBot;
