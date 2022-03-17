import './App.css';
import Button from './components/Buttons';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <hr/>
      <Button />
    </ThemeProvider>

  );
}

export default App;
