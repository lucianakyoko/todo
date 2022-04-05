import Header from './components/Header';
import NewTaskForm from './components/NewTaskForm';
import { Title } from './components/Title/style';
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Title>Teste</Title>
      <NewTaskForm />
    </div>
  );
}

export default App;
