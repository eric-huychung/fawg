import React, { useEffect, useState} from 'react';
import './chatbox.css';
import { Link } from 'react-router-dom';


interface User {
  username: string;
  // add other properties if needed
}

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/users/get-user");
        const jsonData = await response.json();
        setUsers(jsonData);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchUsers();
  }, []);

  return users;
};

const Chatbox: React.FC = () => {

  const users = useGetUsers();
  return (
    <div className='chatbox d-flex flex-column align-items-center justify-content-start'>
      <div className='bar' />
      <table className="messageTable mt-5">
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td className="username">
                <Link to={`/privateMessage/${user.username}`} className="link">
                  {user.username}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chatbox;
