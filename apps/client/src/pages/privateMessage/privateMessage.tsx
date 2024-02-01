import React, { useEffect, useState} from "react";
import "./privateMessage.css";
import ChatBar from "../../components/chatbar/chatbar";
import TextArea from "../../components/textarea/textarea";
import { useParams } from 'react-router-dom';

interface PrivateMessageProps {
    // Define your component props here
}

interface Message {
    id: number;
    content: string;
    // add other properties if needed
}

const useGetMessages = (username: string) => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const sender = "echung04";  // Replace with the actual sender value
                const response = await fetch(`http://localhost:8000/users/get-messages/${username}/${sender}`);
                const jsonData = await response.json();
        
                // Update property names to match the interface
                const mappedMessages: Message[] = jsonData.map((item: any) => ({
                  id: item.messages_id,
                  content: item.message,
                }));
        
                setMessages(mappedMessages);
                console.log(mappedMessages);
              } catch (error: any) {
                console.error(error.message);
              }
        };

        fetchMessages();
    }, [username]);

    return messages;
};

const PrivateMessage: React.FC<PrivateMessageProps> = () => {
    // Add your component logic here

    const { username = "" } = useParams();
    const messages = useGetMessages(username);

    return (
        <div className="background-main">
            <div className="message-container">
                {messages.map((message) => (
                    <div key={message.id} className="message text-center">
                        {message.content}
                    </div>
                ))}
            </div>
            <ChatBar />
            
            <TextArea username={username} />
        </div>
    );
};

export default PrivateMessage;
