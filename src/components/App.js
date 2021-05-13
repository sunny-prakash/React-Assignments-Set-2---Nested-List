import React, { Component, useState } from "react";
import "./../styles/App.css";
import City from "./City";

// Do not alter the states const and values inside it.
const states = [
    {
        name: "Madhya Pradesh",
        cities: [
            {
                name: "Indore",
                towns: [
                    {
                        name: "Mhow",
                    },
                    {
                        name: "Dewas",
                    },
                ],
            },
            {
                name: "Bhopal",
                towns: [
                    {
                        name: "Manit",
                    },
                    {
                        name: "Berasia",
                    },
                ],
            },
            {
                name: "Gwalior",
                towns: [
                    {
                        name: "Ajaypur",
                    },
                ],
            },
        ],
    },
    {
        name: "Jharkhand",
        cities: [
            {
                name: "Dhanbad",
                towns: [
                    {
                        name: "IIT(ISM) Dhanbad",
                    },
                    {
                        name: "Hirapur",
                    },
                ],
            },
            {
                name: "Wasseypur",
                towns: [
                    {
                        name: "Sardar khan's",
                    },
                    {
                        name: "Faizal khan's",
                    },
                ],
            },
            {
                name: "Mirzapur",
                towns: [
                    {
                        name: "Kaleen bhaiya's",
                    },
                    {
                        name: "Guddu bhaiya's",
                    },
                ],
            },
        ],
    },
    {
        name: "Assam",
        cities: [
            {
                name: "Guwhati",
                towns: [
                    {
                        name: "Amin",
                    },
                    {
                        name: "Jalah",
                    },
                ],
            },
            {
                name: "Jungle1",
                towns: [
                    {
                        name: "Tiger found at IIT Guwahati",
                    },
                    {
                        name: "Leopard found in IIT Guwahati",
                    },
                ],
            },
            {
                name: "Tezpur",
                towns: [
                    {
                        name: "Dibrugarh",
                    },
                    {
                        name: "Silchar",
                    },
                ],
            },
        ],
    },
    {
        name: "Bihar",
        cities: [
            {
                name: "Patna",
                towns: [
                    {
                        name: "Sonpur",
                    },
                    {
                        name: "Maner",
                    },
                ],
            },
            {
                name: "Gaya",
                towns: [
                    {
                        name: "Bakraur",
                    },
                    {
                        name: "Barachatti",
                    },
                ],
            },
            {
                name: "Darbhanga",
                towns: [
                    {
                        name: "Singhwara",
                    },
                    {
                        name: "Jale",
                    },
                ],
            },
        ],
    },
];

const App = () => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);

    const showContent = (id) => {
        switch (id) {
            case "state1":
                setState1(!state1);
                break;
            case "state2":
                setState2(!state2);
                break;
            case "state3":
                setState3(!state3);
                break;
            case "state4":
                setState4(!state4);
                break;
            default:
                "";
        }
    };

    return (
        <div id="main">
            <div>
                <div>
                    <button onClick={(e) => showContent(e.target.id)} id="state1">
                        {states[0].name}
                    </button>
                    {state1 ? (
                        <div>
                            <City cities={states[0].cities} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <button onClick={(e) => showContent(e.target.id)} id="state2">
                        {states[1].name}
                    </button>
                    {state2 ? (
                        <div>
                            <City cities={states[1].cities} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <button onClick={(e) => showContent(e.target.id)} id="state3">
                        {states[2].name}
                    </button>
                    {state3 ? (
                        <div>
                            <City cities={states[2].cities} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <button onClick={(e) => showContent(e.target.id)} id="state4">
                        {states[3].name}
                    </button>
                    {state4 ? (
                        <div>
                            <City cities={states[3].cities} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
