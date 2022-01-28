import React, {useState} from 'react';
import classes from './search.module.css';
import searchImg from '../../img/search.png';
import leftArrow from '../../img/left-arrow.png';
import rightArrow from '../../img/right-arrow.png';
import close from '../../img/close.png';

const monthsArr = [
    {
        month: 'January',
        endDay: 31,
        gridStartLocation: 7
    },
    {
        month: 'February',
        endDay: 28,
        gridStartLocation: 3
    },
    {
        month: 'March',
        endDay: 31,
        gridStartLocation: 3
    },
    {
        month: 'April',
        endDay: 30,
        gridStartLocation: 6
    },
    {
        month: 'May',
        endDay: 31,
        gridStartLocation: 1
    },
    {
        month: 'June',
        endDay: 30,
        gridStartLocation: 4
    },
    {
        month: 'July',
        endDay: 31,
        gridStartLocation: 6
    },
    {
        month: 'August',
        endDay: 31,
        gridStartLocation: 2
    },
    {
        month: 'September',
        endDay: 30,
        gridStartLocation: 5
    },
    {
        month: 'October',
        endDay: 31,
        gridStartLocation: 7
    },
    {
        month: 'November',
        endDay: 30,
        gridStartLocation: 3
    },
    {
        month: 'December',
        endDay: 31,
        gridStartLocation: 5
    },

]
const Search = () => {
    const [displayCities, setDisplayCities] = useState(false);
    const [city, setCity] = useState('Select a city');
    const [monthLocation, setMonthLocation] = useState(0);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState('');
    const [previousMonthLocation, setPreviousMonthLocation] = useState(0);
    const [previousDay, setPreviousDay] = useState(0);
    const [displayDropdown, setdisplayDropdown] = useState(false);
    const [guestNumbers, setGuestNumbers] = useState(0);
    const [guestTile, setGuestTtle] = useState('Add guests');
    const [displayComponent, setDisplayComponent] = useState(true);
    const [color, setColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [color2, setColor2] = useState('');
    const [backgroundColor2, setBackgroundColor2] = useState('');
    const [style1, setStyle1] = useState('none');
    const [style2, setStyle2] = useState('block');
    let date;
    const displayList = () => {
        displayCities === true ? setDisplayCities(false) : setDisplayCities(true);
    }
    const selectedCity = (e) => {
        const city = e.target.innerText;
        setCity(city);
    }
    const nextMonth = () => {
        if (monthLocation === 11) {
            return;
        }
        setMonthLocation(monthLocation + 1);
    }
    const previousMonth = () => {
        if (monthLocation === 0) {
            return;
        }
        setMonthLocation(monthLocation - 1);

    }
    const dayClickHandler1 = (day) => {
        if (checkIn === null) {
            setPreviousMonthLocation(monthLocation);
            setPreviousDay(day);
            setCheckIn(day + ' ' + monthsArr[monthLocation].month.substring(0, 3));
        } else {
            if (previousMonthLocation > monthLocation) {
                setCheckIn(day + ' ' + monthsArr[monthLocation].month.substring(0, 3));
                setPreviousDay(day);
            } else {
                if (previousDay > day) {
                    setCheckIn(day + ' ' + monthsArr[monthLocation].month.substring(0, 3));
                    setPreviousDay(day);
                } else {
                    setCheckOut(day + ' ' + monthsArr[monthLocation].month.substring(0, 3));
                    setPreviousDay(0);
                }
            }
        }
    }

    const clearHandler = () => {
        setCheckIn(null);
        setCheckOut('');
    }
    const displayDropdownHandler = (e) => {
        const val = e.target.dataset.viewTag;
        if (val) {
            if (val === 'parent') {
                setdisplayDropdown(true);
            } else if (val === 'close') {
                setdisplayDropdown(false);
                setCheckIn(null);
                setCheckOut('');
            } else if (val === 'apply') {
                setdisplayDropdown(false);
            }
        }
    }

    const toggleComponentHandler = (e) => {
        if (e.target.innerText === 'Calender') {
            setColor('#fff');
            setBackgroundColor('#75969f');
            setColor2('');
            setBackgroundColor2('');
            setDisplayComponent(true);
        } else if (e.target.innerText === 'Flexible') {
            setColor2('#fff');
            setBackgroundColor2('#75969f');
            setColor('');
            setBackgroundColor('');
            setDisplayComponent(false);
        }
    }
    const guestDecHandler = () => {
        if (guestNumbers === 0 || guestNumbers === 1) {
            return;
        }
        setGuestNumbers(guestNumbers - 1);
        setGuestTtle(`${guestNumbers} guests`);
    }
    const guestIncHandler = () => {
        setGuestNumbers(guestNumbers + 1);
        setGuestTtle(`${guestNumbers} guests`);
    }
    if (checkIn === null) {
        date = 'Add date';
    } else {
        date = checkIn + '-' + checkOut;
    }
    const dayClickHandler2 = (day) => {
        const monthNum = monthLocation + 1;
        if (checkIn === null) {
            setPreviousMonthLocation(monthNum);
            setCheckIn(day + ' ' + monthsArr[monthNum].month.substring(0, 3))
        } else {
            if (previousMonthLocation > monthLocation + 1) {
                setCheckIn(day + ' ' + monthsArr[monthNum].month.substring(0, 3))
            } else {
                setCheckOut(day + ' ' + monthsArr[monthNum].month.substring(0, 3))
            }

        }
    }
    const dates = Array.from(Array(monthsArr[monthLocation].endDay).keys());
    const dates2 = Array.from(Array(monthsArr[monthLocation + 1].endDay).keys());

    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth <= 700) {
            if(style1 === 'none') {
                setStyle1('block');
                setStyle2('none');
            }
        }else if (e.target.innerWidth > 700) {
            if(style1 === 'block') {
                setStyle1('none');
                setStyle2('block');

            }        
        }

    });
    let el;
    if (displayComponent) {
        el = (
            <div className={classes.calendersContainer} style={{ display: displayComponent ? 'block' : 'none' }}>
                <div className={classes.calenders}>
                    <div className={classes.calender}>
                        <div className={classes.monthContainer}>
                            <img src={leftArrow} alt="" onClick={previousMonth} />
                            <span>{monthsArr[monthLocation].month} 2022</span>
                            {<img src={rightArrow} style={{display:style1}} alt="" onClick={nextMonth} />}
                        </div>
                        <div className={classes.daysContainer}>
                            <div className={classes.dates}>
                                <span>Su</span>
                                <span>Mo</span>
                                <span>Tu</span>
                                <span>We</span>
                                <span>Th</span>
                                <span>Fr</span>
                                <span>Sa</span>
                            </div>
                            <div className={classes.days}>
                                {
                                    dates.map((day, index) => {
                                        const actualDay = day + 1;
                                        if (index === 0) {
                                            return <span key= {index} style={{ gridColumnStart: monthsArr[monthLocation].gridStartLocation }} onClick={() => dayClickHandler1(actualDay)}>{actualDay}</span>;
                                        }
                                        return <span key= {index} onClick={() => dayClickHandler1(actualDay)}>{actualDay}</span>
                                    })
                                }
                            </div>
                        </div>

                    </div>
                      <div className={classes.calender} style={{display:style2}}>
                    <div className={classes.monthContainer + ' ' + classes.secondMonthContainer}>

                        <span>{monthsArr[monthLocation + 1].month} 2022</span>
                        <img src={rightArrow} alt="" onClick={nextMonth} />
                    </div>
                    <div className={classes.daysContainer}>
                        <div className={classes.dates}>
                            <span>Su</span>
                            <span>Mo</span>
                            <span>Tu</span>
                            <span>We</span>
                            <span>Th</span>
                            <span>Fr</span>
                            <span>Sa</span>
                        </div>
                        <div className={classes.days}>
                            {
                                dates2.map((day, index) => {
                                    const actualDay = day + 1;
                                    if (index === 0) {
                                        return <span key={index} style={{ gridColumnStart: monthsArr[monthLocation + 1].gridStartLocation }} onClick={() => dayClickHandler2(actualDay)}>1</span>;
                                    }
                                    return <span key={index} onClick={() => dayClickHandler2(actualDay)}>{actualDay}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    } else {
        el = (
            <div className={classes.flexibleContainer}>
                <div className={classes.weekendContainer}>
                    <p>Stay for a <span style={{ fontWeight: 'bold' }}>weekend</span></p>
                    <div className={classes.weekendBtns}>
                        <button>Weekend</button>
                        <button>Week</button>
                        <button>Month</button>
                    </div>
                </div>
                <p className={classes.weekendText}>Go in <span style={{ fontWeight: 'bold', color: 'black' }}>January</span></p>
                <div className={classes.monthsBtnContainer}>
                    <p>2022</p>
                    <div className={classes.monthBtns}>
                        <button>January</button>
                        <button>February</button>
                        <button>March</button>
                        <button>April</button>
                        <button>May</button>
                        <button>June</button>
                        <button>July</button>
                        <button>August</button>
                        <button>September</button>
                        <button>October</button>
                        <button>November</button>
                        <button>December</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={classes.searchContainer}>
            <div className={classes.cityContainer} onClick={displayList}>
                <p className={classes.cityLabel}>CITY</p>
                <p className={classes.citySelection}>{city}</p>
                <div className={classes.cityDropdown} style={{ display: displayCities === true ? 'block' : 'none' }}>
                    <p onClick={selectedCity}>Dubai</p>
                    <p onClick={selectedCity}>Montreal</p>
                    <p onClick={selectedCity}>Manama</p>
                </div>
            </div>
            <div className={classes.datesContainer} onClick={displayDropdownHandler} data-view-tag="parent">
                <p data-view-tag="parent">DATES</p>
                <p data-view-tag="parent">{date}</p>
                <div className={classes.datesDropdown} style={{ display: displayDropdown ? 'block' : 'none' }}>
                    {
                        <div className={classes.calenderContainer}>
                            <div className={classes.calenderSelection} onClick={toggleComponentHandler}>
                                <button style={{ color: color, backgroundColor: backgroundColor }}>Calender</button>
                                <button style={{ color: color2, backgroundColor: backgroundColor2 }}>Flexible</button>
                            </div>
                            {el}
                            <div className={classes.submitDatesContainer}>
                                <button onClick={clearHandler}>Clear</button>
                                <button data-view-tag="apply" >Apply dates</button>
                            </div>
                        </div>
                    }
                    <img src={close} className={classes.closePopUp} alt="" data-view-tag="close" />
                </div>
            </div>
            <div className={classes.guestsContainer}>
                <p>GUESTS</p>
                <div className={classes.guestNumbers}>
                    <span>{guestTile}</span>
                    <div className={classes.guestBtns}>
                        <button onClick={guestDecHandler}>-</button>
                        <button onClick={guestIncHandler}>+</button>
                    </div>
                </div>
            </div>
            <div className={classes.searchBtnContainer}>
                <button><img src={searchImg} alt='' />Search</button>
            </div>
        </div>
    )
}

export default Search;