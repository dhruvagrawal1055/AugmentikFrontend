import React, {useEffect, useState} from 'react';
import { AiFillCar } from 'react-icons/ai';
import axios from 'axios';
const Card = (prop) => {
    const props=prop;

    return (
        <div className='bg-slate-800 rounded-xl flex flex-col justify-start items-center overflow-hidden w-[450px] text-white/80 my-4'>
            <div className='basis-1/2'>
                <img src="https://picsum.photos/450" alt=""/>
            </div>
            <div className='flex justify-center items-center text-xl w-full my-1' >—— {props.name} ——</div>
            <div className='py-4 flex justify-center items-center text-2xl w-full bg-slate-900'>Starting at ${props.cost} / Day</div>
            <div className='flex flex-row flex-wrap justify-between items-stretch pl-8'>
                <span className='flex flex-row justify-start space-x-2 my-1 items-center basis-1/2 px-2'>
                    <AiFillCar className='h-12 w-12'/>
                    <p>{props.type}</p>
                </span>
                <span className='flex flex-row justify-start space-x-2 my-1 items-center basis-1/2 px-2'>
                    <AiFillCar className='h-12 w-12'/>
                    <p>{props.noOfSeats} Seats</p>
                </span>
                <span className='flex flex-row justify-start space-x-2 my-1 items-center basis-1/2 px-2'>
                    <AiFillCar className='h-12 w-12'/>
                    <p>{props.noOfDoors} Doors</p>
                </span>
                <span className='flex flex-row justify-start space-x-2 my-1 items-center basis-1/2 px-2'>
                    <AiFillCar className='h-12 w-12'/>
                    <p>AC / Heater</p>
                </span>

            </div>
            <div className='w-full border-2 border-sky-100/40 rounded-b-xl flex justify-center items-center mt-2'>
                <a href="#" className='text-2xl basis-1/2 border-2 border-x-sky-100/20 w-full text-center py-2 rounded-bl-xl'>Details</a>
                <a href="#" className='text-2xl basis-1/2 border-2 border-x-sky-100/20 w-full text-center py-2 bg-slate-900 rounded-br-xl'>Book</a>
            </div>
        </div>
    );
};

export default Card;
