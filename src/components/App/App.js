import React from 'react';

function App() {
    const ENDPOINT = 
        // 'http://localhost:3000/monster'
        'http://localhost:8088/monster'

        const [monster, setMonster] = React.useState('');

        async function handleSubmit(event) {
            event.preventDefault();
            const url = new URL(ENDPOINT);
            url.searchParams.append('name', monster.toLowerCase());
            const response = await fetch(url, {
                method: 'GET',
            });
            const json = await response.json();
            console.log(json)
        }

        return (
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={monster}
                        onChange={(event) => {
                            setMonster(() => event.target.value);
                            console.log(monster);
                        }}
                    />
                    {/* <input type="submit" value="submit" /> */}
                </form>
            </div>
        )
    }

export default App;