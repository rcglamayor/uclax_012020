import React from 'react';
import './Main.scss';
import Tabbed from '../Tabbed/Tabbed';

const Main = () => {
    return (
        <main className='Main'>

            <Tabbed />
            
            <div className="columns">
                <div className="col col1">Col 1</div>
                <div className="col col2">Col 2</div>
                <div className="col col3">Col 3</div>
                <div className="col col4">Col 4</div>
            </div>
        </main>
    );
}

export default Main;