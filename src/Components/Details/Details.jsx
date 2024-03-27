import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";


const Details = ({ }) => {
    const [data, setData] = useState({})

    const { bookId } = useParams();

    const details = useLoaderData();

    useEffect(() => {
        const findCart = details?.find((item) => item.bookId === bookId);

        setData(findCart);
    }, [bookId, details]);
    // console.log(bookId);



    const handleAddToRead = () => {
        const addedToReadArray = [];

        const ReadItem = JSON.parse(localStorage.getItem("Read"));


        if (!ReadItem) {
            addedToReadArray.push(data);
            localStorage.setItem("Read", JSON.stringify(addedToReadArray));
            toast.success("Submitted")
        }

        else {


            const isExits = ReadItem.find((data) => data.bookId === bookId);


            if (!isExits) {

                addedToReadArray.push(...ReadItem, data);
                localStorage.setItem("Read", JSON.stringify(addedToReadArray));

                toast.success("Add to Read List")

            } else {

                toast.error("You already add in read List")

            }




        }




    };





    const handleAddToWish = () => {
        const addedToWishArray = [];

        const ReadItem = JSON.parse(localStorage.getItem("Wish"));


        if (!ReadItem) {
            addedToWishArray.push(data);
            localStorage.setItem("Wish", JSON.stringify(addedToWishArray));
            // toast.success("Submitted")
        }

        else {


            const isExits = ReadItem.find((data) => data.bookId === bookId);


            if (!isExits) {

                addedToWishArray.push(...ReadItem, data);
                localStorage.setItem("Wish", JSON.stringify(addedToWishArray));

                toast.success("Add to wish List")

            } else {

                toast.error("You already add in wish List")

            }




        }




    };




    return (

        <section className="bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={data.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-2xl font-bold leading-none sm:text-5xl">{data.bookName}
                        <h1 className="text-xl font-bold leading-none sm:text-xl mt-1">By : {data.author} </h1>

                        <h1 className="text-xl font-bold leading-none sm:text-xl mt-1">{data.category}</h1>

                    </h1>
                    <p className="mt-2  text-lg sm:mb-8"><span className="text-xl font-bold">Review :</span> {data.review}

                    </p>
                    <div className="flex justify-around ">
                        <a className="text-xl font-bold">Tag </a>

                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#23BE0A] bg-[#23BE0A0D] p-2 px-4 rounded-xl">{data.bookName}</a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-[#23BE0A] bg-[#23BE0A0D] p-2 px-4 rounded-xl">{data.publisher}</a>

                    </div>
                    <div className="mb-6">
                        <h1 className="mt-3 "><span className="text-xl font-bold" > Number of Pages :</span>  {data.totalPages}</h1>
                        <h1 className="mt-3 "><span className="text-xl font-bold" >Publisher:</span> Publisher : {data.publisher}</h1>
                        <h1 className="mt-3 "><span className="text-xl font-bold" >Year of Publishing :</span>  {data.yearOfPublishing}</h1>
                        <h1 className="mt-3 "><span className="text-xl font-bold" >Rating : </span> {data.rating}</h1>
                    </div>


                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button onClick={handleAddToRead}  rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Read</button>
                        <button onClick={handleAddToWish }  rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Wishlist</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;