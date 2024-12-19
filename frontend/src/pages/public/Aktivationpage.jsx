import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const activationToken = localStorage.getItem('activationToken'); // Get token (if required)

  useEffect(() => {
    // Check if the user is properly redirected from the verification page
    if (!localStorage.getItem('verificationEmail')) {
      navigate('/verification'); // If no email is found, redirect back to verification
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const email = localStorage.getItem('verificationEmail'); // Get the email

    if (!email) {
      setErrorMessage('Email is missing');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/activate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Clear the email from localStorage after successful activation
        localStorage.removeItem('verificationEmail');
        navigate('/dashboard/home'); // Redirect to Dashboard after successful activation
      } else {
        setErrorMessage(data.message || 'Activation failed');
      }
    } catch (error) {
      setErrorMessage('Error occurred during activation');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Account Activation</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Activating...' : 'Activate Account'}
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ActivationPage;
