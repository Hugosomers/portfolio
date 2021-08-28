import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Binemon from './pages/Binemon';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/portfolio" component={ Home }/>
        <Route exact path="/portfolio/contato" component={ Contact }/>
        <Route exact path="/portfolio/projetos" component={ Projects }/>
        <Route exact path="/portfolio/binemonApp" component={ Binemon }/>
      </Switch>
    </div>
  );
}

export default App;
