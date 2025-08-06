// src/Components/Alerts.jsx
import React from 'react';

export const SuccessAlert = ({ message }) => {
  return (
    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4" role="alert">
      <span className="font-bold text-[15px] inline-block mr-4">Success!</span>
      <span className="block text-sm font-medium sm:inline max-sm:mt-2">
        {message}
      </span>
    </div>
  );
};

export const ErrorAlert = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-4" role="alert">
      <span className="font-bold text-[15px] inline-block mr-4">Error!</span>
      <span className="block text-sm font-medium sm:inline max-sm:mt-2">
        {message}
      </span>
    </div>
  );
};