import React from 'react';

import '../styles/Header.css';

import info from '../data/restaurantInfo.js';
import Burger from '../assets/burger.jpg';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header-content'>
                    <div className='header-content-left'>
                        <img src={Burger} />
                        <div className='header-content-left-container'>
                            <div className='header-content-top'>{info.name}</div>
                            <div className='header-content-bottom'>
                              <div className='address'><LocationOnIcon className='icon' />{info.location.map((location) => <>{location.street}, {location.city}, {location.state}</>)}</div>
                              <div className='info'>
                                <StarRateIcon className='icon' />
                                {info.rating} Stars
                                <FastfoodIcon className='icon' />
                                {info.cuisine.join(', ')}
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className='header-content-right'>
                      <button><DirectionsIcon className='icon' />Directions</button>
                      <button><PhoneIphoneIcon className='icon' />Call</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
