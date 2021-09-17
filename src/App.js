import Homes from './pages/home/home.page';
// import Signup from './pages/signup/signup.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Switch>
					<Route  path={'/'} exact={true}  component={Homes} />
			</Switch>
    </div>
  );
}

export default App;
