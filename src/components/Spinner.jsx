import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="spinner">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
      </div>
      <p className="text-slate-200 text-lg font-semibold mt-4">Loading products...</p>
    </div>
  );
};

export default Spinner;
