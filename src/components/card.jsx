import React from 'react';
import '../styles/card.css';


export default function Card({ img, name, type=[], height, weight, hp, attack, defence }) {
    return (
    <>
        <div className='card-border'>
            <div className='card'>
                <img src={img} alt="" className='img'/>
                <h2 className='pokemon-name' >Name: {name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()}</h2>
                <h3 className='type'>
                    Type: {type.map(t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join(", ")}
                </h3>
                    <span>Height:</span> {height} cm
                    <span>Weight:</span> {weight} kg
                    <span>HP:</span> {hp}
                    <span>Attack:</span> {attack}
                    <span>Defence:</span> {defence}
                
            </div>
        </div>
    </>
    )
}
