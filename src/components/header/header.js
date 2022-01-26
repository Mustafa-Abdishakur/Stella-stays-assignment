import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../../img/logo/Vector.png';
import logo2 from '../../img/logo/Vector-1.png';
import classes from './header.module.css';
import profileIcon from '../../img/profile-icon.png';
import arrow from '../../img/arrowDown.png';
import backgroundShadow from '../../img/background-shadow.png';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import img5 from '../../img/img5.png';
const images = {
    img_1: {
        url: img1,
        description: "Lovely & Historic | Old Montreal | Netflix"
    },
    img_2: {
        url: img2,
        description: "Cozy Beachfront Villa | Private Pool | 4BDR"
    },
    img_3: {
        url: img3,
        description: "Lovely & Historic | Old Montreal | Netflix"
    },
    img_4: {
        url: img4,
        description: "Trendy 1 BDR | Dubai JBR | Beach | Netflix"
    },
    img_5: {
        url: img5,
        description: "Ultimate 4 BR Penthouse | Private Pool + Panoramic View"
    }
}
const Header = () => {

    let [imageNumber, setImageNumber] = useState(1);
    let [imageUrl, setImageUrl] = useState(img1);
    let [imageText, setImageText] = useState('');
    // let[btnColor, setBtnColor] = useState('rgb(206, 206, 206)');
    let[hightlightColor, setHighlightColor] = useState(1);

    useInterval(() => {
        if (imageNumber === 5) {
            setImageNumber(1);
        } else {
            setImageNumber(imageNumber + 1);
        }
    }, 5000);

    // let style;
    useEffect(() => {
        let img;
        switch (imageNumber) {
            case 1:
                img = imageInfo(1);
                // style = { backgroundImage: `url(${img1})` };
                setImageUrl(img1);
                setImageText(img.description);
                setHighlightColor(1);
                break;
            case 2:
                img = imageInfo(2);
                // style = { backgroundImage: `url(${img2})` };
                setImageUrl(img2);
                setImageText(img.description);
                setHighlightColor(2);

                break;
            case 3:
                img = imageInfo(3);
                // style = { backgroundImage: `url(${img3})` };
                setImageUrl(img3);
                setImageText(img.description);
                setHighlightColor(3);

                break;
            case 4:
                img = imageInfo(4);
                // style = { backgroundImage: `url(${img4})` };
                setImageUrl(img4);
                setImageText(img.description);
                setHighlightColor(4);
                break;
            case 5:
                img = imageInfo(5);
                // style = { backgroundImage: `url(${img5})` };
                setImageUrl(img5);
                setImageText(img.description);
                setHighlightColor(5);
                break;
            default:
                // style = { backgroundImage: `url(${img1})` };
                setImageText('Loreum text');
                break;
        }
    }, [imageNumber])

    return (
        <header style={{ backgroundImage: `url(${imageUrl})` }}>
            <nav>
                <div className={classes.logoContainer}>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                </div>
                <div className={classes.navBtns}>
                    <button>Help Centre</button>
                    <button className={classes.contactBtn}>Contact</button>
                    <img src={profileIcon} className={classes.profileIcon} alt="" />
                    <img src={arrow} className={classes.arrow} alt="" />
                </div>
            </nav>
            <div className={classes.titleContainer}>
                <h1>Escape<br />the ordinary</h1>
                <p>A new way to stay in your favorite neighbourhoods around the world.</p>
            </div>
            <div className={classes.dotsContainer}>
                <p className={classes.imageText}>{imageText}</p>
                <div className={classes.dots}>
                    <button className={classes.btn_1} data-number="1" onClick={print} style={{backgroundColor:`${hightlightColor === 1 ? '#fff' : 'rgb(206, 206, 206)'}`}}></button>
                    <button className={classes.btn_2} style={{backgroundColor:`${hightlightColor === 2 ? '#fff' : 'rgb(206, 206, 206)'}`}}></button>
                    <button className={classes.btn_3} style={{backgroundColor:`${hightlightColor === 3 ? '#fff' : 'rgb(206, 206, 206)'}`}}></button>
                    <button className={classes.btn_4} style={{backgroundColor:`${hightlightColor === 4 ? '#fff' : 'rgb(206, 206, 206)'}`}}></button>
                    <button className={classes.btn_5} style={{backgroundColor:`${hightlightColor === 5 ? '#fff' : 'rgb(206, 206, 206)'}`}}></button>
                </div>
            </div>
        </header>
    )
}
const print = event => {
    console.log(event.target.dataset.number)
}
const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
const imageInfo = (imgNum) => {
    for (const imageKey in images) {
        const number = imageKey.split('_')[1];
        if (number == imgNum) {
            return images[imageKey];
        }
    }
}

export default Header;