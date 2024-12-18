import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Logo from '/logo/logo.png';

const Learningquiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(0); 
  const [timeElapsed, setTimeElapsed] = useState(0); 
  const [showConfirmation, setShowConfirmation] = useState(false); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('/api/auth/quiz/1'); 
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();

    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNextClick = () => {
    if (activeQuestion < quizData.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setShowConfirmation(true);
    }
  };

  const handleQuestionClick = (questionIndex) => {
    setActiveQuestion(questionIndex);
  };

  const handleCancel = () => setShowConfirmation(false);

  const handleContinue = () => {
    setShowConfirmation(false);
    navigate('/dashboard/mycourses/learningafterquiz');
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  const { material, questions } = quizData;
  const currentQuestion = questions[activeQuestion];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow p-4 flex flex-col items-center">
        <div className="flex justify-center w-full mb-4">
          <img src={Logo} alt="PINTUR Logo" className="h-16 w-16 object-contain" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-500">
            Home &gt; My Courses &gt; {material.title}
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700" onClick={() => navigate('/dashboard/workshop/learningstartquiz')}>
              &lt; Previous
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Next &gt;
            </a>
          </nav>
        </div>
      </header>
      <main className="flex flex-1">
      <aside className="w-1/4 bg-white p-4 shadow">
  <div className="grid grid-cols-5 gap-4 max-w-md mx-auto">
    {questions.map((_, index) => (
      <button
        key={index}
        onClick={() => handleQuestionClick(index)}
        className={`w-12 h-12 flex items-center justify-center rounded-full text-sm font-medium shadow-md transition-all duration-200 
          ${activeQuestion === index 
            ? 'bg-blue-600 text-white ring-2 ring-blue-400' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        {index + 1}
      </button>
    ))}
  </div>
</aside>

        <section className="flex-1 bg-white p-8 shadow">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">{material.title}</h1>
            <div className="text-lg font-semibold text-gray-700">{formatTime(timeElapsed)}</div>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">{currentQuestion.question_text}</h2>
            <ul>
              {currentQuestion.options.map((option) => (
                <li key={option.option_id} className="mb-2">
                  <label className="flex items-center text-black">
                    <input
                      type="radio"
                      name={`question-${currentQuestion.question_id}`}
                      className="mr-2"
                    />
                    {option.option_text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
              onClick={() => setActiveQuestion((prev) => Math.max(prev - 1, 0))}
            >
              &lt; Previous
            </button>
            <button
              onClick={handleNextClick}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              {activeQuestion < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </section>
      </main>
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-md w-full">
            <h2 className="text-lg font-semibold text-gray-800">Are you sure you want to end this quiz?</h2>
            <div className="flex justify-end space-x-4 mt-4">
              <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Cancel</button>
              <button onClick={handleContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learningquiz;
