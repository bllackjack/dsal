'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // To track scroll direction
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          setIsScrolled(window.scrollY > 50); // Trigger transition when scrolling starts
          
          // Determine scroll direction
          if (window.scrollY > lastScrollY) {
            setScrollDirection("down");
          } else {
            setScrollDirection("up");
          }
          setLastScrollY(window.scrollY);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const logoSize = Math.max(2, Math.min(30, 30 - scrollY / 20));
  return (
    <div className="main-container">
      {/* Head tag to modify the HTML head */}
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="The intersection of architecture, design, and construction" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="green-section">
        <div
          className={`header ${isScrolled ? 'sticky' : ''} ${scrollDirection === "up" ? 'show' : 'hide'}`}
          style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
        >
          <div
            className={`logo ${isScrolled ? 'logo-small' : ''}`}
            style={{
              fontSize: `${logoSize}rem`,
              pointerEvents: isScrolled ? 'none' : 'auto',
            }}
          >
            <span className="letter">D</span>
            cc<span className="letter">S</span>
            <span className="letter">A</span>
            <span className="letter">L</span>
          </div>
          {isScrolled && <div className="hamburger-menu">☰</div>}
        </div>
      </div>

      {/* White Section with Gallery */}
      <div className="white-section">
        <div className="gallery-wrapper">
          <div className="gallery">
            <div
              className="gallery-section"
              style={{ backgroundImage: 'url("/image1.jpg")' }}
            >
              Interior design
            </div>
            <div
              className="gallery-section"
              style={{ backgroundImage: 'url("/image2.jpg")' }}
            >
              Kitchen
            </div>
            <div
              className="gallery-section"
              style={{ backgroundImage: 'url("/image3.jpg")' }}
            >
              Bathrooms
            </div>
            <div
              className="gallery-section"
              style={{ backgroundImage: 'url("/image4.jpg")' }}
            >
              Residences
            </div>
          </div>
        </div>
      </div>

     {/* Description Section */}
<div className="yellow-section">
  <div className="yellow-box">
    <h1>DESIGN-BUILD:</h1>
    <h2>The Intersection of Architecture, Design, and Construction</h2>
  </div>

  {/* Contact Us and Instagram Links */}
  <div className="links-container">
    <a href="#contact-us" className="contact-us">@Contact Us</a>
    <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i> Instagram
    </a>
  </div>
</div>

      <style jsx>{`
        .main-container {
          overflow-x: hidden;
        }

        .green-section {
          background-color: #424d37;
          height: 100vh;
          font-family: 'Roboto Slab', serif; 
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .logo {
          display: flex;
          gap: 10px;
          color: #ffe1a8;
          -webkit-background-clip: text;
          font-family: 'Roboto Slab', serif;
          font-style: semi-bold;
          font-size: 30rem; /* Initial large size */
          transition: font-size 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
.show {
          transform: translateY(0);
          transition: transform 0.3s ease-in-out;
        }

        .hide {
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
        }
        .header {
          position: absolute;
          top: 50%;
          left: 50%;
          font-family: 'Roboto Slab', serif;
          font-style: semi-bold;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
         
          align-items: center;
          transition: all 0.1s ease-in;
        }

        .sticky {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(0, 0);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background-color: # 424d37;
          padding: 30px;
          z-index: 9999; 
        }

        .logo-small {
          font-size: 1.5rem;
          color: #ffe1a8;
          cursor: pointer;
          opacity: 1;
          transition: opacity 1s ease;
          position: absolute;
          top: 12px;
          left: 10px;
          z-index: 9999; 
        }

        .yellow-section {
          background-color: #ffe8d6;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .yellow-box {
          padding: 20px;
          text-align: center;
          font-size: 1.5rem;
          font-weight: semi-bold;
        }

        .links-container {
    position: absolute;
    bottom: 20px; /* Positioning links at the bottom */
    display: flex;
    justify-content: center;
    gap: 20px; /* Space between the links */
  }

        .contact-us,
        .instagram {
          color: #424d37;
          font-size: 1.2rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .contact-us:hover,
        .instagram:hover {
          color: #f9e285;
        }

        .instagram i {
          margin-right: 8px;
          font-size: 1.5rem; /* Instagram icon size */
        }

        .white-section {
          background-color: #fefae0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .gallery-wrapper {
          width: 100%;
          max-width: 90%;
          padding: 20px;
        }

        .gallery {
          display: flex;
          gap: 15px;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .gallery-section {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #fff;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          background-size: cover;
          background-position: center;
          height: 400px;
          width: 100%;
          position: relative;
          overflow: hidden;
          transition: opacity 0.5s ease;
        }

        .gallery-section:hover {
          animation: slideshow 10s infinite;
        }

        @keyframes slideshow {
          0% {
            background-image: url('/image1.jpg');
          }
          33% {
            background-image: url('/image2.jpg');
          }
          66% {
            background-image: url('/image3.jpg');
          }
          100% {
            background-image: url('/image4.jpg');
          }
        }
           /* Letter hover effects */
        .letter {
          background-image: none;
          transition: color 0.3s ease, background-size 0.3s ease;
        }

        .letter:hover {
          color: transparent;
          background-size: cover;
          background-position: center;
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Images for hover effects */
        .letter:nth-child(1):hover,
        .letter:nth-child(2):hover {
          background-image: url('/image.jpg'); /* Image for D and S */
        }

        .letter:nth-child(3):hover,
        .letter:nth-child(4):hover {
          background-image: url('/ds.jpg'); /* Image for A and L */
        }

        .hamburger-menu {
          font-size: 1.5rem;
          color: #f2cc8f;
          cursor: pointer;
          opacity: 1;
          transition: opacity 1s ease;
          position: absolute;
          top: 12px;
          right: 80px;
        }

        .background-div {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(144, 238, 144, 0.2); 
          z-index: -1; /* Place it behind all content */
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
