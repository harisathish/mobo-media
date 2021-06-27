import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'  
import Featured from './components/Featured';
import Form from './components/Form';
import Ibooking from './components/Ibooking';
import Images from './components/Images';
import MobileApp from './components/MobileApp';
import SuperCharge from './components/SuperCharge';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>  
      <Navigation/>
    <div className="App">
      <Switch>
      <Route exact path="/Images" component={Images} />  
      <Route exact path="/Form" component={Form} />  
      {/* <Route exact path="/SuperCharge" component={SuperCharge} />   */}
      <Route exact exact path="/Featured" component={Featured} />  
      <Route exact path="/Ibooking" component={Ibooking} />  
      <Route exact path="/MobileApp" component={MobileApp} />  
      </Switch>
    {/* <Form/> */}
    {/* <SuperCharge/> */}
    {/* <Featured/> */}
    {/* <br/> */}
    {/* <Ibooking/> */}
    {/* <MobileApp/> */}
    </div>
    </Router>
  );
}

export default App;
