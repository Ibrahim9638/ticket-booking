// import React, { useEffect, useState } from 'react';
// import SinlgeMovie from '../SinlgeMovie/SinlgeMovie';

// const MovieCart = ({handleWatchTime}) => {
//     const [movieContent, setMovieContent] = useState([]);
//     useEffect(()=>{
//         fetch('/data.json')
//         .then(res=>res.json())
//         .then(data=>setMovieContent(data))
//     },[])
//     return (
//         <div className='grid grid-cols-2 gap-5'>
//             {
//                 movieContent.map(movie=><SinlgeMovie key={movie.id} movie={movie} handleWatchTime={handleWatchTime}></SinlgeMovie>)
//             }
//         </div>
//     );
// };

// export default MovieCart;