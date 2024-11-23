'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: '200vh', 
        backgroundColor: '#545F41',
        backgroundImage: "url('/bg.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        fontFamily: "'Playfair Display', serif",
        margin: 0,
        overflowX: 'hidden',
      }}
    >
      {/* Hamburger Menu */}
      {scrolled && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 1000,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          onClick={() => alert('Menu clicked')} 
        >
          <div
            style={{
              width: '30px',
              height: '4px',
              backgroundColor: '#D1D870',
              borderRadius: '2px',
            }}
          ></div>
          <div
            style={{
              width: '30px',
              height: '4px',
              backgroundColor: '#D1D870',
              borderRadius: '2px',
            }}
          ></div>
          <div
            style={{
              width: '30px',
              height: '4px',
              backgroundColor: '#D1D870',
              borderRadius: '2px',
            }}
          ></div>
        </div>
      )}

      {/* DSAL Section */}
      <motion.div
        className="center-box"
        style={{
          position: scrolled ? 'fixed' : 'absolute',
          top: scrolled ? '20px' : '50%',
          right: scrolled ? '20px' : '50%',
          transform: scrolled ? 'translate(0, 0)' : 'translate(50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.5s ease',
          flexDirection: scrolled ? 'column' : 'row',
        }}
      >
        {/* DS Section */}
        <motion.div
          className="ds"
          whileHover={{
            backgroundImage: "url('/ds.jpg')",
            backgroundSize: 'cover',
            filter: 'blur(3px)', 
          }}
          style={{
            width: scrolled ? '80px' : '150px',
            height: scrolled ? '50px' : '150px',
            backgroundColor: scrolled ? 'transparent' : '#545F41', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: scrolled ? '1rem' : '2rem',
            fontWeight: 'bold',
            color: '#D1D870',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            borderRadius: '10px 0 0 10px',
            cursor: 'pointer',
            letterSpacing: '-2px', 
          }}
        >
          DS
        </motion.div>

        {/* Divider */}
        {!scrolled && (
          <div
            style={{
              width: '2px',
              height: '150px',
              backgroundColor: '#545F41',
            }}
          />
        )}

        {/* AL Section */}
        <motion.div
          className="al"
          whileHover={{
            backgroundImage: "url('/al.jpg')", 
            backgroundSize: 'cover',
            filter: 'blur(3px)', 
          }}
          style={{
            width: scrolled ? '80px' : '150px',
            height: scrolled ? '50px' : '150px',
            backgroundColor: scrolled ? 'transparent' : '#545F41', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: scrolled ? '1rem' : '2rem',
            fontWeight: 'bold',
            color: '#D1D870',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            borderRadius: '0 10px 10px 0',
            cursor: 'pointer',
            letterSpacing: '-2px', 
          }}
        >
          AL
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;


