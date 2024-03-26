import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";


const BooksCard = () => {
const [books,setBooks]=useState([]);
useEffect(() =>{
    fetch("./Books.json")
    .then(res => res.json())
    .then(data =>setBooks(data));
   
},[])

    return (
        <section className="">
        <div className="container p-6 mx-auto space-y-8">
            
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {books.map(pd=><Cards books={pd} ></Cards>)}
               
               
              
            </div>
        </div>
    </section>
    );
};

export default BooksCard;