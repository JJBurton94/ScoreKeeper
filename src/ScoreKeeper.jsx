import { useState } from "react";

export default function ScoreKeeper ({numPlayers = 2, target=5}) {
    const [scores,SetScores] = useState(new Array(numPlayers).fill(0));
    const increaseScore = (idx) => {
        SetScores((prevScores) => {
            const copy = [...prevScores];
            copy[idx] += 1;
            return copy;
        });
    }
        const decreaseScore = (idx) => {
            SetScores((prevScores) => {
                const copy = [...prevScores];
                copy[idx] -= 1;
                return copy;
            });
        }

    return (
        <div>
            <ul className="playerlist">
                {scores.map((score, idx) => {
                    return <li className="player" key={idx}>
                        Player {idx + 1}: {score}
                        <button className="minus" onClick={() => decreaseScore(idx)}>-1</button>
                        <button className="plus" onClick={() => increaseScore(idx)}>+1</button>
                        {score >= target && "WINNER!"}
                    </li>
                })}
            </ul>
            <h3>Winning Score = {target}</h3>
        </div>
    )
}