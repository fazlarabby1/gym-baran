import React from 'react';
import vector1 from '../public/assets/ExerciseIcon/Vector (1).png';
import vector2 from '../public/assets/ExerciseIcon/Vector (2).png';
import vector3 from '../public/assets/ExerciseIcon/Vector (3).png';
import ExerciseCard from './ExerciseCard';

const Exercise = () => {
    const exerciseData = [
        {
            id: 1,
            title: "Get that 11 line in 30 days",
            icon: vector1
        },
        {
            id: 2,
            title: "14 Days sherd challenge",
            icon: vector2
        },
        {
            id: 3,
            title: "Get flat belly in 30 days",
            icon: vector3
        }
    ]
    return (
        <div className='bg-gradient-to-r from-violet-700 to-violet-400 flex flex-col md:flex-row justify-between items-center mx-2 p-6 md:p-20 mt-16 md:mt-20 rounded-lg'>
            {
                exerciseData.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>)
            }
        </div>
    );
};

export default Exercise;