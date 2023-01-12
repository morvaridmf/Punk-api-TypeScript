import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import { AppProvider } from './context/Context';

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
