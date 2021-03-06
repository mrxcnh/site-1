import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ServiceDetail from './components/pages/ServiceDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/epics" exact component={Services}/>
          <Route path="/epic-detail" exact component={ServiceDetail}/>
          <Route path="/sign-up" exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
