import React from 'react';
import './Header.css';

export default function Header({ score, highScore }) {
    return (
        <div id="header">
            <h1 id="title">Memory Card Game</h1>
            <div id="scoreDiv">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
            <div id="descript">
                <p>
                    Get points by clicking on an image but don&apos;t click on any more than once!
                </p>
            </div>
        </div>
    );
}
