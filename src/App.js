import Header from './components/Header';
import SideBar from './components/Header/SideBar';
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <SideBar />
    </div>
  );
}

export default App;
