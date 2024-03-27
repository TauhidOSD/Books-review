import React, { useEffect, useState } from 'react';

const Read = () => {
    const [Read, setRead] = useState([]);
    // const [noFound, setNofound] = useState(false);
    // const [isShow, setIsShow] = useState(false)

    // const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const ReadItems = JSON.parse(localStorage.getItem("Read"));

        if (ReadItems) {
            setRead(ReadItems);

            // const total = ReadItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

            // console.log(total);

            // setTotalPrice(total)


        } else {
            // setNofound("No Data Found");
        }
    }, []);
    console.log(Read)

    return (


        <div>


            {
                Read.map((data) => (
                    <div className="hero  bg-base-200 my-4 rounded-3xl ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='space-y-4'>
                                <h1 className="text-5xl font-bold text-black">{data.bookName}</h1>
                                <p className="py-6"><span className='font-bold'>By</span> : {data.author}</p>

                                <div className='flex justify-between gap-x-6'>
                                    <h1 className='text-black font-bold'>Tag</h1>
                                    <h1>#Young Adult</h1>
                                    <h1>#Identity</h1>
                                    <div className='flex gap-3'> 
                                        <img src="https://i.postimg.cc/B6634wgR/Frame-1.png" alt="" />
                                        <h1 ><span className='font-bold'>Year of Publishing: </span>{data.yearOfPublishing} </h1>
                                    </div>
                                    
                                </div>
                                <div className='flex space-x-12'>
                                        <div className='flex gap-x-3'>
                                            <img src="https://i.postimg.cc/8Py0VP3k/Vector.png" alt="" />
                                            
                                            <h1><span className='font-bold' >Publisher : </span>{data.publisher}</h1>
                                        </div>
                                        <div className='flex gap-x-3'>
                                            <img src="https://i.postimg.cc/fT09M8q3/Frame-2.png" alt="" />
                                            <h1><span className='font-bold'>Page:</span> {data.totalPages}</h1>
                                        </div>
                                    </div>
                                <div className='flex justify-around'>
                               <button className="btn bg-cyan-200">{data.category}</button>
                               <button className="btn bg-orange-200">{data.rating}</button>
                               <button className="btn bg-green-300">View Details</button>
                               </div>
                            </div>
                        </div>
                    </div>

                ))





            }


        </div>






    );
};

export default Read;