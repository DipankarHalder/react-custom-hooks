import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Fetch from './pages/Fetch';
import EventListener from './pages/EventListener';

export default function Routers() {
  return (
    <BrowserRouter>
      <p><span>Clouser function + React = </span><br />💖 React hooks 💖</p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/useFetch" component={Fetch} />
        <Route exact path="/useEventListener" component={EventListener} />
      </Switch>
      <ul className="app-navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/useFetch">useFetch</Link></li>
        <li><Link to="/useEventListener">useEventListener</Link></li>
      </ul>
    </BrowserRouter>
  )
}