import Homes from './pages/home/home.page';
import Segment from './components/segment/segment.component';
import Order from './components/order/order.component';
// import Signup from './pages/signup/signup.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Switch>
					<Route  path={'/'} exact={true}  component={Homes} />
          <Route  path={'/segment'}  component={Segment} />
          <Route  path={'/order'}  component={Order} />
			</Switch>
    </div>
  );
}

export default App;
