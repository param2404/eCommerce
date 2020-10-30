import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import Home from './components/Home'
import Signup from './components/WebComponents/Signup'
import Login from './components/WebComponents/Login'
import SubCategory from './components/WebComponents/SubProducts'
import store from './store'

const reduxStore = store()
function App() {
  return (<div className="d-flex" style={{ flexDirection: 'column' }}>
    <ConnectedRouter history={reduxStore.history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:sub/:subcategory" component={SubCategory} />
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </ConnectedRouter>
  </div>
  );
}

export default App;
