import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({books}) => {
    console.log(books);
    
    return (
      <div>
        <Link to={`/${books.bookId}`}>

        <article className="flex flex-col border-2 rounded-xl transition border-2 hover:scale-105 border-primary  hover:border-secondar border-opacity-30">
        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum ">
            <img alt="" className="object-cover w-1/2 h-52 bg-gray-500 mx-auto mt-4 rounded-xl" src={books.image} />
        </a>
        <div className="flex flex-col flex-1 p-6">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
            <div className="flex justify-between">
            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#23BE0A] bg-[#23BE0A0D] p-2 px-4 rounded-xl">{books.bookName}</a>
            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#23BE0A] bg-[#23BE0A0D] p-2 px-4 rounded-xl">{books.publisher}</a>

            </div>
            
            
            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{books.review}</h3>
            <h2>By: {books.author}</h2>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                
                <h2 className='text-xl font-semibold'>{books.category}</h2>
              <div className='flex gap-3' >  <span className='text-xl'>{books.rating}</span>
              <img src="https://i.postimg.cc/3RgZHn42/Frame.png" alt="" />
              </div>
                
            </div>
        </div>
    </article> 
        </Link>
         
      </div>
    );
};

export default Cards;