import React from 'react';
import logo1 from '../../img/logo/Vector.png';
import logo2 from '../../img/logo/Vector-1.png';
import classes from './header.module.css';
import letter from '../../img/TT.png';
import arrow from '../../img/arrowDown.png';

const header = () => {
    return (
        <header>
            <nav>
                <div className={classes.logoContainer}>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                </div>
                <div className={classes.navBtns}>
                    <button>Help centre</button>
                    <button>Contact</button>
                    <img src={letter} alt="" />
                    <img src={arrow} alt="" />

                </div>
            </nav>
        </header>
    )
}

export default header;