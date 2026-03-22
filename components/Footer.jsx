import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 py-6 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; 2026 <span className="font-semibold">Yash Kumar</span> Portfolio. All rights reserved.
        </p>
        <p className="text-sm">
          Designed & Developed by <span className="font-semibold">Yash Kumar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;