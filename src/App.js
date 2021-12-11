import logo from './logo.svg';
import './App.css';
import Facebook from './component/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          authenticate  with facebook
        </p>
      </header>
      <Facebook/>
    </div>
  );
}

export default App;
