import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CreateButton = () => {
    return (
        <div className="field">
            <Link to="/create" >
                <button type="submit" className="button is-link is-medium is fullwidth">
                    <span className='icon'>
                        <FontAwesomeIcon icon={['fas','plus']} />
                    </span>
                    <span>Cria uma nova task</span>
                </button>
            </Link>

        </div>
    )
}

export default CreateButton;