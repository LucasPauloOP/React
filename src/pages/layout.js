import React, { Component } from 'react'
import Box from './layout/box';
class Layout extends Component {
    render() {
        return (
            <section className="hero is-info is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">
                                <h1>Começo da nossa aplicação React!</h1>
                                <Box />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default Layout;


