import React from 'react';

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
  return (
    <div id="app">
        <aside>
            <strong>Cadastrar</strong>
            <form>
                <div class="input-block">
                    <label htmlFor="github_username">Usuário do Github</label>
                    <input name="github_username" id="github_username" required />
                </div>

                <div class="input-block">
                    <label htmlFor="techs">Technologias</label>
                    <input name="techs" id="techs" required />
                </div>

                <div className="input-group">
                    <div class="input-block">
                        <label htmlFor="latitude">Latitide</label>
                        <input name="latitude" id="latitude" required />
                    </div>
                    <div class="input-block">
                        <label htmlFor="longitude">Longitude</label>
                        <input name="longitude" id="longitude" required />
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
