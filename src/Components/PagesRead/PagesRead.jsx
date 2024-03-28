


import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagesRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Assuming you have fetched the read-listed books data from an API endpoint or stored it locally
    // Here, I'm using a sample array of books for demonstration purposes
    const readListedBooks = [
      { bookName: 'The Great Gatsby', totalPages: 180 },
      { bookName: 'To Kill a Mockingbird', totalPages: 281 },
      { bookName: 'Al-Quran', totalPages: 328 },
      { bookName: 'The Catcher in the Rye', totalPages: 224},
      { bookName: 'Pride and Prejudice', totalPages: 279 },
      { bookName: 'The Hobbit', totalPages: 310 },
    ];

    setBooks(readListedBooks);
  }, []);

  return (
    <div className="w-full lg:w-3/4 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pages to Read</h2>
      <BarChart
        width={1200}
        height={400}
        data={books}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalPages" fill={colors[0]} shape={<CustomBarShape />} /> {/* Using the first color from the colors array */}
      </BarChart>
    </div>
  );
};

// Define custom shape for Bar
const CustomBarShape = (props) => {
  const { fill, x, y, width, height } = props;

  // Define custom shape using SVG path
  const getPath = () => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y +
      height / 3} ${x + width / 2}, ${y}C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y +
      height} ${x + width}, ${y + height}Z`;
  };

  return <path d={getPath()} stroke="none" fill={fill} />;
};

export default PagesRead;
