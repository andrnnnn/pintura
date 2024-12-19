import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        // Simulate API call for account activation
        const response = await fetch('/api/activate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ action: 'activate' }), // Example payload
        });

        if (!response.ok) {
          throw new Error(`Activation failed: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.success) {
          // Redirect to dashboard or login page after successful activation
          navigate('/dashboard');
        } else {
          throw new Error(data.message || 'Activation unsuccessful');
        }
      } catch (error) {
        console.error('Error during account activation:', error);
        // Optionally, redirect to an error page or show a message
        navigate('/error');
      }
    };

    activateAccount();
  }, [navigate]);

  return (
    <div>
      <h1>Activating your account...</h1>
      <p>Please wait a moment while we complete the process.</p>
    </div>
  );
};

export default ActivationPage;
