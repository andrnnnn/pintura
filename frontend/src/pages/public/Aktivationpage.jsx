import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgActivationPage.svg';

const ActivationPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token already exists in localStorage, meaning user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/dashboard/home'); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Make an API call to get the token
    try {
      const response = await fetch('/api/auth/activation'); // Replace with actual endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Get response data
      if (data.token) {
        localStorage.setItem('token', data.token); // Store token in localStorage
        navigate('/dashboard/home');
      } else {
        console.error('No token found in response');
      }
    } catch (error) {
      console.error('Error during the API call:', error);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
      <div className="flex w-full max-w-4xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Illustration of a person holding a trophy with various icons around"
            className="w-3/4 md:w-full"
            height="400"
            width="400"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <Link
            to="/"
            className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back
          </Link>

          <h1 className="text-4xl font-bold text-blue-700 mb-2">Activation Page</h1>
          <p className="text-gray-700 mb-4">Please click below to activate your account.</p>

          {/* Activation Form */}
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Activate Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
