import React, { useState, useEffect, useRef } from "react";
import './pageContent.css';
import personImg from '../../img/person.png';
import houseImg from '../../img/house.png';
import pinImg from '../../img/pin.png';
import timeImg from '../../img/time.png';
import star from '../../img/star.png';
import appStoreImg from '../../img/app-store.png';
import googlePlayImg from '../../img/google-play.png';
import emptyIphone from '../../img/empty-iphone.png';
import iphoneImg1 from '../../img/iphone-img-1.jpg';
import iphoneImg2 from '../../img/iphone-img-2.jpg';
import iphoneImg3 from '../../img/iphone-img-3.jpg';
import heartImg from '../../img/heart.png';
import okImg from '../../img/ok.png';
import roseImg from '../../img/rose.png';
import image1 from '../../img/image-1.png';
import image2 from '../../img/image-2.png';
import image3 from '../../img/image-3.png';
import image4 from '../../img/image-4.png';
import logo1 from '../../img/logo/Vector.png';
import logo2 from '../../img/logo/Vector-1.png';
import instagramLogo from '../../img/instagram.png';
import facebookLogo from '../../img/facebook.png';
import linkedInLogo from '../../img/linkedIn.png';

const PageContent = () => {
    const [imgUrl, setImgUrl] = useState(iphoneImg1);
    const [imgNum, setImgNum] = useState(1);

    useInterval(() => {
        if (imgNum === 3) {
            setImgNum(1);
        } else {
            setImgNum(imgNum + 1);
        }
    }, 3000);
    useEffect(() => {
        switch (imgNum) {
            case 1:
                setImgUrl(iphoneImg1);
                break;
            case 2:
                setImgUrl(iphoneImg2);
                break;
            case 2:
                setImgUrl(iphoneImg3);
                break;
            default:
                break;
        }
    }, [imgNum])
    return (
        <div className="mainContainer">
            <div className="section-1">
                <div className="mainPhoneContainer">
                    <div className="phoneInfoContainer">
                        <div className="phoneTitle">
                            <h2>Duis aute irure dolor in reprehenderit in voluptate</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br />deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="infoContainer">
                            <div className="info">
                                <img src={personImg} alt='' />
                                <span>Sagittis vitae et leo duis ut diam quam nulla.</span>
                            </div>
                            <div className="info">
                                <img src={houseImg} alt='' />
                                <span>Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.</span>
                            </div>
                            <div className="info">
                                <img src={pinImg} alt='' />
                                <span>Viverra adipiscing at in tellus integer feugiat scelerisque varius.</span>
                            </div>
                            <div className="info">
                                <img src={timeImg} alt='' />
                                <span>Elementum curabitur vitae nunc.</span>
                            </div>
                        </div>
                        <div className="iphone">
                            <div className="iphoneContainer">
                                <img className="emptyIphone" src={emptyIphone} alt='' />
                                <img className="iphoneImg" src={imgUrl} alt='' />
                            </div>
                        </div>
                        <div className="starsContainer">
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                        </div>              
                        <div className="moreInfo">
                            <p style={{ fontSize: '15px' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
                            <div className="storeContainer">
                                <img src={appStoreImg} alt='' />
                                <img src={googlePlayImg} alt='' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
              <div className="images-container">
                <div className="image-container">
                    <img src={image1} className="background" alt='' />
                    <div className="img-title">
                        <img src={heartImg} alt='' />
                        <span>Beyond Living</span>
                        <p>Modern and fresh, our spaces are outfitted with comfort and style, be it for a quick getaway to a long term stay.</p>
                    </div>

                </div>
                <div className="image-container img-container-2">
                    <img src={image2} className="background img2" alt='' />
                    <div className="img-title">
                        <span>Prime Locations</span>
                        <img src={pinImg} alt='' />
                        <p>Breathtaking views in convenient and sought after locations, a little something for everyone.</p>
                    </div>
                </div>
                <div className="image-container img-container-3">
                    <img src={image3} className="background img3" alt='' />
                    <div className="img-title">
                        <img src={roseImg} alt='' />
                        <span>Nullam efficitur turpis</span>
                        <p>Phasellus fermentum tellus vitae ante vehicula posuere. Curabitur metus metus, feugiat non semper lacinia, maximus sit amet ligula. Proin dictum quis ipsum.</p>
                    </div>
                </div>
                <div className="image-container img-container-4">
                    <img src={image4} className="background img4" alt='' />
                    <div className="img-title">
                        <span>A Signature of Excellence</span>
                        <img src={okImg} alt='' />
                        <p>24/7 guest concierge, seamless check-in and immaculate cleanliness, always a flawless stay.</p>

                    </div>
                </div>
            </div>
            <footer id="footer">
                <div className='middleSection'>
                    <div className="logoContainer">
                        <img src={logo1} alt='' />
                        <img src={logo2} alt='' />
                    </div>
                    <div className="linksContainer">
                        <div className="aboutContainer">
                            <p>ABOUT</p>
                            <ul>
                                <li><a href="#">Find a Stella</a></li>
                                <li><a href="#">Who we are</a></li>
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Lease to Stella Stays</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="citiesContainer">
                            <p>CITIES</p>
                            <ul>
                                <li><a href="#">Dubai</a></li>
                                <li><a href="#">Montreal</a></li>
                                <li><a href="#">Manama</a></li>
                            </ul>
                        </div>
                        <div className="contactUsContainer">
                            <p>CONTACT US</p>
                            <ul>
                                <li><a href="#">Whatsapp</a></li>
                                <li><a href="#">Email</a></li>
                            </ul>
                        </div>
                        <div className="downloadsContainer">
                            <p>DOWNLOAD</p>
                            <img src={appStoreImg} alt='' />
                            <img src={googlePlayImg} alt='' />
                        </div>
                    </div>
                    <div className='footerContainer'>
                        <div className="footer-1">
                            <span>Copyright © 2021 StellaStays Inc. All rights reserved.</span>
                            <span>Terms and conditions  ·  Privacy policy</span>
                        </div>
                        <div className="footer-2">
                            <img src={linkedInLogo} alt='' />
                            <img src={facebookLogo} alt='' />
                            <img src={instagramLogo} alt='' />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
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
export default PageContent;