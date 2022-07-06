import React from 'react';

import '../styles/Menu.css';

import menu from '../data/restaurantMenu.js';

import MenuCourses from './MenuCourses';

const Menu = () => {
  return (
    <div>
      <MenuCourses />
    </div>
  )
}

export default Menu;