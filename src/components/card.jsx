import React from "react";
import "../styles/card.css";

// colores por tipo
const TYPE_COLORS = {
    grass: "#63BC5A",
    fire: "#FF9D55",
    water: "#5090D6",
    bug: "#91C12F",
    normal: "#919AA2",
    electric: "#F4D23C",
    ground: "#D97845",
    rock: "#C5B78C",
    psychic: "#FA7179",
    ice: "#73CEC0",
    dragon: "#0B6DC3",
    dark: "#5A5465",
    fairy: "#EC8FE6",
    steel: "#5A8EA2",
    fighting: "#CE416B",
    ghost: "#5269AD",
    flying: "#89AAE3",
    poison: "#B567CE",
};

export default function Card({ img, name, type=[], height, weight, hp, attack, defence }) {
    return (
        <div className="card-border"
            style={{ borderTop: `6px solid ${TYPE_COLORS[type[0]?.toLowerCase()] || "#ccc"}` }}>
            <div className="card">
                <img src={img} alt={name} className="img" />

                <h2 className="pokemon-name">
                {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
                </h2>

                <h3 className="type">
                Type:{" "}
                {type.map((t) => {
                    const color = TYPE_COLORS[t.toLowerCase()] || "#ccc";
                    return (
                    <span
                        key={t}
                        className="type-chip"
                        style={{ backgroundColor: color, color: "white" }}
                    >
                        {t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()}
                    </span>
                    );
                })}
                </h3>

                <ul className="information">
                    <li>
                        <span>Height:</span> {height} cm
                    </li>
                    <li>
                        <span>Weight:</span> {weight} kg
                    </li>
                </ul>

                <ul className="statistics">
                    <li>
                        <span>HP:</span> {hp}
                    </li>
                    {/* <li style={{ "--value": hp }}>
                        <span>HP:</span> {hp}
                    </li> */}
                    <li>
                        <span>Attack:</span> {attack}
                    </li>
                    {/* <li style={{ "--value": attack }}>
                        <span>Attack:</span> {attack}
                    </li> */}
                    <li>
                        <span>Defence:</span> {defence}
                    </li>
                    {/* <li style={{ "--value": defence }}>
                        <span>Defence:</span> {defence}
                    </li> */}
                </ul>
            </div>
        </div>
    );
}
