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
                                return <div className={course.items.length > 1 ? 'menu-food-container-half' : 'menu-food-container-full'}>{food.name}</div>;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MenuCourses;
