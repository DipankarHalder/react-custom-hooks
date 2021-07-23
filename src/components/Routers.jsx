import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Fetch } from './pages/Fetch';
import { EventListener } from './pages/EventListener';
import { ToggleElements } from './pages/ToggleElements';
import { LocalStorage } from './pages/LocalStorage';
import { HasMounted } from './pages/HasMounted';
import { Interval } from './pages/Interval';
import { ArrayJoin } from './pages/ArrayJoin';
import { Draggable } from './pages/Draggable';
import { TickerTape } from './pages/TickerTape';

export const Routers = () => {
  return (
    <BrowserRouter>
      <div className="app-page-wrapper">
        <h1><span>Clouser function + React = </span>💖 React hooks 💖</h1>
        <ul className="app-navigation">
          <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/useFetch">useFetch</NavLink></li>
          <li><NavLink activeClassName="active" to="/useEventListener">useEventListener</NavLink></li>
          <li><NavLink activeClassName="active" to="/useToggleElements">useToggleElements</NavLink></li>
          <li><NavLink activeClassName="active" to="/useLocalStorage">useLocalStorage</NavLink></li>
          <li><NavLink activeClassName="active" to="/useHasMounted">useHasMounted</NavLink></li>
          <li><NavLink activeClassName="active" to="/useInterval">useInterval</NavLink></li>
          <li><NavLink activeClassName="active" to="/useArrayJoin">useArrayJoin</NavLink></li>
          <li><NavLink activeClassName="active" to="/useDraggable">useDraggable</NavLink></li>
          <li><NavLink activeClassName="active" to="/useTickerTape">useTickerTape</NavLink></li>
        </ul>
        <div className="app-page-cover">
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/useFetch" component={Fetch} />
              <Route exact path="/useEventListener" component={EventListener} />
              <Route exact path="/useToggleElements" component={ToggleElements} />
              <Route exact path="/useLocalStorage" component={LocalStorage} />
              <Route exact path="/useHasMounted" component={HasMounted} />
              <Route exact path="/useInterval" component={Interval} />
              <Route exact path="/useArrayJoin" component={ArrayJoin} />
              <Route exact path="/useDraggable" component={Draggable} />
              <Route exact path="/useTickerTape" component={TickerTape} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}