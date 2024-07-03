import React from 'react';

const SinlgeMovie = ({movie, handleWatchTime}) => {
    const {movieName,watchTime,description,poster,imdbRating} = movie;
    return (
        <div className='border text-center rounded p-2'>
            <img className='w-52 h-52 mx-auto rounded' src={poster} alt="" />
            <h1 className='font-bold mb-2 mt-2'>{movieName}</h1>
            <p className='mt-2 mb-2'>{description}</p>
            <div className='flex justify-around'>
                <p>WatchTime: {watchTime}</p>
                <p>Rating: {imdbRating}</p>
            </div>
            <button className='btn btn-info mt-4 mb-4  md:flex-row' onClick={()=>handleWatchTime(watchTime)}>Book Now</button>
        </div>
    );
};

export default SinlgeMovie;