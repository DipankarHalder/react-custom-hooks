import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Fetch from './pages/Fetch';

export default function Routers() {
  return (
    <BrowserRouter>
      <p><span>Clouser function + React = </span><br />💖 React hooks 💖</p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/useFetch" component={Fetch} />
      </Switch>
      <ul className="app-navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/useFetch">useFetch</Link></li>
      </ul>
    </BrowserRouter>
  )
}