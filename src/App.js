import React from 'react';
import Working from './Working';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";

const App = () => {
    return (
        <div className=' w-full flex flex-col justify-center items-center overflow-y-scroll bg-slate-800 relative'>
            <Navbar/>
            <Working/>
            {/*<Footer/>*/}
            <Cards/>
        </div>
    );
};

export default App;
