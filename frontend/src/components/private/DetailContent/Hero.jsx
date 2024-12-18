import React from 'react'
import {useLocation} from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  const course = location.state.course;
  
  if (!course) {
    return(
    <div className='p-8'>
      <h1 className='text-2xl font-semibold text-gray-700'>No course selected</h1>
    </div>
  );
  }

  const StarRating = ({ rating, totalReviews }) => {
    const fullStars = Math.floor(rating); // Jumlah bintang penuh
    const hasHalfStar = rating % 1 >= 0.5; // Cek apakah ada bintang setengah
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Sisanya untuk bintang kosong

    return (
        <div className="flex items-center mb-4">
          <div className="flex items-center text-yellow-500 mr-2">
            {/* Render bintang penuh */}
            {Array.from({ length: fullStars }).map((_, index) => (
              <i key={`full-${index}`} className="fas fa-star"></i>
            ))}
            {/* Render bintang setengah jika ada */}
            {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
            {/* Render bintang kosong */}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <i key={`empty-${index}`} className="far fa-star"></i>
            ))}
          </div>
          <p className="text-gray-600">
            ({rating}/5) 
          </p>
        </div>
      );
  
};
  return (
<div class="flex flex-col md:flex-row items-center justify-center p-4 bg-gray-100">
                    <div class="md:w-1/2 p-4">
                        <img src={course.image_url} alt={course.title} class="rounded-lg shadow-lg w-auto"/>
                    </div>
                    <div class="md:w-auto p-4">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="flex items-center mb-4">
                                <img src={course.image_url} alt="University of Indonesia logo" class="w-10 h-10 rounded-full mr-2"/>
                                <h2 class="text-gray-700 text-lg font-semibold">{course.institution}</h2>
                            </div>
                            <h1 class="text-3xl font-bold text-blue-900 mb-2">{course.title}</h1>
                            <p class="text-gray-600 mb-4">{course.description}</p>
                            <div class="flex items-center mb-4">
                                <StarRating rating={course.rating}  />
                            </div>
                            <div class="flex items-center">
                                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">Enroll Now</button>
                                <p class="text-gray-600">Using 5 Credits</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Hero
