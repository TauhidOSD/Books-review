import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
//     const links = <>
//     <li><NavLink to="/list"></NavLink></li>
    

// </>

    return (
        <div class="hero min-h-screen bg-gray-400 mt-6 ">
        <div class="hero-content flex-col lg:flex-row-reverse gap-x-52 ">
          <img src="https://i.postimg.cc/qqHPT0SZ/pngwing-1.png" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold text-gray-950">Books to freshen up <br /> your bookshelf</h1>
           
            <NavLink to="/listed"> <button class="btn bg-[#23BE0AFF] mt-12 ">View The List</button></NavLink>
           
          </div>
        </div>
      </div>
);
    };
    
    


export default Banner;