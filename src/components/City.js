import React from "react";
import Town from "./Town";

const City = ({ cities }) => {
    return (
        <div>
            {cities.map((city, i) => {
                return (
                    <div key={city.name}>
                        <h1 id={`city${i + 1}`}>{city.name}</h1>
                        <Town key={city.name} towns={city.towns} />
                    </div>
                );
            })}
        </div>
    );
};

export default City;
