import React from 'react';
import Read from '../../Read/Read';
import Wish from '../../Wish/Wish';

const ListedBooks = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1 " checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"> 
                <Read></Read>
                
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    <Wish></Wish>
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;