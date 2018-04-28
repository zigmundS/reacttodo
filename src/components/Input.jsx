import React from 'react';

function Input({ name }) {

    return (
        <div className="active">
            <input type="checkbox" name="checkTask"/>
            <span>{name}</span>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default Input
