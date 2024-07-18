import React from 'react';
import searchIcon from "./assets/images/search.svg";

const Home = () => {
    return (
        <div className='container'>
            <div className="search">
                <input type='text' placeholder='Enter City Name' />
                <button className='btn'>
                    <img src={searchIcon} />
                </button>
            </div>
        </div>
    )
}

export default Home