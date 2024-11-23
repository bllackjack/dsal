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
        className="dsal-container"
        style={{
          position: scrolled ? 'fixed' : 'absolute',
          top: scrolled ? '20px' : '50%',
          left: scrolled ? 'auto' : '50%',
          right: scrolled ? '20px' : 'auto',
          transform: scrolled ? 'none' : 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: scrolled ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: scrolled ? '1.5rem' : '25vw',
          lineHeight: scrolled ? '1.2' : 'normal',
          textAlign: 'center',
          transition: 'all 0.5s ease',
          width: scrolled ? 'auto' : '100%',
        }}
      >
        {/* DS Section */}
        <motion.div
          style={{
            display: 'flex',
            position: 'relative',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          whileHover={{
            scale: 1.2, // Scale on hover
          }}
        >
          {/* D */}
          <motion.div
            style={{
              fontWeight: 'bold',
              color: '#D1D870',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              transition: 'all 0.7s ease',
            }}
            whileHover={{
              x: -50,
            }}
          >
            D
          </motion.div>

          {/* Image for DS */}
          <motion.div
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              backgroundImage: "url('/new.jpg')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px', // Square border
              zIndex: -1,
              opacity: 0, // Initially hidden
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{
              scale: 1.5,
              opacity: 1, 
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* S */}
          <motion.div
            style={{
              fontWeight: 'bold',
              color: '#D1D870',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              x: 30, 
            }}
          >
            S
          </motion.div>
        </motion.div>

        {/* AL Section */}
        <motion.div
          style={{
            display: 'flex',
            position: 'relative',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          whileHover={{
            scale: 1.2, 
          }}
        >
          {/* A */}
          <motion.div
            style={{
              fontWeight: 'bold',
              color: '#D1D870',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              x: -30, 
            }}
          >
            A
          </motion.div>

          {/* Image for AL */}
          <motion.div
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              backgroundImage: "url('/new.jpg')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px', // Square border
              zIndex: -1,
              opacity: 0, // Initially hidden
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{
              scale: 1.5,
              opacity: 1, // Show image on hover
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* L */}
          <motion.div
            style={{
              fontWeight: 'bold',
              color: '#D1D870',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              transition: 'all 0.7s ease',
            }}
            whileHover={{
              x: 30, 
            }}
          >
            L
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
