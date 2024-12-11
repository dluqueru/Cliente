import React, { useState, useEffect } from 'react';
import { getUsers } from './services/apiService';
import Profile from './Profile';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
        useEffect(() => {
            getUsers()
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>Usuarios en la API</h1>
            {loading ? (
            <p>Cargando...</p>
            ) : (
            <>
                {users.map(user => (
                    <Profile 
                        name = {user.name} 
                        email = {user.email} />
                ))}
            </>
            )}
        </div>
    );
};

export default UserList;