import React, { useState, useRef } from 'react';
import classes from './slideImages.module.css';
import leftArrow from '../../img/left-arrow.png';
import rightArrow from '../../img/right-arrow.png';
import smallDot from '../../img/small-dot.png';
import image1 from '../../img/room1.png';
import image2 from '../../img/room2.png';
import image3 from '../../img/room3.png';

const images = [{
    url: image1,
    description: 'Spectacular 4 BDR Palm Villa | Beach | Private Pool',
    price: '2,549',
    city: 'Dubai',
    guests: 10
}, {
    url: image2,
    description: 'Wonderful 2BDR | Dubai JBR | Beach | Netflix',
    price: '2,549',
    city: 'Dubai',
    guests: 1
},
{
    url: image3,
    description: 'Spectacular 4 BDR Palm Villa | Beach | Private Pool',
    price: '2,549',
    city: 'Dubai',
    guests: 2
},
{
    url: image1,
    description: 'Spectacular 4 BDR Palm Villa | Beach | Private Pool',
    price: '2,549',
    city: 'Dubai',
    guests: 10
},
{
    url: image2,
    description: 'Wonderful 2BDR | Dubai JBR | Beach | Netflix',
    price: '2,549',
    city: 'Dubai',
    guests: 6
},{
    url: image3,
    description: 'Spectacular 4 BDR Palm Villa | Beach | Private Pool',
    price: '2,549',
    city: 'Dubai',
    guests: 10
},{
    url: image1,
    description: 'Wonderful 2BDR | Dubai JBR | Beach | Netflix',
    price: '2,549',
    city: 'Dubai',
    guests: 6
},{
    url: image2,
    description: 'Spectacular 4 BDR Palm Villa | Beach | Private Pool',
    price: '2,549',
    city: 'Dubai',
    guests: 5
},{
    url: image3,
    description: 'Wonderful 2BDR | Dubai JBR | Beach | Netflix',
    price: '2,549',
    city: 'Dubai',
    guests: 10
}
]
const SlideImages = () => {
    const [scroll, setScroll] = useState(0);
    const counter = useRef(null);

    const scrollBtnHandler = (val) => {
        if(val === '+'){
            counter.current.scrollLeft += 400;
        } else {
            counter.current.scrollLeft -= 400;
        }
    }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.container1}>
                <h2>Featured stays</h2>
                <p>Beachfront villas to high rise apartments and penthouses,<br />experience your next stay with <span style={{ fontWeight: 'bold' }}>Stella</span>.</p>
            </div>
            <div className={classes.container2}>
                <div className={classes.arrowsContainer}>
                    <div className={classes.arrow1} onClick={() => scrollBtnHandler('-')}>
                        <img src={leftArrow} alt='' />
                    </div>
                    <div className={classes.arrow2} onClick={() => scrollBtnHandler('+')}>
                        <img src={rightArrow} alt='' />
                    </div>
                </div>
                <div className={classes.imagesContainer} ref={counter}>
                    {
                        images.map((img,index) => {
                            return (
                                <div key={index} className={classes.imgContainer}>
                                    <img src={img.url} alt="" />
                                    <span className={classes.price}>from AED {img.price}/night</span>
                                    <p className={classes.description}>{img.description}</p>
                                    <div className={classes.imgDescription}>
                                        <span>{img.city}</span>
                                        <img src={smallDot} alt='' />
                                        <span>{img.guests} guests</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default SlideImages;