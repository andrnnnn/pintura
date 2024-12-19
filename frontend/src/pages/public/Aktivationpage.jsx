import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgActivationPage.svg';

const ActivationPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Mengecek apakah token sudah ada di localStorage, yang menandakan bahwa pengguna sudah login
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/dashboard/home'); // Arahkan ke dashboard jika sudah login
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di frontend, token seharusnya sudah ada, jadi kita simulasikan penyimpanan token ke localStorage
    localStorage.setItem('token', 'j2h4k2j4h2k4h32k4h32k4h32k4h32k4h32k'); // Simulasi token yang diterima dari backend
    navigate('/dashboard/home');
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
      <div className="flex w-full max-w-4xl">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Ilustrasi seseorang memegang trofi dengan berbagai ikon di sekitarnya"
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
            <i className="fas fa-arrow-left mr-2"></i> Kembali
          </Link>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Aktivasi Berhasil</h1>
          <p className="text-lg text-gray-600 mb-6">Akun Anda telah berhasil diaktifkan. Anda sekarang dapat melanjutkan ke dashboard.</p>
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Ke Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
