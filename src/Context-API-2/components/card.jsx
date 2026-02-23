import React from "react";

function Card({ darkMode }) {
  return (
    <section
      className={`p-2 border rounded m-4 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <div className="p-2">
        <img
          className="w-full h-48 object-cover rounded"
          src="/src/Context-API-2/components/cover-image.jpg"
          alt="Cover"
        />
        <h4 className="text-lg font-semibold mt-2">Mahedi Hasan Riad</h4>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Education: BSc in Computer Science
        </p>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Age: 26
        </p>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Religion: Islam
        </p>
      </div>

      <button
        className={`w-full rounded px-3 py-2 mt-2 transition-colors duration-300 ${
          darkMode
            ? "bg-blue-500 hover:bg-blue-400 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        View Profile..
      </button>
    </section>
  );
}

export default Card;