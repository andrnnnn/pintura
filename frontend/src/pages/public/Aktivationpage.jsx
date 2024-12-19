import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgActivationPage.svg';

const ActivationPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/dashboard/home');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setOtp(sanitizedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setErrorMessage('OTP is required');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/auth/activation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard/home');
      } else {
        setErrorMessage(data.message || 'An error occurred during activation');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('A server error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
      <div className="flex w-full max-w-4xl">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Illustration of a person holding a trophy with various icons around"
            className="w-3/4 md:w-full"
            height="400"
            width="400"
          />
        </div>

        {/* Bagian Konten */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <Link
            to="/"
            className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back
          </Link>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Activation Success</h1>
          <p className="text-gray-600 mb-6">
            Congratulations! Your account has been successfully activated. You are now logged in and can access your dashboard.
          </p>
          
          {/* Formulir dan tombol */}
          {!isLoggedIn && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <input
                  type="text"
                  value={otp}
                  onChange={handleInputChange}
                  placeholder="Enter OTP"
                  className="w-full p-2 mb-4 border rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Go to Dashboard'}
                </button>
                {errorMessage && (
                  <p className="text-red-600 mt-4">{errorMessage}</p>
                )}
                <p className="text-center text-gray-600 mt-4">
                  Need help? <a href="#" className="text-blue-600">Contact Support</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
