import React, { useState } from 'react';
import classes from './search.module.css';
import searchImg from '../../img/search.png';
import leftArrow from '../../img/left-arrow.png';
import rightArrow from '../../img/right-arrow.png';


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
    const [checkIn, setCheckIn] = useState('Add dates');


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
    const checkInHandler = (day) => {
        setCheckIn(day + ' ' + monthsArr[monthLocation].month.substring(0, 3))
    }
    const dates = Array.from(Array(monthsArr[monthLocation].endDay).keys());
    const test1 = Array.from(Array(31).keys());
    // console.log(checkIn)
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
            <div className={classes.checkInContainer}>
                <p>CHECK IN</p>
                <p>Add dates</p>
                <div className={classes.checkInDropdown}>
                    <div className={classes.calenderContainer}>
                        <div className={classes.calenderSelection}>
                            <button>Calender</button>
                            <button>Flexible</button>
                        </div>
                        <div className={classes.calenders}>
                            <div className={classes.calender}>
                                <div className={classes.monthContainer}>
                                    <img src={leftArrow} alt="" onClick={previousMonth} />
                                    <span>{monthsArr[monthLocation].month} 2022</span>
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
                                            dates.map((day, index) => {
                                                //    console.log(index);
                                                const actualDay = day + 1;
                                                if (index === 0) {
                                                    return <span style={{ gridColumnStart: monthsArr[monthLocation].gridStartLocation }}>1</span>;
                                                }
                                                return <span onClick={() => checkInHandler(actualDay)}>{actualDay}</span>
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className={classes.calender}>
                                <div className={classes.monthContainer}>
                                    <img src={leftArrow} alt="" />
                                    <span>February 2022</span>
                                    <img src={rightArrow} alt="" />
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
                                            test1.map(day => <span>{day + 1}</span>)
                                            /*    dates.map((day, index) => {
                                                   //    console.log(index);
                                                   const actualDay = day + 1;
                                                   if (index === 0) {
                                                       return <span style={{ gridColumnStart: monthsArr[monthLocation].gridStartLocation }}>1</span>;
                                                   }
                                                   return <span onClick={() => checkInHandler(actualDay)}>{actualDay}</span>
                                               }) */
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={classes.subnitDatesContainer}>
                            <button>Clear</button>
                            <button>Apply dates</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.checkOutContainer}>
                <p>CHECK OUT</p>
                <p>Add dates</p>
            </div>
            <div className={classes.guestsContainer}>
                <p>GUESTS</p>
                <div className={classes.guestNumbers}>
                    <span>Add guest</span>
                    <div className={classes.guestBtns}>
                        <button>-</button>
                        <button>+</button>
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