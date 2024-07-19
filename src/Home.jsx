import React from 'react';
import searchIcon from "./assets/images/search.svg";
import cldIcon from "./assets/images/cloudy.png";
import hIcon from "./assets/images/humid-img.svg";
import wIcon from "./assets/images/wind-1.svg";

const Home = () => {
    return (
        <div className='container'>
            <div className="search">
                <input type='text' placeholder='Enter City Name' />
                <button className='btn'>
                    <img src={searchIcon} />
                </button>
            </div>
            <div className="weather-info">
                <img src={cldIcon} alt='cloud-icon' className='cld-img' />
                <div className="temp">
                    <h2>23°C</h2>
                    <h2>Bengaluru</h2>
                </div>
                <div className="h-wind">
                    <div className="col">
                        <div className='col-img'>
                            <img src={hIcon} />
                        </div>
                        <div className='col-txt'>
                            <span>20%</span>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className='col-img'>
                            <img src={wIcon} />
                        </div>

                        <div className='col-txt'>
                            <span>2 Km/hr</span>
                            <span>Wind</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home