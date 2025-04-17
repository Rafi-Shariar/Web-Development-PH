import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  // const book = use(bookPromise);
  const { bookName, image, author, publisher, yearOfPublishing, tags,bookId} = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="border p-2 rounded-2xl">
        <div className="card bg-base-100  shadow-sm">
          <figure className="bg-slate-200 p-4">
            <img src={image} alt="Shoes" className="w-4/12" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Author : {author}</p>
            <div className="card-actions ">
              <div className="badge badge-outline">{publisher}</div>
              <div className="badge badge-outline">{yearOfPublishing}</div>
            </div>
            <div>
              {tags.map((tag) => (
                <button className="btn mt-5 bg-slate-50 text-black mr-10">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
