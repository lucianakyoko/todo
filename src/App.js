import Header from './components/Header';
import NoTaskScreen from './components/NoTaskScreen';
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <NoTaskScreen />
    </div>
  );
}

export default App;
