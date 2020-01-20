import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }){

    const [github_username, setGithuUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude]  = useState('');

    // For any cchange in this component (App), the user location it will updated
    useEffect( () => {
        
        // Already available at the brownser
        navigator.geolocation.getCurrentPosition(

            // Success
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },

            // Error
            (err) => {
                console.log(err);
            },

            // finaly
            {
                timeout: 30000,
            }
        )
        
    }, []); // [] for one execution

    async function handleSubmit(e){

        e.preventDefault(); // Prevent the html send to another page
        
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithuUsername('');
        setTechs('');

    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input 
                    name="github_username" 
                    id="github_username" 
                    required 
                    value={github_username}
                    onChange={e => setGithuUsername(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Technologias</label>
                <input 
                    name="techs" 
                    id="techs" 
                    required 
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitide</label>
                    <input 
                        type="number" 
                        name="latitude" 
                        id="latitude" 
                        required 
                        value={latitude} 
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input 
                        type="number" 
                        name="longitude" 
                        id="longitude" 
                        required 
                        value={longitude} 
                        onChange={e => setLongitude(e.target.value)}    
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>                

        </form>
    );
}

export default DevForm;