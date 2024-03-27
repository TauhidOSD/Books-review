import React from 'react';
import Banner from '../../Banner/Banner';
import BooksTile from '../../BooksTitle/BooksTile';
import BooksCard from '../../BooksCard/BooksCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BooksTile></BooksTile>
            <BooksCard></BooksCard>
            
        </div>
    );
};

export default Home;