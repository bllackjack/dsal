'use client';

import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      {isScrolled && <div className="hamburger-menu">☰</div>}
      <div className={`word-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`line ${isScrolled ? '' : 'single-line'}`}>
          <span className="letter">D</span>
          <span className="letter">S</span>
          {!isScrolled && (
            <>
              <span className="letter">A</span>
              <span className="letter">L</span>
            </>
          )}
        </div>
        {isScrolled && (
          <div className="line">
            <span className="letter">A</span>
            <span className="letter">L</span>
          </div>
        )}
      </div>
      <style jsx>{`
        /* Container styling */
        .container {
          font-family: 'Poppins', serif;
          margin: 0;
          padding: 0;
          height: 200vh; /* Allow scrolling */
          background-color: #424D37; /* Base background color */
          background-image: 
            linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(249, 226, 133, 0.2)); /* Gradient with mixture of colors */
          overflow: hidden;
        }

        /* Centered word container */
        .word-container {
          font-family: "Work Sans", sans-serif;
          font-weight: 500; /* Semibold font weight */
          font-style: italic; /* Normal font style */
          font-size: 75vh; /* Large initial size */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #F9E285; /* Text color */
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth transitions with easing */
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        /* Scrolled state for word container */
        .word-container.scrolled {
          font-size: 5vh; /* Minimized size */
          top: 10px;
          right: auto; /* Reset right alignment */
          left: 10px; /* Align to the left */
          transform: none;
          text-align: left; /* Align text to the left */
          align-items: flex-start; /* Align to the left */
        }

        /* Line styling */
        .line {
          display: flex;
          justify-content: center;
          gap: 0em; /* Reduced gap for no spacing between letters */
        }

        /* Single line styling for initial state */
        .single-line {
          display: flex;
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

        /* Hamburger menu styling */
        .hamburger-menu {
          position: fixed;
          top: 15px;
          right: 15px; /* Original position on the right */
          left: auto; /* Ensure it’s reset */
          font-size: 3vh;
          color: #F9E285;
          cursor: pointer;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth opacity change */
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
