import React, { Suspense} from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // const [allbooks, setAllbooks] = useState([]);
    // 1 way to fetch data
    // useEffect( ()=>{

    //     fetch("booksData.json").then(res => res.json())
    //     .then( data => {
    //         console.log(data);
    //         setAllbooks(data)
    //     })
    // },[])

    // 2 way to fetch data
    // const bookPromise = fetch('./booksData.json').then( res => res.json())

    //3 way is in router.jsx (loader)




    return (
        <div>
            <h1 className='text-4xl text-center p-6'>Books</h1>
            
            <Suspense fallback={<span>Loading.....</span>}>
                    <div className='grid grid-cols-3 gap-10'>
                    {
                        data.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                    </div>
            </Suspense>
            
        </div>
    );
};

export default Books;