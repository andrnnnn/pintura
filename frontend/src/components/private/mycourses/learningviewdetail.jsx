import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Logo from "/logo/logo.png";
import MaterialDetail from "./MaterialDetail";

const LearningViewDetail = () => {
  const location = useLocation();
  const { course_id } = useParams();
  const course = location.state?.course;

  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [isMaterialOpen, setIsMaterialOpen] = useState({}); // State untuk toggle

  // Fetch materials
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(
          `/api/auth/materials/hierarchy/${course_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setMaterials(data.data || []);
          setError(null);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch materials.");
        }
      } catch (err) {
        setError(err.message);
        setMaterials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [course_id]);

  // Toggle material open/close
  const toggleMaterial = (materialId) => {
    setIsMaterialOpen((prev) => ({
      ...prev,
      [materialId]: !prev[materialId],
    }));
  };

  // Render materials recursively
// Fungsi renderMaterials dengan navigasi ke halaman kuis
const renderMaterials = (parentId = null) => {
  const filteredMaterials = materials.filter(
    (material) => material.parent_material_id === parentId
  );

  return filteredMaterials.map((material) => (
    <div key={material.material_id} className="mb-4">
      <div
        className={`p-4 border-b border-gray-300 mb-2 shadow cursor-pointer ${
          selectedMaterial?.material_id === material.material_id
            ? "bg-blue-100"
            : "bg-white"
        }`}
        onClick={() => {
          if (material.type === "quiz") {
            // Navigasi ke halaman kuis jika tipe material adalah "quiz"
            window.location.href = `/dashboard/mycourses/learningquiz/${material.material_id}`;
          } else {
            setSelectedMaterial(material);
            toggleMaterial(material.material_id);
          }
        }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-black">{material.title}</h3>
          <button
            className="text-black"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click
              toggleMaterial(material.material_id);
            }}
          >
            {isMaterialOpen[material.material_id] ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-right"></i>
            )}
          </button>
        </div>
      </div>
      {isMaterialOpen[material.material_id] && (
        <div className="pl-6">{renderMaterials(material.material_id)}</div>
      )}
    </div>
  ));
};

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex flex-col items-center">
        <div className="flex justify-center w-full mb-4">
          <img src={Logo} alt="PINTUR Logo" className="h-16 w-16 object-contain" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-500">
            Home &gt; My Courses &gt; {course?.course_title} &gt; Materials
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-4 shadow">
          <div className="max-w-md mx-auto">
            <div className="bg-blue-600 p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold text-white">Materials</h2>
            </div>

            {materials.length > 0 ? (
              renderMaterials()
            ) : (
              <div className="text-center py-4">No materials found.</div>
            )}

            <div className="bg-white p-4 border-t border-gray-300 shadow">
              <h3 className="text-lg font-semibold text-black">Final Exam</h3>
            </div>
          </div>
        </aside>

        {/* Main Section */}
        <section className="flex-1 bg-gray-50 p-4">
          {selectedMaterial ? (
            <MaterialDetail material={selectedMaterial} />
          ) : (
            <div>
              <h1 className="text-xl font-semibold text-gray-800 mb-4">
                {course?.course_title || "Course Materials"}
              </h1>
              <p className="text-gray-600">
                Silakan pilih materi pembelajaran dari sidebar kiri.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default LearningViewDetail;
