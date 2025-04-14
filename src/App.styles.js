import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${props => props.theme.accent};
  }

  .card {
    background-color: ${props => props.theme.cardBg};
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn-primary {
    background-color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
  }

  .btn-primary:hover {
    background-color: ${props => props.theme.accent};
    border-color: ${props => props.theme.accent};
  }

  .navbar {
    background-color: ${props => props.theme.navbar} !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .footer {
    background-color: ${props => props.theme.footer};
    color: ${props => props.theme.footerText};
    margin-top: auto;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2.5rem;
    }
    
    .service-card {
      margin-bottom: 1.5rem;
    }
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export default GlobalStyles;