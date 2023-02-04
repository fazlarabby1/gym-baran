import React from 'react';
import Image from 'next/image';
import fullBody from '../public/assets/fullbody.png';
import { FaArrowRight } from 'react-icons/fa';

const FullBody = () => {
    return (
        <div className='my-10 md:mt-28 px-5 flex flex-col-reverse md:flex-row justify-between items-center lg:px-44'>
            <Image className='mt-14 md:mt-0 w-[230px] h-[290px] md:w-[390px] md:h-[400px]' src={fullBody} alt='' />
            <div>
                <h1 className='text-3xl md:text-5xl font-bold tracking-widest'>Best full body <br /> workout to lose fat</h1>
                <p className='opacity-60 lg:w-[600px] mt-6 text-xs md:text-base'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <button className='bg-indigo-900 text-white rounded flex items-center justify-around w-32 md:w-40 py-2 mt-12'>Get Started<FaArrowRight className='text-xl text-white' /></button>
            </div>
        </div>
    );
};

export default FullBody;