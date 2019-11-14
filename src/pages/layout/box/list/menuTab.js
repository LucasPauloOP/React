import React from 'react';

import Tab from './menuTab/tab';

const MenuTab = () =>{
    return (
        <div className="tab is-fullwidth has-text-weight-bold">
            <ul>
                <Tab text="Incomplete" quantity={1} className={'is-active'} />
                <Tab text="Completed" quantity={0} className={''} />
            </ul>
        </div>
    )
}

export default MenuTab;