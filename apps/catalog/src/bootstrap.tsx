import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Standalone mount: renders the catalog on its own port (:3001) during dev and
// slots into the shell unchanged when consumed as a remote.
createRoot(document.getElementById('root')!).render(<App />);
