import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import themeLight from './theme/light';
import themeDark from './theme/dark';
import Button from "@material-ui/core/Button";
// import { NotFound } from './pages/NotFound';


function App() {
  const [light, setLight] = useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={LoginPage}></Route>
            <Route path="/vendor" component={VendorRoute}></Route>
            <Route path="/staff" component={StaffRoute}></Route>
            <Route path="/admin" component={AdminRoute}></Route>
            <Route path="/reset-password" component={ResetPasswordPage}></Route>
            <Route path="/set-password" component={SetPassword}></Route>
            <Route component={NotFound}></Route> */}
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;

