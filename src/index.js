import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from "./books";
import Book from "./Book";
// const author='Victor E. Frankl';
// const title="Man's Search For Meaning";
// const img="./images/book1.jpg";

const BookList = () =>{
    return (
        <>
            <h1>Amazon best sellers</h1>
            <section className="booklist">     
                {books.map((book,index)=>{
                    return (
                        <Book {...book}
                        key={book.id} number={index} />
                    );
                })}
                
            </section>
        </>
    );
}



const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
