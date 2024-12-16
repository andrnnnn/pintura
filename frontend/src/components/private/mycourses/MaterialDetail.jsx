import { useState } from "react";

const MaterialDetail = ({ material }) => {
  const [error, setError] = useState(null);

  // Konversi Google Drive URL menjadi embed link
  const getEmbedContent = (content) => {
    console.log("Original content URL:", content);  // Debugging: Melihat URL asli
    
    const driveUrlPattern = /https:\/\/drive.google.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/;
    const match = content.match(driveUrlPattern);
    
    if (match) {
      const fileId = match[1];
      const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`; // URL unduhan
      console.log("Matched Google Drive URL, embed URL:", embedUrl);  // Debugging: Melihat URL yang diubah
      return { embedUrl, downloadUrl }; // Mengembalikan kedua URL
    }

    console.log("No match found, returning content as is:", content);  // Debugging: Jika URL bukan Google Drive
    return { embedUrl: content, downloadUrl: content }; // Jika bukan link Google Drive, gunakan apa adanya
  };

  const { embedUrl, downloadUrl } = getEmbedContent(material.content);
  const handleCommentClick = () => {
    navigate("/dashboard/mycourses/learningsectioncoment");
  };
  return (

    <main className="flex flex-1 p-4 gap-5">
      <div className="flex flex-col w-full bg-white p-4 rounded-lg shadow mb-4 gap-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{material.title}</h2>

        {/* Display Material Content */}
        <div className="flex flex-col bg-white   p-4 rounded-lg shadow mb-4 gap-5">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : material.type === "text" && embedUrl ? (
            // Display PDF menggunakan iframe
            <div className="h-90 bg-gray-100 rounded-lg overflow-hidden mb-4">
              <iframe
                src={embedUrl}
                width="100%"
                height="600px"
                className="rounded-lg border border-gray-300"
                title="PDF Viewer"
                onError={() => {
                  setError("Failed to load PDF.");
                  console.error("Error loading PDF with URL:", embedUrl);
                }}
              />
              </div>
          ) : (
            <div className="text-gray-500">No content available.</div>
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-comment" onClick={handleCommentClick}></i>
              <span>Comment 27</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-download"></i>
              <span>Downloads 7</span>
            </div>
          </div>
      </div>
              {/* Sidebar: Course Overview */}
              <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
          <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Back to Materials
        </button>

            <div className="text-lg font-semibold mt-3">Overview</div>
            <div className="text-sm text-gray-500">
              Course by Dr. Andi Prasetyo, Ph.D. in collaboration with
              Universitas Indonesia
            </div>
            <div className="text-lg font-semibold text-blue-800 mt-2">
              Data Analysis Fundamentals
            </div>
            <div className="flex space-x-2 mt-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Data Analysis
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Statistics
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Excel
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                SQL
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Power BI
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              In this course, you will master the foundational skills of data
              analysis with practical applications in real-world scenarios.
              Learn how to collect, clean, and manipulate data effectively,
              create compelling data visualizations, and apply basic statistical
              techniques to drive data-driven decision-making. This course is
              suitable for beginners and those looking to strengthen their
              analytical skills.
            </div>
            <div className="text-lg font-semibold mt-4">What You'll Learn:</div>
            <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
              <li>Principles of data collection and cleaning</li>
              <li>
                Hands-on experience with Excel and SQL for data manipulation
              </li>
              <li>Visualizing data with Power BI for impactful storytelling</li>
              <li>Basic statistical analysis for interpreting data patterns</li>
              <li>Real-world case studies to build practical expertise</li>
            </ul>
          </div>
        </aside>
    </main>
  );
};

export default MaterialDetail;
