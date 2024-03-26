import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 mt-6 ">
        <div class="hero-content flex-col lg:flex-row-reverse gap-x-40 ">
          <img src="https://i.postimg.cc/qqHPT0SZ/pngwing-1.png" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
            <button class="btn bg-[#23BE0AFF] mt-12 ">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;