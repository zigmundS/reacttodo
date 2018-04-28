import React from 'react';
import Input from './Input';

function List() {
    return (
        <div className="list">
            <ul>
                <li><Input name="123" /></li>
                <li><Input name="123" /></li>
                <li><Input name="123" /></li>
                <li><Input name="123" /></li>
            </ul>
        </div>
    )
}

export default List
