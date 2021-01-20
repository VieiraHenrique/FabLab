import React, { useState, useEffect } from 'react';
import api from '../../../api';

export function UsersList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function fetchData() {
        setIsLoaded(true);
        await api.getAll('/users')
        .then((data) => {
            setIsLoaded(true);
            setUsers(data.data);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )}
        fetchData();
    
    }, []);

    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <ul>
                {users.map(user => (
                <li key={user._id}>
                    {user.firstname} {user.lastname} {user.email}
                </li>
                ))}
            </ul>
        );
    }
}
