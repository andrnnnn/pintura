import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgVerificationCode2.svg';

const VerificationCodePage = () => {
    const navigate = useNavigate();
    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem('verificationEmail');
        if (savedEmail) {
            setEmail(savedEmail);
            console.log('Email from localStorage:', savedEmail);
        } else {
            console.log('No email found in localStorage');
            navigate('/register'); // Redirect if email isn't in localStorage
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join('');  // Convert the array to a string
        console.log('Submitting code for email:', email);
    
        setLoading(true);
        setError('');
    
        try {
            const response = await fetch('/api/auth/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    code: verificationCode
                }),
            });
    
            const data = await response.json();
            console.log('Verification response:', data);
    
            if (response.ok) {
                // Save JWT token after successful verification
                const { token } = data;
                if (token) {
                    localStorage.setItem('token', token);  // Store token in localStorage
                    console.log('Token saved to localStorage:', token); // Debugging: make sure the token is stored
                }
    
                // Remove email from localStorage after verification
                localStorage.removeItem('verificationEmail');
    
                // Redirect to the next page (e.g., dashboard or activation page)
                navigate('/AktivationPage');
            } else {
                setError(data.message || 'Invalid verification code');
                setCode(['', '', '', '', '', '']); // Clear the code if invalid
            }
        } catch (error) {
            console.error('Verification error:', error);
            setError('An error occurred during verification');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e, index) => {
        const newCode = [...code];
        newCode[index] = e.target.value;
        setCode(newCode);

        // Move to the next input field when a digit is entered
        if (e.target.value.length === 1 && index < 5) {
            document.getElementById(`code-input-${index + 1}`).focus();
        }
    };

    return (
        <div className="verification-container">
            <img src={Img} alt="Verification" />
            <h1>Verify Your Email</h1>
            <form onSubmit={handleSubmit}>
                <div className="verification-inputs">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            id={`code-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify Code'}
                </button>
            </form>
            <p>
                <Link to="/register">Back to registration</Link>
            </p>
        </div>
    );
};

export default VerificationCodePage;
