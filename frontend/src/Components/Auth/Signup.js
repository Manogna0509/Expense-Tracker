import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FaUser, FaLock, FaChartLine, FaEnvelope } from 'react-icons/fa';
import bgImg from '../../img/bg.png'; 
import login from './Login';
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <SignupStyled>
      <div className="overlay"></div>
      <div className="auth-content">
        <div className="title-container">
          <FaChartLine className="chart-icon" />
          <h2>Expense Tracker</h2>
          <p>Create your account to manage expenses</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <FaUser className="input-icon" />
            <input 
              type="text"
              value={formData.name}
              placeholder="Full Name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="input-control">
            <FaEnvelope className="input-icon" />
            <input 
              type="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="input-control">
            <FaLock className="input-icon" />
            <input 
              type="password"
              value={formData.password}
              placeholder="Password"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className="input-control">
            <FaLock className="input-icon" />
            <input 
              type="password"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Conditions</label>
          </div>

          <div className="submit-btn">
            <button type="submit">Create Account</button>
          </div>
        </form>

        <div className="login-prompt">
          <span>Already have an account?</span>
          <Link 
            to="/login"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
              setError('');
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </SignupStyled>
  );
};

const SignupStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(45, 139, 117, 0.8) 0%,
      rgba(58, 166, 136, 0.7) 50%,
      rgba(67, 197, 158, 0.6) 100%
    );
  }

  .auth-content {
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 3rem;
    width: 480px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);

    .title-container {
      text-align: center;
      margin-bottom: 2rem;

      .chart-icon {
        font-size: 2.5rem;
        color: #2D8B75;
        margin-bottom: 1rem;
      }

      h2 {
        color: #2D8B75;
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #666;
        font-size: 0.9rem;
      }
    }

    .error-message {
      background: #FFEAEA;
      color: #E74C3C;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      text-align: center;
      font-size: 0.9rem;
      border: 1px solid #FFC2C2;
    }

    form {
      .input-control {
        position: relative;
        margin-bottom: 1.25rem;

        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #2D8B75;
        }

        input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 45px;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;

          &:focus {
            outline: none;
            border-color: #2D8B75;
            box-shadow: 0 0 0 2px rgba(45, 139, 117, 0.1);
          }

          &::placeholder {
            color: #999;
          }
        }
      }

      .terms {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 1.5rem 0;

        input[type="checkbox"] {
          accent-color: #2D8B75;
          width: 16px;
          height: 16px;
        }

        label {
          color: #666;
          font-size: 0.9rem;
        }
      }

      .submit-btn {
        button {
          width: 100%;
          padding: 0.75rem;
          background: #2D8B75;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background: #3AA688;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(45, 139, 117, 0.2);
          }
        }
      }
    }

    .login-prompt {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.9rem;
      
      span {
        color: #666;
      }
      
      a {
        color: #2D8B75;
        text-decoration: none;
        margin-left: 5px;
        font-weight: 500;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .auth-content {
      width: 90%;
      padding: 2rem;
      margin: 1rem;
    }
  }
`;

export default Signup;