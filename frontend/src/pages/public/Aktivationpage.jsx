import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Simulasi pemanggilan API
      const response = await fetch('/api/activate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // tambahkan data lain jika diperlukan
        }),
      });

      if (!response.ok) {
        throw new Error('Aktivasi gagal, silakan coba lagi.');
      }

      const data = await response.json();
      console.log('Activation successful:', data);

      // Arahkan pengguna ke halaman berikutnya
      navigate('/welcome'); // Ganti dengan rute tujuan
    } catch (error) {
      console.error('Error during activation:', error);
      setErrorMessage(error.message || 'Terjadi kesalahan.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="activation-page">
      <h1>Aktivasi Akun</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Aktivasi'}
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ActivationPage;
