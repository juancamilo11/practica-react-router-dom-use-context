import React from 'react'
import { useLocation } from 'react-router'

export const PhotosScreen = () => {
    
    //const location = useLocation();
    //console.log(location);

    const { search } = useLocation();
    
    const params = new URLSearchParams(search);
    const skip = params.get("skip") || 0;
    const limit = params.get("limit") || 10;

    console.log(`Skip: ${skip}, Limit: ${limit}`);

    return (
        <div>
            <h1>PhotosScreen</h1>
            <p><b>Params</b> Skip:{skip}, Limit:{limit}</p>
        </div>
    )
}
