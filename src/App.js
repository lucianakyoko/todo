import Header from './components/Header';
import SwitchBtn from './components/Header/SwitchBtn';
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <SwitchBtn />
    </div>
  );
}

export default App;
