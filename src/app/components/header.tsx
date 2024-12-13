'use client';

import { useState, useEffect } from 'react';

const HeaderPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false); // State to control the visibility of the new section

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50); // For the DSAL section
          setIsSectionVisible(window.scrollY > 300); // Show new section after scrolling down 300px
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

      {/* The new section visibility controlled by `isSectionVisible` */}
      {isSectionVisible && (
        <div className="new-section visible">
          <h2>New Section</h2>
          <p>This section appears when you scroll down 300px.</p>
        </div>
      )}

      <style jsx>{`
        .container {
          font-family: 'Poppins', serif;
          margin: 0;
          padding: 0;
          height: 200vh;
          background-color: #424D37;
          background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(249, 226, 133, 0.2));
          overflow: hidden;
        }

        .word-container {
          font-family: "Work Sans", sans-serif;
          font-weight: 500;
          font-style: italic;
          font-size: 75vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #F9E285;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .word-container.scrolled {
          font-size: 5vh;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          background-color: rgba(0, 0, 0, 0.6);
          padding: 20px;
        }

        .line {
          display: flex;
          justify-content: center;
          gap: 0em;
        }

        .single-line {
          display: flex;
        }

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

        .letter:nth-child(1):hover,
        .letter:nth-child(2):hover {
          background-image: url('/image.jpg');
        }

        .letter:nth-child(3):hover,
        .letter:nth-child(4):hover {
          background-image: url('/ds.jpg');
        }

        .hamburger-menu {
          position: fixed;
          top: 15px;
          right: 15px;
          font-size: 3vh;
          color: #F9E285;
          cursor: pointer;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .new-section {
          opacity: 0;
          transition: opacity 1s ease-in-out;
          text-align: center;
          color: white;
          margin-top: 100px;
        }

        .new-section.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default HeaderPage;
