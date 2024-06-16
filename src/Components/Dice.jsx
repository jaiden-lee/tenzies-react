import React from "react";

function Dice(props) {
    const {val, locked, handleClick} = props;

    return (
        <button
        className={`text-blackish-purple text-3xl font-semibold w-14 h-14 bg-white text-center shadow-md rounded-md transition-transform hover:scale-105 active:scale-95 ${locked ? "locked" : ""} [&.locked]:bg-light-green`}
        onClick={handleClick} >
            {val}
        </button>
    );
}

export default Dice;