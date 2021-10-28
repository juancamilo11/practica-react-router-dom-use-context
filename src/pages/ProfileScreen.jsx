import React from 'react'
import { useParams } from 'react-router'

export const ProfileScreen = () => {
    
    // const params = useParams();
    
    // console.log(params);

    const {username} = useParams();

    return (
        <div>
            <h1>Username: {username}</h1>
        </div>
    )
}
