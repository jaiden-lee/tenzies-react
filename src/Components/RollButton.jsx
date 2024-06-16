import React from "react";

function RollButton(props) {
    const {handleClick, text} = props;

    return (
        <button 
            className="bg-blueish-purple text-white px-10 py-2 text-xl font-semibold rounded-md shadow-md shadow-slate-400 transition-all hover:scale-[1.025] active:scale-[.975]"
            onClick={handleClick}>
                {text}
        </button>
    );
}

export default RollButton;