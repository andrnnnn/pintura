import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Img from '../../assets/public/imgregisterpage.svg';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset error message
    setError('');

    // Validate password
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const userData = {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      password,
    };

    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save email for verification page
        localStorage.setItem('verificationEmail', email);

        // Simulating response with token on successful registration
        const { token } = data;  // Assuming your backend returns the token on successful registration
        if (token) {
          localStorage.setItem('token', token);  // Save the token in localStorage
        }

        // Send OTP code
        await fetch('/api/auth/send-verification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        navigate('/VerificationPage');
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setError('A server error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
      <div className="flex w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Ilustrasi pendaftaran"
            className="w-3/4 md:w-full"
            height="400"
            width="400"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">Register</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-600">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-600">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-600">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Register'}
              </button>
            </div>
          </form>
          <div className="text-center">
            <Link to="/login" className="text-blue-600 hover:text-blue-800">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
