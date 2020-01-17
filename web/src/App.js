import React, { useState, useEffect } from 'react';

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
        
    });

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>

                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input name="github_username" id="github_username" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Technologias</label>
                        <input name="techs" id="techs" required />
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
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5756323?s=460&v=4" alt="Iuri Malinoski"/>
                            <div className="user-info">
                                <strong>Iuri Malinoski</strong>                            
                                <span>Java, PHP, Javascript, Python, Shell script</span>                            
                            </div>                        
                        </header>
                        <p>Software Developer</p>
                        <a href="https://github.com/Malinoski">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5756323?s=460&v=4" alt="Iuri Malinoski"/>
                            <div className="user-info">
                                <strong>Iuri Malinoski</strong>                            
                                <span>Java, PHP, Javascript, Python, Shell script</span>                            
                            </div>                        
                        </header>
                        <p>Software Developer</p>
                        <a href="https://github.com/Malinoski">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5756323?s=460&v=4" alt="Iuri Malinoski"/>
                            <div className="user-info">
                                <strong>Iuri Malinoski</strong>                            
                                <span>Java, PHP, Javascript, Python, Shell script</span>                            
                            </div>                        
                        </header>
                        <p>Software Developer</p>
                        <a href="https://github.com/Malinoski">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5756323?s=460&v=4" alt="Iuri Malinoski"/>
                            <div className="user-info">
                                <strong>Iuri Malinoski</strong>                            
                                <span>Java, PHP, Javascript, Python, Shell script</span>                            
                            </div>                        
                        </header>
                        <p>Software Developer</p>
                        <a href="https://github.com/Malinoski">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5756323?s=460&v=4" alt="Iuri Malinoski"/>
                            <div className="user-info">
                                <strong>Iuri Malinoski</strong>                            
                                <span>Java, PHP, Javascript, Python, Shell script</span>                            
                            </div>                        
                        </header>
                        <p>Software Developer</p>
                        <a href="https://github.com/Malinoski">Acessar perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
