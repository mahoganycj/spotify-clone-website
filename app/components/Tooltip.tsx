import React from 'react';

const Tooltip: React.FC<{ message: string; children: React.ReactNode }> = ({ message, children }) => {
  return (
    <div className="relative group">
      {children}
      <span className="absolute bottom-0 hidden mb-6 group-hover:flex bg-gray-600 p-2 text-xs text-white rounded-md shadow-lg">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
