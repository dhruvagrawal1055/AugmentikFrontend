import React from 'react';

const Navbar = () => {
    const links=[
        {text: 'Rent',Link: '#'},{text: 'Share',Link: '#'},{text: 'Ride',Link: '#'},{text: 'Service',Link: '#'},{text: 'Contact',Link: '#'}
    ]
    return (
        <nav className='flex flex-row  justify-center items-center absolute top-0 w-[80%] mx-auto px-4 py-3 text-white'>
            <div className=''>Logo</div>
            <div className='flex flex-row justify-center  align-top w-full items-center text-xl space-x-4  pl-52'>
                {
                    links.map((link,index)=>{
                        return (
                            <a href={link.Link}>{link.text}</a>
                        )
                    })
                }
            </div>
            <div className='flex flex-row justify-between items-center text-xl text-white/90'>
                <a href="#" className='px-8 pt-1 pb-2 '>Login</a>
                <a href="#" className='px-8 pt-1 pb-2 bg-slate-700 rounded-xl flex justify-center items-center '>SignUp</a>
            </div>
        </nav>
    );
};

export default Navbar;
