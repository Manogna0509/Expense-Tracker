import styled from 'styled-components';
import bgImage from '../img/bg.png'; // Add your background image

export const AuthStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
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
    z-index: 1;
  }

  .auth-content {
    position: relative;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 3rem;
    width: 480px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;