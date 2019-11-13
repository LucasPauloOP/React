/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoneButton = () => {
    return (
        <Fragment>
            <span className="icon is-primary">
                <a>
                    <FontAwesomeIcon icon={['far', 'circle']}/>
                </a>
            </span>
        </Fragment>
    )
}

export default DoneButton;