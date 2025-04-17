import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utilities/AddtoDB";

const ReadList = () => {

    const [readList,setReadList] = useState([]);


    const data = useLoaderData();

    useEffect( ()=>{
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(book => parseInt(book));
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));

        setReadList(myReadList);
        console.log(readList);
        


    },[])
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I have Read</h2>
          <h1>Books Read : {readList.length}</h1>
        </TabPanel>
        <TabPanel>
          <h2>Books I want to read</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
