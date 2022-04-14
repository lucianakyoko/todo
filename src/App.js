import Header from './components/Header';
import NewTaskForm from './components/NewTaskForm';

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />

      <NewTaskForm />
    </div>
  );
}

export default App;
