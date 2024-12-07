import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import React from 'react';
import TemporaryDrawer from './components/TemporaryDrawer';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
