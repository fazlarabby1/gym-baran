import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/assets/banner-image.png';
import { FaGreaterThan, FaPlayCircle } from 'react-icons/fa';
import nick from '../public/assets/brands/nick.png';
import adidas from '../public/assets/brands/adidas.png';
import puma from '../public/assets/brands/puma.png';
import reebok from '../public/assets/brands/reebok.png';

const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-fuchsia-100 to-fuchsia-0 py-6 px-10 text-black'>

            <div className='bg-transparent flex flex-col md:flex-row justify-between items-center'>
                <div className='bg-transparent'>
                    <h1 className='bg-transparent text-2xl md:text-5xl font-bold tracking-widest'>Healthy in side <br /> <span className='bg-transparent text-violet-400'>fresh</span> out side</h1>
                    <p className='bg-transparent opacity-60 lg:w-[492px] mt-6 text-xs md:text-base'>
                        Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
                    </p>
                    <div className='bg-transparent flex mt-6'>
                        <button className='bg-indigo-900 text-white rounded flex items-center justify-around w-32 md:w-40 py-2'>Get Started<FaGreaterThan className='border rounded-full text-xl bg-white text-indigo-900' /></button>

                        <button className='text-indigo-900 bg-white rounded flex items-center justify-around w-32 md:w-40 py-2 ml-9'><FaPlayCircle className='border rounded-full text-xl text-indigo-900' />Learn More</button>
                    </div>
                    <p className='mt-12 bg-transparent'>Brands:</p>
                    <div className='flex flex-wrap items-center bg-transparent mt-7'>
                    <Image className='w-20 mt-3 md:mt-0 ml-12 bg-transparent' src={nick} alt='' />
                    <Image className='w-20 ml-12 mt-3 md:mt-0 bg-transparent' src={adidas} alt='' />
                    <Image className='w-20 ml-12 mt-3 md:mt-0 bg-transparent' src={puma} alt='' />
                    <Image className='w-20 ml-12 mt-3 md:mt-0 bg-transparent' src={reebok} alt='' />
                    </div>
                </div>
                <div className='mt-16 bg-transparent w-[209.86px] h-[340px] md:h-[580px] md:w-[385px]'>
                    <Image src={bannerImg} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;