import React from 'react';

import menu from '../data/restaurantMenu.js';

const MenuCourses = () => {
    return (
        <div>
            {menu.map((course) => {
                return (
                    <div className='menu-category-container'>
                        <div className='menu-category-title'>{course.course}</div>
                        <div className='menu-food-items'>
                            {course.items.map((food) => {
                                return (
                                  <div className={course.items.length > 1 ? 'menu-food-container menu-food-container-half' : 'menu-food-container menu-food-container-full'}>
                                    {food.image && <img src={food.image} className='menu-food-img'  />}
                                    <div className='menu-food-info'>
                                      <div className='menu-food-top'>
                                        <div className='menu-food-title'>{food.name}</div>
                                        <div className='menu-food-price'>${food.price}</div>
                                      </div>
                                      <div className='menu-food-description'>{food.description}</div>
                                    </div>
                                  </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MenuCourses;
