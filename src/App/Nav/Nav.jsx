import React, {useState, useEffect} from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    // State
    const [showMenu, updateShowMenu] = useState(true);
    const [isSmall, updateIsSmall] = useState(true);

    // Methods/Functions
    const handleHamburgerClick = () => {
        console.log('ding ding ding');

        let newShowMenu;

        if (showMenu === true) {
            newShowMenu = false;
        } else {
            newShowMenu = true;
        }

        updateShowMenu(newShowMenu);
    }

    // checking for small view or medium/large
    const handleIsSmall = () => {
        console.log('smol? ', isSmall);

        if (window.innerWidth > 599) {
            updateIsSmall(false);
            updateShowMenu(true);
        } else {
            updateIsSmall(true);
            updateShowMenu(false);
        }

    }

    // useEffect says only do this when our Nav mounts for the first time
    useEffect(() => {
        window.addEventListener('resize', handleIsSmall);
        handleIsSmall();
    }, []);

    return (
        <nav className='Nav'>
            {
                isSmall &&
                <div className="hamburger" onClick={handleHamburgerClick}>
                    <FontAwesomeIcon icon={ faBars } />
                </div>
            }
            {
                showMenu &&
                <div className="links">
                    <a href="#">Welcome</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            }
        </nav>
    );
}

export default Nav;