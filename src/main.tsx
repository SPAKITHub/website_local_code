
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure to clear any existing content
const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.innerHTML = '';
  createRoot(rootElement).render(<App />);
}
