import React from 'react'

const Divider = () => {
  return (
    <div className="flex items-center w-full my-10">
      {/* Left Dotted Line */}
      <div 
        // 1. Apply your custom theme color class here
        className="flex-grow h-[2px] text-textPrimary transition-colors duration-300" 
        style={{ 
          // 2. Use 'currentColor' so it inherits the variable from the class above
          backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
          backgroundSize: '8px 100%' 
        }} 
      />
      
      {/* Center Node */}
      <div className="mx-4 relative flex items-center justify-center">
        {/* 3. Use your custom background utility */}
        <div className="relative w-5 h-5 bg-textPrimary rounded-full transition-colors duration-300"></div>
      </div>
      
      {/* Right Dotted Line */}
      <div 
        className="flex-grow h-[2px] text-textPrimary transition-colors duration-300" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
          backgroundSize: '8px 100%' 
        }} 
      />
    </div>
  )
}

export default Divider