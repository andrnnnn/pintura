import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgActivationPage.svg'; // Pastikan path gambar benar

const ActivationPage = () => {
  const [otp, setOtp] = useState(''); // Menyimpan OTP yang dimasukkan
  const [error, setError] = useState(''); // Menyimpan pesan error
  const [isSubmitting, setIsSubmitting] = useState(false); // Menyimpan status pengiriman form
  const navigate = useNavigate();

  useEffect(() => {
    // Periksa apakah token ada di localStorage, jika tidak, arahkan ke halaman login
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Jika token tidak ada, arahkan ke halaman login
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Kirim OTP ke server untuk validasi
      const response = await fetch('/api/auth/validate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('OTP validation successful:', data);
        // Simpan token ke localStorage setelah validasi OTP berhasil
        localStorage.setItem('token', data.token);
        // Redirect ke halaman dashboard setelah OTP valid
        navigate('/dashboard/home'); // Arahkan ke dashboard setelah OTP valid
      } else {
        // Tampilkan pesan error jika validasi OTP gagal
        setError(data.message || 'Failed to validate OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error validating OTP:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
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

          <h1 className="text-4xl font-bold text-blue-700 mb-4">Activate Your Account</h1>
          <p className="text-lg text-gray-600 mb-4">
            Please enter the OTP we sent to your email to activate your account.
          </p>

          {/* Form Input OTP */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              maxLength="6" // Max 6 digits for OTP
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit OTP'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
