'use client';

import Head from 'next/head';

const CenteredDSAL = () => {
  return (
    <div className="main-container">
      <Head>
        <title>Centered DSAL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="green-section">
        <h1 className="centered-text">DSAL</h1>
        <h2 className="subtitle">Coming Soon</h2>
      </div>

      <style jsx>{`
        .main-container {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        .green-section {
          background-color: #424d37;
          height: 100vh;
          font-family: 'Georgia', serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .centered-text {
          color: #ffe1a8;
          font-size: 25rem;
          font-weight: bold;
          margin: 0;
          padding: 0;
        }

        .subtitle {
          color: #ffe1a8;
          font-size: 2rem;
          margin-top: 1rem;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default CenteredDSAL;
