import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

export default function Routers() {
  return (
    <BrowserRouter>
      <p><span>Clouser function + React = </span><br />💖 React hooks 💖</p>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}