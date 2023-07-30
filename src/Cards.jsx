import React, {useEffect, useState} from 'react';
import Card from './Card';
import axios from "axios";
const Cards = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        try{
            const response = axios.get('http://localhost:5000/car-model');
            if (response.status===200 ){
                setData(response)
            }
        }
        catch(error){

        }
    }, []);
    return (
        <div className='bg-slate-700 w-full flex flex-col flex-wrap justify-center items-center py-8 '>
            <p  className='text-2xl mb-4 text-sky-100'>Best Offer</p>
            <span className='text-4xl mb-8 text-sky-100'>Our Featured Cars</span>
            <div className='flex flex-row flex-wrap justify-evenly items-stretch w-full px-16 '>
                {data.map((item)=><Card prop={item}/>)}
            </div>

        </div>
    );
};

export default Cards;
