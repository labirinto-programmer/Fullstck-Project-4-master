import React from 'react';

export const Btn = props => {
    return (
        <button className={`btn ${props.classbtn}`}>
            <a href={`#${props.text}`}>
                {props.text}
            </a>
        </button>
    );
}