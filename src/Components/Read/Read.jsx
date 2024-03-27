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
                    <div className="hero  bg-base-200 my-4 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                ))





            }


        </div>






    );
};

export default Read;