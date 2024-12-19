import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgActivationPage.svg';

const ActivationPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();
  const email = localStorage.getItem('verificationEmail'); // Assuming email is stored in localStorage

  useEffect(() => {
    // Check if token already exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/dashboard/home'); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    console.log('Submitting code for email:', email);

    if (!email) {
      setError('Email not found. Please try again.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/activation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          code: verificationCode,
        }),
      });

      const data = await response.json();
      console.log('Verification response:', data);

      if (response.ok) {
        const { token } = data;
        if (token) {
          localStorage.setItem('token', token); // Store token in localStorage
        }

        localStorage.removeItem('verificationEmail'); // Remove email from localStorage
        setIsLoggedIn(true);
        navigate('/dashboard/home');
      } else {
        setError(data.message || 'Invalid verification code');
        setCode(['', '', '', '', '', '']);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setError('An error occurred during verification');
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
            <i className="fas fa-arrow-left mr-2"></i>Back
          </Link>

          <h1 className="text-4xl font-bold text-blue-700 mb-2">Activate Account</h1>
          <p className="text-gray-600 mb-6">
            Please enter the activation code we sent to {email}.
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <div className="flex">
                <i className="fas fa-exclamation-circle mt-1 mr-2"></i>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    type="text"
                    name={`code-${index}`}
                    maxLength="1"
                    className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1"
                    value={code[index]}
                    onChange={(e) => handleInput(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-center mb-4">
                Please enter the activation code sent to your email.
              </p>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Activate Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
