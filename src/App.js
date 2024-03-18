import './App.css';
import CardTarefas from './components/CardTarefas';
import InputAdicionar from './components/InputAdicionar';

function App() {
  return (
    <div>
      <InputAdicionar />

      <div>
        <CardTarefas />
      </div>
    </div>
  );
}

export default App;
