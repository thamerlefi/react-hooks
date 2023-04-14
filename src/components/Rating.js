import React from 'react'

export default function Rating({movies}) {
  return (
    <div className='rating'>
        {/*------------------- first star */}
        {movies.rating < 1 ? 
            <i className="fa-regular fa-star"></i>: // empty star
         movies.rating < 2 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  // half star
            <i className="fa-solid fa-star"></i>   // full star
        }
        {/*------------------- second star */}
        {movies.rating < 3 ? 
            <i className="fa-regular fa-star"></i>:
         movies.rating < 4 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i className="fa-solid fa-star"></i>   
        }
        {movies.rating < 5 ? 
            <i className="fa-regular fa-star"></i>:
         movies.rating < 6 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i className="fa-solid fa-star"></i>   
        }
        {movies.rating < 7 ? 
            <i className="fa-regular fa-star"></i>:
         movies.rating < 8 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i
             className="fa-solid fa-star"></i>   
        }
        {movies.rating < 9 ? 
            <i className="fa-regular fa-star"></i>:
         movies.rating < 10 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i className="fa-solid fa-star"></i>   
        }
        <span className='mx-3'>{movies.rating}/10</span>
      
    </div>
  )
}
