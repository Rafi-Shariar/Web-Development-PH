import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked,setBookmarked] = useState([]);
  const handleBookMark = (blog) =>{
    setBookmarked([...bookmarked,blog]); 
  }

  const [readingCount,setReadingCount] = useState(0);
  const handleReadTime = (time,id) =>{
    const newtime = readingCount + time;
    setReadingCount(newtime);
    handleRemoveBookmark(id);
  }

  const handleRemoveBookmark = (id) =>{
    const remainingBookMark = bookmarked.filter((mark)=> mark.id !==id);
    setBookmarked(remainingBookMark);

  }



  return (
    <div className='bg-white min-h-screen text-black'>
      <Navbar></Navbar>


      <div className="main-container flex">
        
        <div className="left-container w-[70%] text-center">
          <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
        </div>

        <div className="right-container w-[30%] text-center mt-5 ">
           <h1>Reading Time : {readingCount}</h1>
           <h1>Bookmarked : {bookmarked.length}</h1>

           {
            bookmarked.map((marked) => <p className='p-5 bg-slate-200 m-5 rounded-2xl'>{marked.title}</p>)
           }
        </div>
      
      </div>
    </div>
  )
}

export default App
