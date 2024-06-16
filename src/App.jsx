import {React, useState, useEffect} from "react";
import RollButton from "./Components/RollButton";
import Dice from "./Components/Dice";

function initializeDiceValues() {
    const initialDiceValues = Array.from({length: 10}, (_, i) => {
        return {
            index: i,
            locked: false,
            val: Math.trunc(Math.random() * 6 + 1)
        };
    });
    return initialDiceValues;
}



function App() {
    const [diceValues, setDiceValues] = useState(initializeDiceValues);
    const [win, setWin] = useState(false);

    const diceComponents = diceValues.map((dice) => {
        return <Dice key={dice.index} locked={dice.locked} val={dice.val} handleClick={() => lockDice(dice.index)} />
    });

    useEffect(() => {
        let prev = diceValues[0];
        for (let dice of diceValues) {
            if (dice.locked === false) {
                return;
            }
            if (prev.val !== dice.val) {
                return;
            }
            prev = dice;
        }
        setWin(true);
    }, [diceValues])

    function lockDice(index) {
        if (win) return;
        setDiceValues((oldDiceValues) => {
            const newDiceValues = oldDiceValues.map((dice) => {
                if (dice.index === index) {
                    return {
                        ...dice,
                        locked: !dice.locked
                    };
                }
                return dice;
            })
            return newDiceValues;
        });
    }

    function rollDice() {
        setDiceValues((oldDiceValues) => {
            const newDiceValues = oldDiceValues.map((dice) => {
                if (dice.locked === true) {
                    return dice;
                }
                return {
                    ...dice,
                    val: Math.trunc(Math.random() * 6 + 1)
                };
            });
            return newDiceValues;
        });
    }

    function newGame() {
        setDiceValues(initializeDiceValues());
        setWin(false);
    }

    return (
        <main className="min-h-screen flex justify-center items-center box-border p-8">
            <div className="bg-off-white box-border p-8 rounded-lg flex flex-col justify-center items-center min-h-96 max-w-[40rem]">
                <h1 className="text-3xl font-bold text-blackish-purple">Tenzies</h1>
                <p className="text-lg text-center text-h-purple">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

                {/* Die container */}
                <div className="grid grid-cols-5 gap-4 my-8 w-full justify-items-center">
                    {diceComponents}
                </div>

                <RollButton handleClick={win ? newGame : rollDice} text={win ? "New Game" : "Roll"} />
            </div>
        </main>
    );
}

export default App;