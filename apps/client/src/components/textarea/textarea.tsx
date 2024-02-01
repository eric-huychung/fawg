import React, { useState, useEffect } from 'react';
import './textarea.css';

interface TextAreaProps {
    username: string;
}

const TextArea: React.FC<TextAreaProps> = ({ username }) => {

    const [message, setMessage] = useState<string>('');

    const handleIconClick = async () => {
        // Your API endpoint URL
        const apiUrl = `http://localhost:8000/users/add-message/${username}`;

    
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender: "echung04",
                message,
              }),
          });
    
          // Handle the response, e.g., show a success message
          if (response.ok) {
            console.log('Message sent successfully!');
            // Add your own success handling logic here
            setMessage('');
          } else {
            console.error('Failed to send message');
            // Add your own error handling logic here
          }
        } catch (error) {
          console.error('Error sending message:', error);
          // Handle other errors as needed
        }
      };
    // useEffect to watch for changes in the message state
    useEffect(() => {
      // You can perform any additional logic here if needed
      console.log('Message state changed:', message);
    }, [message]);

    return (
        <div className="textarea">
            <div className="row textAreaBox">
                <div className="col-10">
                    <textarea className="user-input ms-3 mt-3" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <div className="col-2">
                    <svg className="mt-4 ms-3" xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512" onClick={handleIconClick}>
                        <path fill="#F6F6F6" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TextArea;
