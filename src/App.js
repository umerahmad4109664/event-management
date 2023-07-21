import './App.css';
// import EventCreation from './Components/EventCreation/EventCreation';
// import EventCreationForm from './Components/EventCreationForm';
// import EventListing from './Components/EventList/EventListing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Navbar/Home';
import EventCreate from './Components/Navbar/EventCreate';
import EventListing from './Components/Navbar/EventListing';
import Navbar from './Components/Navbar/Navbar';
import CreateAccountForm from './Components/Account/CreateAccountForm';
import { Provider } from 'react-redux';
import store from './Store/Store';
import RegisterationForm from './Components/Registeration/RegisterationForm';


function App() {
  return (
    <Provider store={store}>

    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' component={Home} exact> <Home/> </Route>
        <Route path='/EventCreate' component={EventCreate} exact> <EventCreate/> </Route>
        <Route path='/EventListing' component={EventListing} exact> <EventListing/> </Route>
        <Route path='/Create-an-Account' component={CreateAccountForm} exact> <CreateAccountForm/> </Route>
        <Route path='/Register-now' component={RegisterationForm} exact> <RegisterationForm/> </Route>


      </Switch>
    </Router>



      {/* <EventCreation/> */}
      {/* <EventListing/> */}
    </>
    </Provider>

  );
}

export default App;
