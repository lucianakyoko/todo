import Header from './components/Header';
import { Title } from './components/Title/style';
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Title>Teste</Title>
    </div>
  );
}

export default App;
