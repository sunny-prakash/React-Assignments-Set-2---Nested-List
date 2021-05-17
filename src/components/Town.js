import React from "react";

const Town = ({ town, index }) => {
    return (
        <div>
            <h3 id={`town${index + 1}`}>{town.name}</h3>
        </div>
    );
};

export default Town;
