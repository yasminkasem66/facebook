import logo from './logo.svg';
import './App.css';
import Facebook from './component/Facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          authenticate  with facebook
        </p>
      </header>
      <Facebook />
      
      <MessengerCustomerChat
        pageId="106293271909112"
        appId="424217142629496"
      />
    </div>
  );
}

export default App;
