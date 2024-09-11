import React from 'react';

function App() {
    const ENDPOINT = 
        // 'http://localhost:3000/monster'
        'http://localhost:8088/monster'

        const [monster, setMonster] = React.useState('');

        async function handleSubmit(event) {
            // console.log(monster);
            event.preventDefault();
            const url = new URL(ENDPOINT);
            url.searchParams.append('name', monster);
            // console.log(url);
            const response = await fetch(url, {
                method: 'GET',
            });
            const json = await response.json();
            console.log(json)
        }

        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={monster}
                    onChange={(event) => {
                        setMonster(() => event.target.value);
                        console.log(monster);
                    }}
                />
                <input type="submit" value="submit" />
            </form>
        )
    }

export default App;