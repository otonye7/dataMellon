import Homes from './pages/home/home.page';
import Segment from './components/segment/segment.component';
// import Signup from './pages/signup/signup.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Switch>
					<Route  path={'/'} exact={true}  component={Homes} />
          <Route  path={'/segment'}  component={Segment} />
			</Switch>
    </div>
  );
}

export default App;
