import React, { useState } from 'react'

import './styles.css'
export default function Challenge () {
    const [ activeItem, setActiveItem] = useState(0)
    const menu = ["item 1","item 2", "item 3","item 4" ];
    
    return (
        <ul>
            {menu.map((item, index) => (
            <li
            className={`btn ${activeItem === index + 1 ? "active" : null}`}
            onClick = {()=> setActiveItem(index + 1)}
            >
                {item}
            </li>
            ))}
        </ul>
    );
}

export function Challenge2 () {
    const [activeItem, setActiveItem] = useState(0)

    const buttonCreate = ["button1", "button2", "button3"];

    return (
        <button>
            {buttonCreate.map((button, index) => (
            <button
            className= {`btn ${activeItem === index + 1 ? "active-button": null}`}
            onClick = {() => setActiveItem(index +1)}
            >
                {button}
            </button>
            ))}
        </button>
    )




}