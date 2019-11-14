import React from 'react';

const Tab = ({text, quatity, className}) => {
    return(
    <li className={className} >
        <a>
            {text} &nbsp;
            <span className="tag is-dark is-rounded is-small">{quatity}</span>
        </a>
    </li>
    );
}

export default Tab;