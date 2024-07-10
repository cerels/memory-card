import React, { useEffect, useState } from 'react';
import GameCard from './Card';
import Header from './Header';
import './Game.css';

export default function Game() {
    const [gameData, setGameData] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        // Define an asynchronous function to fetch the data
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'); // Replace with your API endpoint
                const data = await response.json();
                const pokedex = data.results;
                // Assuming the API returns an array of objects with `url` and `name` properties
                const formattedData = pokedex.map(item => ({
                    URL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(pokedex.indexOf(item) + 1)}.svg`,
                    name: item.name
                }));

                setGameData(formattedData.slice(0, 151)); // Get only the first 24 items
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleCardClick = (name) => {
        if (clickedCards.includes(name)) {
            setGameOver(true);
            if (score > highScore) {
                setHighScore(score);
            }
        } else {
            setClickedCards([...clickedCards, name]);
            setScore(score + 1);
            setGameData(shuffleArray([...gameData]));
        }
    };

    const handleRestart = () => {
        setGameOver(false);
        setClickedCards([]);
        setScore(0);
        setGameData(shuffleArray([...gameData]));
    };

    return (
        <>
            <Header score={score} highScore={highScore} />
            <div className="game-container">
                {gameOver ? (
                    <div className="game-over">
                        <h2>Game Over!</h2>
                        <button onClick={handleRestart}>Restart Game</button>
                    </div>
                ) : (
                    gameData.map((item, index) => (
                        <GameCard key={index} URL={item.URL} name={item.name} onClick={() => handleCardClick(item.name)} />
                    ))
                )}
            </div>
        </>
    );
}
