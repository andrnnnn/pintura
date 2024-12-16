import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(
          `https://localhost:5000/api/auth/materials/hierarchy/${course_id}`,
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

  const renderMaterials = (parentId = null) => {
    const filteredMaterials = materials.filter(
      (material) => material.parent_material_id === parentId
    );

    return filteredMaterials.map((material) => (
      <div key={material.material_id} className="mb-4">
        <div
          className={`p-4 border mb-2 shadow cursor-pointer ${
            material.parent_material_id === null ? "bg-blue-600 text-white" : "bg-white"
          }`}
          onClick={() => setSelectedMaterial(material)}
        >
          <h3 className="text-lg font-semibold">{material.title}</h3>
        </div>
        <div className="pl-6">{renderMaterials(material.material_id)}</div>
      </div>
    ));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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

      <main className="flex flex-1">
        <aside className="w-1/4 bg-white p-4 shadow">
          {materials.length > 0 ? renderMaterials() : <div>No materials found.</div>}
        </aside>

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
