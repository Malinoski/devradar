import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

/* Notes: 

Most important concept of React:
Component: A isolated block of HTML, Javascript and CSS.
Property: The properties of a block.
State: The values of a property a keeped on updates (inmutable)

*/

function App() {

    const [devs, setDevs] = useState([]);

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

    // Load all devs
    useEffect( () => {
       
        async function loadDevs(){
            const response = await api.get('/devs');
            setDevs(response.data);
        }

        loadDevs();
    }, []) // [] for one execution

    async function handleAddDev(e){

        e.preventDefault(); // Prevent the html send to another page

        const response = await api.post('/devs',{
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithuUsername('');
        setTechs('');

        // console.log(response.data);
        // console.log(devs);
        // Create a new array with the new user (dont use .push, we need to keep the state paradigm)
        setDevs([...devs, response.data]);
        // console.log(devs);
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form onSubmit={handleAddDev}>

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
            </aside>
            <main>
                <ul>
                    {devs.map( dev =>(
                        <li key={dev._id} className="dev-item">
                            <header>
                                <img src={dev.avatar_url} alt={dev.name}/>
                                <div className="user-info">
                                    <strong>{dev.name}</strong>                            
                                    <span>{dev.techs.join(', ')}</span>                            
                                </div>                        
                            </header>
                            <p>{dev.bio}</p>
                            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                        </li>    
                    ))}                    
                    
                </ul>
            </main>
        </div>
    );
}

export default App;
