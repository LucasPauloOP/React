import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './box/list';
import Form from './box/form';

const Box = () => {
    return (
        <div className='box'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={List}/>
                    <Route exact path='/create' component = {Form}/>
                    <Route exact path = '/update/:id' component = {Form}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Box;