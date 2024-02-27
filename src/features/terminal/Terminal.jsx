import React from 'react';

function Terminal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black text-white p-4">
      <div className="flex justify-between items-center mb-2">
        <span>Terminal</span>
        <button onClick={() => {}}>X</button> {/* Implement the close functionality */}
      </div>
      <div className="overflow-auto h-full">
        {/* Terminal content goes here */}
        <p>$ Welcome to VS Code themed terminal</p>
      </div>
    </div>
  );
}

export default Terminal;
