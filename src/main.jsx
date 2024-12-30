import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeContextProvider } from './context/themeContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import { NotifContext } from './context/notifContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <NotifContext>
    <ThemeContextProvider>
    <App />
    </ThemeContextProvider> 
    </NotifContext> 
    </AuthContextProvider>
  </StrictMode>
)
