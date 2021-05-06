
import './App.css';
import Header from "./header";
import Footer from "./footer";
import Contact from './contact';
import Home from './home';
import About from './about';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
