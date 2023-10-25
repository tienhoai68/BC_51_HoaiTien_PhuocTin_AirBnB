import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';
import { LoadingProvider } from './contexts/Loading/Loading';

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
