import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';

import theme from './theme';

import { loadUser } from './redux/action/auth';
import setAuthToken from './utils/setToken';
import {
  NotFound,
} from './pages/NotFound';

// vendor route
import LoginPage from './pages/Vendor/Login';
import ResetPasswordPage from './pages/ResetPassword';
import SetPassword from './pages/SetPassword';
import VendorRoute from './pages/Vendor/Route';
import StaffRoute from './pages/Staff/Route';
import AdminRoute from './pages/Admin/Route';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
}, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginPage}></Route>
              <Route path="/vendor" component={VendorRoute}></Route>
              <Route path="/staff" component={StaffRoute}></Route>
              <Route path="/admin" component={AdminRoute}></Route>
              <Route path="/reset-password" component={ResetPasswordPage}></Route>
              <Route path="/set-password" component={SetPassword}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Router>
        </Provider>
    </ThemeProvider>
  );
}

export default App;

