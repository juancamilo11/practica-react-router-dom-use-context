import React from 'react'
import { useHistory, useLocation } from 'react-router'

export const PhotosScreen = () => {
    
    //const location = useLocation();
    //console.log(location);

    const { search } = useLocation();
    
    const query = new URLSearchParams(search);

    const skip = parseInt(query.get('skip')) || 0;
    const limit = parseInt(query.get('limit')) || 10;

    console.log(`Skip: ${skip}, Limit: ${limit}`);

    const history = useHistory();

    const handleNext = () => {
        query.set('skip', skip + limit);
        //query.set('limit', 10);
        
        // history.push({
        //     pathname: './home',
        //     search:'?skip=100&limit=1000'
        // });

        history.push({
            search:query.toString()
        });
    }

    return (
        <div>
            <h1>PhotosScreen</h1>
            <hr />
            <p><b>Params</b> Skip:{skip}, Limit:{limit}</p>
            <button onClick={() => handleNext()}>Next Page</button>
        </div>
    )
}
