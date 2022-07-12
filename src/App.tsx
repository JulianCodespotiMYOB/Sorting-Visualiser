import './App.css';
import Body from './features/Components/Body/Body';
import Toolbar from './features/Components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
      </header>
      <Body />
    </div>
  );
}

export default App;
