import React from 'react';

function Input({ name, index, status }) {

    return (
        <li className={status ? 'active' : 'inactive'} key={index}>
            <input type="checkbox" name="checkTask"/>
            <span>{name}</span>
            <button>edit</button>
            <button>delete</button>
        </li>
    )
}

export default Input
