import './app.css';
import { Toolbar, Body } from './components';
import * as SC from './app.styles';

function App() {
  return (
    <SC.Body>
      <SC.Header>
        <Toolbar />
      </SC.Header>
      <Body />
    </SC.Body>
  );
}

export default App;
