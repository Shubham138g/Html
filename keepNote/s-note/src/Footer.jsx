import React from 'react';

const Footer = () => {
    const year =new Date().getFullYear();
  return (
    <>
      <div className="content">
    </div>
      <footer>
        <p>copyright © {year}</p>
      </footer>
    </>
  );
}

export default Footer;
