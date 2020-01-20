import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './component/DevForm';
import DevItem from './component/DevItem';

/* Notes: 
Most important concept of React:
Component: A isolated block of HTML, Javascript and CSS.
Property: The properties of a block.
State: The values of a property a keeped on updates (inmutable)
*/

function App() {

    const [devs, setDevs] = useState([]);
    
    // Load all devs
    useEffect( () => {
       
        async function loadDevs(){
            const response = await api.get('/devs');
            setDevs(response.data);
        }

        loadDevs();
    }, []) // [] for one execution

    async function handleAddDev(data){

        const response = await api.post('/devs',data);
        // console.log(response.data);

        // Create a new array with the new user (dont use .push, we need to keep the state paradigm)
        setDevs([...devs, response.data]);
        // console.log(devs);
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev} />
            </aside>
            <main>
                <ul>
                    {devs.map( dev =>(
                        <DevItem key={dev._id} dev={dev}/>
                    ))}                    
                    
                </ul>
            </main>
        </div>
    );
}

export default App;
