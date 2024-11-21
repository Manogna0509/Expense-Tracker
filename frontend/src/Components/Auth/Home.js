import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaChartLine, FaWallet, FaPiggyBank, FaChartBar } from 'react-icons/fa';


// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.6); }
  100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const wave = keyframes`
  0% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(-25%) translateY(2px); }
  100% { transform: translateX(0) translateY(0); }
`;

const sideWave = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeStyled>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="side-wave left-wave"></div>
      <div className="side-wave right-wave"></div>
      
      <div className="hero-section">
        <nav>
          <div className="logo">
            <FaChartLine />
            <span>ExpenseTracker</span>
          </div>
          <div className="nav-buttons">
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Smart Money Management</h1>
          <p>Track expenses, analyze spending patterns, and achieve your financial goals</p>
          <button className="cta-button" onClick={() => navigate('/login')}>
            Get Started
          </button>
        </div>

        <div className="features">
          <div className="feature-card">
            <FaWallet />
            <h3>Track Expenses</h3>
            <p>Monitor your daily spending with ease</p>
          </div>
          <div className="feature-card">
            <FaChartBar />
            <h3>Analytics</h3>
            <p>Visualize your financial patterns</p>
          </div>
          <div className="feature-card">
            <FaPiggyBank />
            <h3>Save Money</h3>
            <p>Achieve your savings goals faster</p>
          </div>
        </div>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #2D8B75 0%, #3AA688 25%, #43C59E 50%, #3AA688 75%, #2D8B75 100%);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  position: relative;
  overflow: hidden;

  .wave {
    position: absolute;
    width: 100%;
    height: 100px;
    background-repeat: repeat-x;
    opacity: 0.5;
  }

  .wave1 {
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    animation: ${wave} 15s linear infinite;
  }

  .wave2 {
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.15' d='M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    animation: ${wave} 20s linear infinite reverse;
  }

  .side-wave {
    position: absolute;
    width: 300px;
    height: 100%;
    background-repeat: repeat-y;
    opacity: 0.2;
    z-index: 0;
  }

  .left-wave {
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 1440'%3E%3Cpath fill='%23ffffff' d='M0,0L0,1440C80,1392,160,1296,240,1248C320,1200,400,1200,480,1224C560,1248,640,1296,720,1296C800,1296,880,1248,960,1200C1040,1152,1120,1104,1200,1080C1280,1056,1360,1056,1400,1056L1440,1056L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
    animation: ${sideWave} 15s ease-in-out infinite;
  }

  .right-wave {
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 1440'%3E%3Cpath fill='%23ffffff' d='M0,0L0,1440C80,1392,160,1296,240,1248C320,1200,400,1200,480,1224C560,1248,640,1296,720,1296C800,1296,880,1248,960,1200C1040,1152,1120,1104,1200,1080C1280,1056,1360,1056,1400,1056L1440,1056L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
    animation: ${sideWave} 15s ease-in-out infinite reverse;
    transform: scaleX(-1);
  }

  .hero-section {
    position: relative;
    z-index: 1;
    padding: 2rem 4rem;
    color: white;

    nav {
      animation: ${slideInLeft} 1s ease-out;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      border-radius: 12px;


      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 2rem;
        font-weight: 600;

        svg {
          font-size: 1.8rem;
          animation: ${float} 3s ease-in-out infinite;
          color: white;
        }
      }

      .nav-buttons {
        display: flex;
        gap: 1rem;

        button {
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: transparent !important;
          color: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);

          &:first-child {
            border: 2px solid white;
            color: white;
            animation-delay: 0.2s;
          }
          &:last-child {
            background: white !important;
            color: #2D8B75;
            animation-delay: 0.4s;
          }
          &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }

        }
      }
    }

    .hero-content {
      text-align: center;
      margin: 6rem 0;
      animation: ${fadeInUp} 1s ease-out;

      h1 {
        font-size: 4rem;
        margin-bottom: 1.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 2.5rem;
        opacity: 0.9;
      }

      .cta-button {
        padding: 1rem 3rem;
        font-size: 1.2rem;
        border-radius: 50px;
        border: none;
        background: white;
        color: #2D8B75;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        animation: ${glow} 3s ease-in-out infinite;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          background: #f8f8f8;
        }
      }
    }

    .features {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 4rem;

      .feature-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        width: 250px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        animation: ${fadeInUp} 1s ease-out;

        &:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.15);
        }

        svg {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          animation: ${float} 3s ease-in-out infinite;
        }

        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 1rem;

      nav {
        .logo span {
          display: none;
        }
      }

      .hero-content {
        margin: 3rem 0;

        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1rem;
          padding: 0 1rem;
        }
      }

      .features {
        flex-direction: column;
        align-items: center;

        .feature-card {
          width: 100%;
          max-width: 300px;
        }
      }
    }
  }
`;

export default Home;
