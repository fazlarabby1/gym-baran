import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const ExerciseCard = ({ exercise }) => {
    const { title, icon } = exercise;
    return (
        <div className='flex items-center text-white mt-10 md:mt-0'>
            <div className='mr-2 p-2 bg-violet-400 rounded-lg'>
                <Image className='w-12' src={icon} alt='' />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className='flex items-center mt-1 md:mt-4'>Learn more <FaArrowRight className='ml-3' /></p>
            </div>
        </div>
    );
};

export default ExerciseCard;