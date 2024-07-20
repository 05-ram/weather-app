import React, { useEffect, useState } from 'react';
import searchIcon from "./assets/images/search.svg";
import cldIcon from "./assets/images/cloudy.png";
import clrIcon from "./assets/images/clear.png";
import drizIcon from "./assets/images/drizzle.png";
import hIcon from "./assets/images/humid-img.svg";
import rainIcon from "./assets/images/rain.png";
import mistIcon from "./assets/images/mist.png";
import wIcon from "./assets/images/wind-1.svg";
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState({
        cel: null,
        name: '',
        humid: null,
        speed: null,
        image: cldIcon
    })
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const handleClick = () => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=06623ed5b9eba16c52104be9af844218&&units=metric`;
        axios.get(apiUrl)
            .then(res => {
                let imgPath = '';
                if (res.data.weather[0].main === 'Clouds') {
                    imgPath = cldIcon;
                }
                else if (res.data.weather[0].main === 'Clear') {
                    imgPath = clrIcon;
                }
                else if (res.data.weather[0].main === 'Rain') {
                    imgPath = rainIcon;
                }
                else if (res.data.weather[0].main === 'Drizzle') {
                    imgPath = drizIcon;
                }
                else if (res.data.weather[0].main === 'Mist') {
                    imgPath = mistIcon;
                }
                else {
                    imgPath = ''
                }
                setData({ ...data, cel: res.data.main.temp, name: res.data.name, humid: res.data.main.humidity, speed: res.data.wind.speed, image: imgPath });
                console.log(res.data.weather[0], imgPath)
            })
            .catch(err => {
                setError('Invalid city name')
            });
    }
    return (
        <div className='container'>
            <div className="search">
                <input type='text' placeholder='Enter City Name' onChange={(e) => setName(e.target.value)} />
                <button className='btn' onClick={handleClick}>
                    <img src={searchIcon} />
                </button>
            </div>
            <p className='err-msg'>{error}</p>
            <div className="weather-info">
                <img src={data.image} alt='cloud-icon' className='cld-img' />
                <div className="temp">
                    <h2>{data.cel}°C</h2>
                    <h2>{data.name}</h2>
                </div>
                <div className="h-wind">
                    <div className="col">
                        <div className='col-img'>
                            <img src={hIcon} />
                        </div>
                        <div className='col-txt'>
                            <span>{data.humid}%</span>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className='col-img'>
                            <img src={wIcon} />
                        </div>

                        <div className='col-txt'>
                            <span>{data.speed} Km/hr</span>
                            <span>Wind</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home