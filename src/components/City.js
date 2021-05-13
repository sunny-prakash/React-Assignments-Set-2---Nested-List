import React, { useState } from "react";
import Town from "./Town";

const City = ({ cities }) => {
    const [cityname, setCityname] = useState("");

    const showTown = (input) => {
        if (input === cityname) {
            setCityname("");
        } else {
            setCityname(input);
        }
    };
    return (
        <div>
            {cities.map((city, i) => {
                return (
                    <div key={city.name}>
                        <h1
                            id={`city${i + 1}`}
                            onClick={(e) => {
                                showTown(e.target.innerText);
                            }}
                        >
                            {city.name}
                        </h1>
                        <Town key={city.name} city={cityname} cityName={city.name} towns={city.towns} />
                    </div>
                );
            })}
        </div>
    );
};

export default City;
