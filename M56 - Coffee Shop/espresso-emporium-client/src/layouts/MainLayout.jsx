import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Form from '../Components/Form';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
           <div className='max-w-7xl mx-auto'>
             <Outlet></Outlet>
           </div>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;