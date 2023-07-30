import React from 'react';
import {TiLocationOutline} from 'react-icons/ti'
const Working = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-fit border border-white py-20 '>
            <p  className='text-2xl mb-4 text-sky-100'>How it Works</p>
            <span className='text-4xl mb-8 text-sky-100'>Our Working Steps</span>
            {/*<TfiLocationPin></TfiLocationPin>*/}
            {/*<div>*/}
            {/*    {*/}
            <div className='flex flex-row justify-center space-x-4 items-center w-full'>
                <div className="flex flex-col justify-center items-center border border-sky-200/60 px-2 py-4 w-[450px] rounded-[7%]">
                    <TiLocationOutline className='p-8 bg-slate-900 text-white/80 rounded-full h-32 w-32 mb-8'/>
                    <span className='text-white/80 text-2xl text-center'>Choose Location</span>
                    <span className='text-white/60 text-xl text-center my-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda ducimus illum minima officiis repudiandae tempora voluptas.
                </span>
                </div>
                <div className="flex flex-col justify-center items-center border border-sky-200/60 px-2 py-4 w-[450px] rounded-[7%]">
                    <TiLocationOutline className='p-8 bg-slate-900 text-white/80 rounded-full h-32 w-32 mb-8'/>
                    <span className='text-white/80 text-2xl text-center'>Choose Location</span>
                    <span className='text-white/60 text-xl text-center my-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda ducimus illum minima officiis repudiandae tempora voluptas.
                </span>
                </div>
                <div className="flex flex-col justify-center items-center border border-sky-200/60 px-2 py-4 w-[450px] rounded-[7%]">
                    <TiLocationOutline className='p-8 bg-slate-900 text-white/80 rounded-full h-32 w-32 mb-8'/>
                    <span className='text-white/80 text-2xl text-center'>Choose Location</span>
                    <span className='text-white/60 text-xl text-center my-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda ducimus illum minima officiis repudiandae tempora voluptas.
                </span>
                </div>
            </div>
            {/*    }*/}
            {/*</div>*/}

        </div>
    );
};

export default Working;
