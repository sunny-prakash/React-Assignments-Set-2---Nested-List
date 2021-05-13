import React from "react";

const Town = (props) => {
    const { city, cityName, towns } = props;
    return (
        <div>
            {city === cityName
                ? towns.map((town, i) => {
                      return (
                          <div key={town.name}>
                              <p id={`town${i + 1}`}>{town.name}</p>
                          </div>
                      );
                  })
                : ""}
        </div>
    );
};

export default Town;
