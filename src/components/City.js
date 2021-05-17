import React, { useState } from "react";
import Town from "./Town";

const City = ({ city, index }) => {
    const [showCity, setShowshowCity] = useState(false);

    const showContent = () => {
        setShowshowCity(!showCity);
    };
    return (
        <div>
            <h1 onClick={showContent} id={`city${index + 1}`}>
                {city.name}
            </h1>
            {showCity
                ? city.towns.map((town, index) => {
                      return <Town key={town.name} town={town} index={index} />;
                  })
                : ""}
        </div>
    );
};

export default City;
