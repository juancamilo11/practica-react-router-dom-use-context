import React from 'react'
import { useParams } from 'react-router'

export const ProfileScreen = () => {
    
    // const params = useParams();
    
    // console.log(params);

    const {username} = useParams();

    return (
        <div>
            <h1>ProfileScreen</h1>
            <hr />
            <h2>Username: {username}</h2>
        </div>
    )
}
