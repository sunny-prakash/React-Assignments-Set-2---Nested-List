import React, { useState } from "react";
import City from "./City";

const State = ({ state, index }) => {
    const [showState, setShowState] = useState(false);

    const showContent = () => {
        setShowState(!showState);
    };
    return (
        <div>
            <button onClick={showContent} id={`state${index + 1}`}>
                {state.name}
            </button>
            {showState
                ? state.cities.map((city, index) => {
                      return <City key={city.name} city={city} index={index} />;
                  })
                : ""}
        </div>
    );
};

export default State;
